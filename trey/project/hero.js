/* Trueyy — p5.js "live detection" hero sketch
   A calm field of interview-signal nodes. Most pulse green.
   Periodically one is flagged (red) with an expanding detection ring,
   echoing real-time integrity monitoring. */
(function () {
  if (typeof p5 === 'undefined') return;
  var host = document.getElementById('hero-canvas');
  if (!host) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  new p5(function (p) {
    var W, H, nodes = [], flags = [], scan = 0, t = 0;
    var GREEN, GREEN_DIM, FLAG, INK;
    var NODE_COUNT;

    function palette() {
      GREEN = p.color(120, 240, 150);
      GREEN_DIM = p.color(90, 180, 120, 60);
      FLAG = p.color(255, 96, 78);
      INK = p.color(150, 220, 175, 26);
    }

    function build() {
      W = host.clientWidth; H = host.clientHeight;
      NODE_COUNT = W < 700 ? 34 : 72;
      nodes = [];
      for (var i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: p.random(W), y: p.random(H),
          vx: p.random(-0.18, 0.18), vy: p.random(-0.18, 0.18),
          r: p.random(1.4, 3.0),
          ph: p.random(p.TWO_PI),
          sp: p.random(0.6, 1.5)
        });
      }
    }

    p.setup = function () {
      var c = p.createCanvas(host.clientWidth, host.clientHeight);
      c.parent(host);
      p.pixelDensity(Math.min(window.devicePixelRatio || 1, 2));
      palette();
      build();
      if (reduce) p.noLoop();
    };

    p.windowResized = function () {
      p.resizeCanvas(host.clientWidth, host.clientHeight);
      build();
    };

    function spawnFlag() {
      if (nodes.length === 0) return;
      var n = nodes[(Math.random() * nodes.length) | 0];
      flags.push({ x: n.x, y: n.y, life: 0, max: 150 });
    }

    p.draw = function () {
      p.clear();
      t += 0.01;

      // connection lines between near nodes
      p.strokeWeight(1);
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j];
          var dx = a.x - b.x, dy = a.y - b.y;
          var d2 = dx * dx + dy * dy;
          if (d2 < 21000) {
            var al = p.map(d2, 0, 21000, 46, 0);
            p.stroke(150, 220, 175, al);
            p.line(a.x, a.y, b.x, b.y);
          }
        }
      }

      // nodes
      p.noStroke();
      for (var k = 0; k < nodes.length; k++) {
        var nd = nodes[k];
        var pulse = 0.6 + 0.4 * Math.sin(t * nd.sp * 2 + nd.ph);
        p.fill(120, 240, 150, 60 + pulse * 95);
        p.circle(nd.x, nd.y, nd.r * 2.1);
        p.fill(120, 240, 150, 16);
        p.circle(nd.x, nd.y, nd.r * 6.5 * pulse);
      }

      // detection flags
      for (var f = flags.length - 1; f >= 0; f--) {
        var fl = flags[f];
        fl.life++;
        var prog = fl.life / fl.max;
        var ringR = prog * 70;
        var a2 = (1 - prog) * 220;
        p.noFill();
        p.stroke(255, 96, 78, a2);
        p.strokeWeight(1.6);
        p.circle(fl.x, fl.y, ringR * 2);
        p.stroke(255, 96, 78, a2 * 0.5);
        p.circle(fl.x, fl.y, ringR * 1.3);
        // core
        p.noStroke();
        p.fill(255, 96, 78, (1 - prog) * 255);
        p.circle(fl.x, fl.y, 6);
        if (fl.life >= fl.max) flags.splice(f, 1);
      }

      // periodic flag spawn
      if (!reduce && p.frameCount % 110 === 0) spawnFlag();

      // soft horizontal scan sweep
      scan += 0.0016;
      var sy = (Math.sin(scan) * 0.5 + 0.5) * H;
      var grd = p.drawingContext.createLinearGradient(0, sy - 60, 0, sy + 60);
      grd.addColorStop(0, 'rgba(120,240,150,0)');
      grd.addColorStop(0.5, 'rgba(120,240,150,0.05)');
      grd.addColorStop(1, 'rgba(120,240,150,0)');
      p.drawingContext.fillStyle = grd;
      p.drawingContext.fillRect(0, sy - 60, W, 120);
    };
  });
})();
