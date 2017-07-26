window.onload = function(){
      var canvas = document.createElement("canvas");
      c = canvas.getContext("2d"),
	  particles ={},
	  particleIndex = 0,
	  particleNum  = 10;
        
	   canvas.height = window.innerHeight;
	   canvas.width = window.innerWidth;
       
	   document.body.appendChild(canvas);
	   
	   c.fillStyle = "black";
	   c.fillRect(0, 0, canvas.width, canvas.height);
	   
	   
	   function Particle(){
	   this.x = canvas.width/2;
	   this.y = canvas.height/2;
	   this.vx = Math.random() * 10 - 5;
	   this.vy = Math.random() * 10 - 5 ;
	   this.gravity  = 0.11;
	   particleIndex++;
	   particles[particleIndex] =  this;
	   this.id = particleIndex;
	   this.life  = 0;
	   this.maxLife = Math.random() * 30 + 30;
	   this.color  = "hsl("+parseInt(Math.random() * 360, 10) + ",  100%, 50%)";
	     }
		 
		 
		 Particle.prototype.draw = function(){
		 this.x += this.vx;
		 this.y += this.vy;
		 //this.vy += this.gravity; 
		 this.life++;
		 if(this.life >= this.maxLife){
		 delete particles[this.id];
		 }
		 c.fillStyle = this.color ;
		 c.fillRect(this.x, this.y, 5, 5);
		 
		 }
          
		  
		  for(var i=0; i<particleNum ; i++){
          new Particle();
		  }
		  
		  
		  setInterval(function(){
		  c.fillStyle = "rgba(0, 0, 0, 0.2)";
	      c.fillRect(0, 0, canvas.width, canvas.height);
		  
		  for(var i=0; i<particleNum ; i++){
          new Particle();
		  }
		  
		  for(var i in particles){
		  particles[i].draw();
		  }
		   }, 30);

 
};

