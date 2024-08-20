var hoje = new Date();
var hora = hoje.getHours();
var mensagem = '';
var element = document.querySelector('.tag-bom-dia');
var mens = document.querySelector('.mens');

switch (true) {
  case (hora >= 6 && hora < 12):
    mensagem = 'Bom Dia!';
    break;
  case (hora >= 12 && hora < 18):
    mensagem = 'Boa Tarde!';
      element.classList.remove('tag-bom-dia');
      element.classList.add('tag-boa-tarde');
    break;
  default:
    mensagem = 'Boa Noite!';
      element.classList.remove('tag-bom-dia');
      element.classList.add('tag-boa-noite');
    break;
}

if (mens) {
  mens.innerHTML = mensagem;
}