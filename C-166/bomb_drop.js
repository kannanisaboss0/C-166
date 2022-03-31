//----------------------------------------------------------------Dodge the rocket----------------------------------------------------------------//
  //----------------------------------------------------------------bomb_drop.js---------------------------------------------------------------//

//Registering a component for giving variance to the bomb's position
AFRAME.registerComponent("bomb-dropper",{

    //Schema
    schema:{},

    //Calling the tick function
    tick:function(){

       //Availing the x position to assess whether it is greater than 7 or not
       ///Case-1 -The x position is greater than 7 
       if(this.el.getAttribute("position").x>7){

           //Creating a variable with a random  position to the object with a range of -4 to 4
           y_position=Math.random(0,1)*4-Math.random(0,1)*4

           //Setting the position of the object to its initial value before the start of the animation
           this.el.setAttribute("position","-10 0 0") 

           //Setting the animation of the object with the new random value
           this.el.setAttribute("animation",{property:"position",to:`8 ${y_position} 0`,loop:"true",easing:"linear",dur:"6000"})
       }               
    }
})

   //---------------------------------------------------------------bomb_drop.js----------------------------------------------------------------//
//----------------------------------------------------------------Dodge the rocket----------------------------------------------------------------//
