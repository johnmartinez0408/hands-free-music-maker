direction = 1;

Template.draw.events({
	"click #flip": function(event){
		direction*=-1;
	}
})

function drawStuff(){
	var time = new Date();
	var secs = time.getSeconds()*1000 + time.getMilliseconds();
	drawContext = drawSpace.getContext("2d")
	drawContext.fillStyle="blue";
	
	drawContext.fillRect(0,0,600,300);

	
	drawContext.save();
	drawContext.translate(300,150);
	drawContext.rotate((secs)/(direction*360*(2*Math.PI)))
	drawContext.translate(-300,-150);
	drawContext.fillStyle="white";
	drawContext.fillRect(250,100,100,100);
	drawContext.restore();

	window.requestAnimationFrame(drawStuff);

};

Template.draw.rendered = drawStuff;

