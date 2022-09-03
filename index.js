 // getting the elements

 const closeButton = document.getElementById("closeButton");
 const menuBar = document.getElementById("menuBar");

 
 // Adding eventlistener For the close tab

 closeButton.addEventListener("click",Closetab)
 function Closetab(){
     const modal = document.getElementById("modal");
     ( modal.style.display !="block") ? modal.style.display ="block": modal.style.display="none"    
   
  }

 //  Adding EventListner to the Toggle icon 

  menuBar.addEventListener("click",Toggleicon)
   function Toggleicon(){
     const modal = document.getElementById("modal");
     (modal.style.display != "block") ?modal.style.display="block" : modal.style.display="none";  
   
  }
