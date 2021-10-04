"use scrict";

const imagens = [
    "./imagens/imagem1.jpg",
    "./imagens/imagem2.jpg",
    "./imagens/imagem3.jpg",
    "./imagens/imagem4.jpg",
    "./imagens/imagem5.jfif",
    "./imagens/imagem6.jpg",
    "./imagens/imagem7.jpg",
    "./imagens/imagem8.jpg",
]

const getId = (url) => {
    const posBarra = url.lastIndexOf("/") + 1
    const posPonto = url.lastIndexOf(".")
    return url.substring(posBarra, posPonto)
}


const createItem = (urlImagem) => {
    const container = document.querySelector(".galery-container")
    const newLink = document.createElement("a")
    newLink.href = `#${getId(urlImagem)}`
    newLink.classList.add("galery-items")
    newLink.innerHTML = `<img src="${urlImagem}" alt=""/>`
    container.appendChild(newLink)

    // container.innerHTML += `
// <a href="#imagem1" class="galery-items">
// <img src="${urlImagem}" alt=""/>
// </a> 
    
// `
}

const carregarGaleria = (imgs) => imgs.forEach(createItem);

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("slide")
    novaDiv.id = getId(urlImagem)

    const indiceBefore = indice <= 0 ? arr.length -1 : indice -1
    const idBefore = getId(arr[indiceBefore])

    const indiceNext = indice >= arr.length -1 ? 0 : indice + 1
    const idNext = getId(arr[indiceNext])

    novaDiv.innerHTML = `
        <div class="imagem-container">
        <a href="#" class="close">&#10006;</a>
        <a href="#${idBefore}" class="navegacao anterior">&#171;</a>
        <img src="${urlImagem}" alt="">
        <a href="#${idNext}" class="navegacao proximo">&#187;</a>
        </div>
    `
        container.appendChild(novaDiv)
}
   

const carregarSlide = (imgs) => imgs.forEach(criarSlide)

carregarGaleria(imagens)
carregarSlide(imagens)
