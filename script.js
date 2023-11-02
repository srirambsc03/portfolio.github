/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText",{
  strings : ["Sri Ram","Web Developer","Web Designer"],
  loop : true,
  typeSpeed : 110, 
  backSpeed : 100,
  backDelay : 1000,
})

        /* ----- NAVIGATION BAR FUNCTION ----- */
        function myMenuFunction(){
          let menuBtn = document.getElementById("NavMenu");
      
          if(menuBtn.className === "nav-menu"){
            menuBtn.className += " responsive";
          } else {
            menuBtn.className = "nav-menu";
          }
        }
