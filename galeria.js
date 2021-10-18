"use scrict";

const limparElementos = (elemento) => {
    while(elemento.firstChild){
        elemento.removeChild(elemento.lastChild);
    }
};

const pesquisarImagens = async (evento) => {
    
    if (evento.key === 'Enter'){
        const raca = evento.target.value;
        const url = `https://dog.ceo/api/breed/${raca}/images`;
        // const url = `https://coffee.alexflipnote.dev/hfdaQzAQqSQ_coffee.jpg`;  
        const imagensResponse = await fetch(url);
        const imagens = await imagensResponse.json();
        
        limparElementos(document.querySelector('.galery-container'));
        limparElementos(document.querySelector('.slide-container'));

        loadingGaleria(imagens.message);
        loadingGaleria(imagens.message);
    }
};

// Jeito antigo 
// const pesquisarImagens = () => {
//     const imagensResponse = fetch('https://dog.ceo/api/breed/hound/images')
//         .then((response) => response.json())
//         .then((response) => console.log(imagemResponse.json());)
//         response => response.json()    
// };

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

const loadingGaleria = (imgs) => imgs.forEach(createItem);

const createSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const newDiv = document.createElement("div")
    newDiv.classList.add("slide")
    newDiv.id = getId(urlImagem)

    const indiceBefore = indice <= 0 ? arr.length -1 : indice -1
    const idBefore = getId(arr[indiceBefore])

    const indiceNext = indice >= arr.length -1 ? 0 : indice + 1
    const idNext = getId(arr[indiceNext])

    newDiv.innerHTML = `
        <div class="imagem-container">
        <a href="#" class="close">&#10006;</a>
        <a href="#${idBefore}" class="navegacao anterior">&#171;</a>
        <img src="${urlImagem}" alt="">
        <a href="#${idNext}" class="navegacao proximo">&#187;</a>
        </div>
    `
        container.appendChild(newDiv)
}
   
const loadingSlide = (imgs) => imgs.forEach(createSlide)

document.querySelector('.search-container input').addEventListener('keypress', pesquisarImagens);
