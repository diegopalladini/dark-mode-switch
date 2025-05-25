// Seleciona o botão e o ícone
let botao = document.getElementById('botao-dia-noite');
let icone = document.getElementById('icone-dia-noite');

// Função para alternar o tema
botao.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Troca o ícone
  if (document.body.classList.contains('dark')) {
    icone.classList.remove('fa-sun');
    icone.classList.add('fa-moon');
  } else {
    icone.classList.remove('fa-moon');
    icone.classList.add('fa-sun');
  }
});