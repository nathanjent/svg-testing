(function (window, document) {
	window.onload = function() {
		var s = Snap("#svg");
		var ps = [{ d: "M100,200 C100,100 250,100 250,200 " },
				{ d: "M100,200 C100,100 250,100 250,200 " },
				{ d: "M100,200 C100,100 150,100 250,200 " }];
		var bigCircle = s.circle(150, 150, 30);
 		var pos = { cx: 10, cy: 10 };
		var shape = s.path( ps[0]["d"] );
		shape.attr({ fill: "none", stroke: "#000", strokeWidth: 5 });
		bigCircle.attr({ fill: "#bada55", stroke: "#000", strokeWidth: 5 });
 		circAnim();
 		var i = 0;
 		function circAnim(){
			shape.stop().animate(
				ps[2],
				400,
				mina.easein,
				function(){
					shape.attr(ps[0]);
				}
			);
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