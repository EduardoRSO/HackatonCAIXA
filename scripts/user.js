

function MostrarMenu() {
    console.log("bom dia")

    var menu = document.getElementById('opcoes');
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }
  