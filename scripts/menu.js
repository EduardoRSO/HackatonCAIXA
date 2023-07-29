  window.addEventListener("scroll", function() {
    var myElement = document.getElementById("navbar");
  
    // Obtém a posição vertical de rolagem (scrollTop)
    var scrollTop = window.scrollY;
  
    // Defina a quantidade de rolagem (scrollTop) necessária para adicionar a classe
  
    // Verifica se a posição de rolagem é maior que o limiar
    if (scrollTop > 1) {
        myElement.style.boxShadow = "0px -2px 30px 3px rgba(0,0,0,0.2)";
    } else {
        myElement.style.boxShadow = "none";
    }
  });