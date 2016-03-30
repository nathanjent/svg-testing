(function (window, document) {
    window.onload = function() {
        var s = Snap("#svg");
        var ps = [
            { d: "M100,200 C100,100 250,100 250,200 " },
            { d: "M100,200 C85,100 300,150 250,200 " },
            { d: "M100,200 C70,100 330,180 250,200 " },
            { d: "M100,200 C90,100 305,145 250,200 " }];
// TODO make function to get points out of path string
        var p0 = [{ x: "100", y:100 }, { x: 85, y: 100 }, { x: 70, y: 100 }, { x: 90, y: 100 }];
        var p1 = [{ x: "250", y:100 }, { x: 300, y: 150 }, { x: 330, y: 180 }, { x: 305, y: 145 }];
        var p2 = [{ x: "250", y:200 }, { x: 250, y: 200 }, { x: 250, y: 100 }, { x: 250, y: 200 }]];
        var c0 = s.circle(p0[0]["x"], p0[0]["y"], 3);
        var c1 = s.circle(p1[0]["x"], p1[0]["y"], 3);
        var c2 = s.circle(p2[0]["x"], p2[0]["y"], 3);
        var bigCircle = s.circle(150, 150, 30);
        var pos = { cx: 10, cy: 10 };
        var shape = s.path( ps[0]["d"] );
        shape.attr({ fill: "none", stroke: "#000", strokeWidth: 5 });
        bigCircle.attr({ fill: "#bada55", stroke: "#000", strokeWidth: 5 });
        circAnim();
        shapeAnim();
        var i = 0;
        function shapeAnim(){
            c0.stop().animate(
                p0[1]["x"],
                400,
                mina.easein,
                function(){
                    c0.attr(p0[0]);
                }
            );
            c1.stop().animate(
                p1[1]["x"],
                400,
                mina.easein,
                function(){
                    c1.attr(p1[0]);
                }
            );
            c2.stop().animate(
                p2[1]["x"],
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
