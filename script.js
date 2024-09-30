

document.addEventListener("keydown", function (e) {
    let el = document.getElementById(e.key.toUpperCase());
    
    if (el) {
     
      el.classList.add("bg-orange-700", "transition-all", "duration-500", "ease-linear");
  
     
      setTimeout(function() {
        el.classList.remove("bg-orange-700");
      }, 500); 
    }
  });
  
  