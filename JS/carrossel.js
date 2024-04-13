let indice = 0;

function mover(n) {
  mostrarItens(indice += n);
}

function mostrarItens(n) {
  let i;
  let itens = document.getElementsByClassName("item");
  let itemsToDisplay = window.innerWidth < 768 ? 1 : 4; //responsivo para tela menor que 768

  if (n > itens.length - itemsToDisplay) indice = 0;
  if (n < 0) indice = itens.length - itemsToDisplay;

  for (i = 0; i < itens.length; i++) {
    itens[i].style.display = "none";  // Hide all items
  }
  
  for (i = indice; i < indice + itemsToDisplay && i < itens.length; i++) {
    itens[i].style.display = "flex"; 
  }
}

// Ajusta quando muda o tamanho da tela
window.addEventListener('resize', function() {
  mostrarItens(indice);
});

mostrarItens(indice);