function sketchProc(P) {
	//Set up stuff
	P.size(window.innerWidth,window.innerHeight);
	P.stroke(70,40,0);
	var now =new Date();
	var oldS=-1;
	//define function
	function drawBranch(x1,y1,x2,y2,cd,sw,lw,time){
		P.strokeWeight(sw)
		P.stroke(70,40,0);
		P.line(x1,y1,x2,y2);
		cd--;
		//draw leaves based on time.
		if(cd<1){
			if(time/24<0.25){
				P.strokeWeight(lw);
				P.stroke(0,250,0);
				P.point(x2,y2)
				return;
			}else if(time/24>0.24&&time/24<0.5){
				P.strokeWeight(lw*1.5);
				P.stroke(0,200,0);
				P.point(x2,y2)
				return;
			}else if(time/24>0.4&&time/24<0.75){
				P.strokeWeight(lw);
				P.stroke(150,100,0);
				P.point(x2,y2)
				return;
			}else{
				return;
			}
		}else if(cd<2){
			//Add more branches
			drawBranch(x2,y2,x2+P.random(-90,90),y2+P.random(-90,90),cd,sw-3,lw,time);
			drawBranch(x2,y2,x2+P.random(-90,90),y2+P.random(-90,90),cd,sw-3,lw,time);
			drawBranch(x2,y2,x2+P.random(-90,90),y2+P.random(-90,90),cd,sw-3,lw,time);
		}else{
			//Add more branches
			drawBranch(x2,y2,x2+P.random(-90,90),y2+P.random(-90,90),cd,sw-3,lw,time);
			drawBranch(x2,y2,x2+P.random(-90,90),y2+P.random(-90,90),cd,sw-3,lw,time);
		}	
	}
	//Draw tree and clock
	P.draw = function() {
		now =new Date();
		if(oldS!=now.getSeconds()){
			oldS=now.getSeconds();
			P.background(255,255,255);
			drawBranch(P.width/2,P.height,P.width/2,P.height/2+P.random(-P.height/8,P.height/8),4,15,80,now.getHours());
			P.fill(0,0,0);
			P.textSize(70);
			P.text(now.getHours() + ":" + now.getMinutes(),P.width/2,50);
		}
	}
}
//create canvas
 var canvas = document.getElementById("canvas1");
// attaching the sketchProc function to the canvas
 var processingInstance = new Processing(canvas, sketchProc);