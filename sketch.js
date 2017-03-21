var x =0;
var speed = 3;
function setup(){
    createCanvas(600,400);
}

function draw(){
    background (50);
    
    // blah blah blah 
    if(mouseIsPressed){
       background(255,0,200);
    }
    
    //make outline white
    stroke(255);
    strokeWeight(6);
    
   if(mouseY<150){
       fill(0,255,0)
   }
   else{
     noFill();
   }
   
   
   // a circle...
   ellipse(x,200,100,100);

   
   //this code is going get the cricle to move on its own
  if(x>width|| x<0){
     console.log("CIRLCE IS OFF THE SCREEN!!!")
     speed =speed * -1;    
   }
   
   x = x + speed;
   console.log(x);
}
