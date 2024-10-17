function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode,adiciona a imagem light
    img.setAttribute('src', './assets/JuniorSilbeck.png')
  }
  // se tiver sem light mode, manter a imagem normal.
  else {
    img.setAttribute('src', './assets/avatar-junior.png')
  }

const textoFoto = document.querySelector("#profile")
    if (html.classList.contains('light')) {
      textoFoto.setAttribute('alt', 'Foto de Junior Canedo com a roupa de trabalho da empresa Silbeck')
  }
     else {
      textoFoto.setAttribute('Foto de Junior Canedo, usando terno, barba, fundo preto')
  }


}