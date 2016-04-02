(function (window, document) {
    window.onload = function() {
        var s = Snap("#svg");
        var ps = [
            { d: "M100,200 C100,100 250,100 250,200 " },
            { d: "M100,200 C85,100 300,150 250,200 " },
            { d: "M100,200 C70,100 330,180 250,200 " },
            { d: "M100,200 C90,100 305,145 250,200 " }];
		console.log(Snap.parsePathString(ps[0]["d"]));
        var p0 = [
			{ cx: 100, cy: 100 }, 
			{ cx: 85, cy: 100 }, 
			{ cx: 70, cy: 100 }, 
			{ cx: 90, cy: 100 }];
        var p1 = [
			{ cx: 250, cy: 100 }, 
			{ cx: 300, cy: 150 }, 
			{ cx: 330, cy: 180 }, 
			{ cx: 305, cy: 145 }];
        var p2 = [
			{ cx: 250, cy: 200 }, 
			{ cx: 250, cy: 200 }, 
			{ cx: 250, cy: 100 }, 
			{ cx: 250, cy: 200 }];
        var c0 = s.circle(p0[0]["x"], p0[0]["y"], 3);
        var c1 = s.circle(p1[0]["x"], p1[0]["y"], 3);
        var c2 = s.circle(p2[0]["x"], p2[0]["y"], 3);
        var bigCircle = s.circle(150, 150, 30);
        var pos = { cx: 10, cy: 10 };
        var shape = s.path( ps[0]["d"] );
        c0.attr({ fill: "none", stroke: "#000", strokeWidth: 5 });
        c1.attr({ fill: "none", stroke: "#000", strokeWidth: 5 });
        c2.attr({ fill: "none", stroke: "#000", strokeWidth: 5 });
        shape.attr({ fill: "none", stroke: "#000", strokeWidth: 5 });
        bigCircle.attr({ fill: "#bada55", stroke: "#000", strokeWidth: 5 });
        circAnim();
        shapeAnim();
        var i = 0;
        function shapeAnim(){
            c0.stop().animate(
                p0[1],
                400,
                mina.easein,
                function(){
                    c0.attr(p0[0]);
                }
            );
            c1.stop().animate(
                p1[1],
                400,
                mina.easein,
                function(){
                    c1.attr(p1[0]);
                }
            );
            c2.stop().animate(
                p2[1],
                400,
                mina.easein,
                function(){
                    c2.attr(p2[0]);
                }
            );
            shape.stop().animate(
                ps[2],
                400,
                mina.easein,
                function(){
                    shape.attr(ps[0]);
                    shapeAnim();
                }
            );
        }
        function circAnim(){
            bigCircle.stop().animate(
                { cx: 200, cy: 0 },
                800,
                mina.bounce,
                function(){
                    pos.cx = pos.cx + i;
                    pos.cy = pos.cy + Math.sin(i);
                    bigCircle.attr(pos);
                    circAnim();
                    i++;
                    if (i > 200) { i = 0; }
                }
            ); 
        }
    }
})(window, document);
