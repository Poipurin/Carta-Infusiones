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
}
document.addEventListener('DOMContentLoaded', function() {
  checkScreenSize();
});
window.addEventListener('resize', checkScreenSize);
function checkScreenSize() {
  if (document.body.clientWidth > 600) {
    window.location.href = "/Carta-Infusiones/warning.html";
  }
}

