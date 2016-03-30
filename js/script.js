(function (window, document) {
    window.onload = function() {
        var s = Snap("#svg");
        var ps = [
            { d: "M100,200 C100,100 250,100 250,200 " },
            { d: "M100,200 C85,100 300,150 250,200 " },
            { d: "M100,200 C70,100 330,180 250,200 " },
            { d: "M100,200 C90,100 305,145 250,200 " }];
        var pp =[
            [{ x: 100, y:100 }, { x: 85, y: 100 }, { x: 70, y: 100 }, { x: 90, y: 100 }],
            [{ x: 250, y:100 }, { x: 300, y: 150 }, { x: 330, y: 180 }, { x: 305, y: 145 }],
            [{ x: 250, y:200 }, { x: 250, y: 200 }, { x: 250, y: 100 }, { x: 250, y: 200 }]];
        var p0 = s.circle(pp[0][0]["x"], pp[0][0]["y"], 3);
        var p1 = s.circle(pp[1][0]["x"], pp[1][0]["y"], 3);
        var p2 = s.circle(pp[2][0]["x"], pp[2][0]["y"], 3);
        var bigCircle = s.circle(150, 150, 30);
        var pos = { cx: 10, cy: 10 };
        var shape = s.path( ps[0]["d"] );
        shape.attr({ fill: "none", stroke: "#000", strokeWidth: 5 });
        bigCircle.attr({ fill: "#bada55", stroke: "#000", strokeWidth: 5 });
        circAnim();
        hapeAnim();
        var i = 0;
        function shapeAnim(){
            p0.stop().animate(
                pp[0][1]["x"]
                400,
                mina.easein,
                function(){
                    p0.attr(pp[0][0]);
                }
            );
            p1.stop().animate(
                pp[1][1]["x"]
                400,
                mina.easein,
                function(){
                    p1.attr(pp[1][0]);
                }
            );
            p2.stop().animate(
                pp[2][1]["x"]
                400,
                mina.easein,
                function(){
                    p2.attr(pp[2][0]);
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
