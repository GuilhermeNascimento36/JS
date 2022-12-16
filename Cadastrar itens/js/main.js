var fmrAdicionar = document.getElementById("add-item");

fmrAdicionar.addEventListener("submit", (dados) => {
    dados.preventDefault(); //cancela o comportamento padrão para não ficar recarregando

    //estamos chamando o target do vetor, só que pelo nome do input
    criarElemento(dados.target.elements['nome'].value, dados.target.elements['quantidade'].value);
});

function criarElemento (nome, quantidade){
    //<li class="item"><strong>3</strong>Torrada</li>

    let novoItem = document.createElement("li");
    novoItem.classList.add("item");

    //anexando no html e na árvore com o appendChild
    let qtdItem = document.createElement("strong");
    qtdItem.innerHTML = quantidade;

    novoItem.appendChild(qtdItem);
    
    //o nome vem dps da tag strong
    novoItem.innerHTML += nome;

    let listaItems = document.getElementById("lista-items");
    listaItems.appendChild(novoItem);
}