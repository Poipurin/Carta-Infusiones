window.onscroll = function() {miFuncionFija()};

function miFuncionFija() {
  var elementoFijo = document.querySelector('.Opciones');
  var botonesExtra = document.querySelectorAll('.btnScroll');
  
  if (window.pageYOffset > 100) {
    elementoFijo.classList.add("fixed");
    
    botonesExtra.forEach(function(btn) {
      btn.style.display = "inline-block"; 
    });
  } else {
    elementoFijo.classList.remove("fixed");
    botonesExtra.forEach(function(btn) {
      btn.style.display = "none";
    });
  }

  if (window.innerWidth > 600) {
    window.location.href = "/warning.html";

  }
}