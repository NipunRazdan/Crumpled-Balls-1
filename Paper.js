class Paper{
       constructor(x,y,radius){
       var options= {    
       isStatic:false,
       friction:0.3,       
       restitution:0.2,
       density:1.0
       }
    this.body= Bodies.circle(x,y,radius,options);
    this.radius=radius;
     World.add(world,this.body);
       }


       display(){
         fill("blue");  
        ellipseMode(RADIUS);
         ellipse(this.body.position.x,this.body.position.y,this.radius)
      
    }
   }
 
   

