var fmrAdicionar = document.getElementById("add-item");
var listaItems = document.getElementById("lista-items");
var itens =  JSON.parse(localStorage.getItem("itens")) || []; //estamos falando para ver se existe algum elemento local, se houver > converter a string em objeto JSON. Se não, criar array nulo


//mostrando valores registrados no local storage

itens.forEach((elemento) => {
    criarElemento(elemento);
})

fmrAdicionar.addEventListener("submit", (dados) => {
    dados.preventDefault(); //cancela o comportamento padrão para não ficar recarregando

    //estamos chamando o target do vetor, só que pelo nome do input
    let nome= dados.target.elements['nome'];
    let quantidade = dados.target.elements['quantidade'];

    let item = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(quantidade.value.length > 0 && nome.value.length > 0 && quantidade.value > 0){
        criarElemento(item);
        itens.push(item);
        
        //salvando no localstorage do navegador e convertendo o objeto para tipo string (por conta do json)
        localStorage.setItem("itens", JSON.stringify(itens));   
    }

    else if(quantidade.value < 0){
        console.log("Não é possível obter uma quantidade negativa.");
        alert("Erro! Não é possível adicionar uma quantidade negativa.");
    }

    else{
        console.log("Erro! Não é possível adicionar um item nulo.");
        alert("Erro! Não é possível adicionar um produto nulo.");
    }

    nome.value = "";
    quantidade.value = "";
});

function criarElemento (item){    
    let novoItem = document.createElement("li");
    novoItem.classList.add("item");

    //anexando no html e na árvore com o appendChild
    let qtdItem = document.createElement("strong");
    qtdItem.innerHTML = item.quantidade;

    novoItem.appendChild(qtdItem);
    
    //o nome vem dps da tag strong
    novoItem.innerHTML += item.nome;

    listaItems.appendChild(novoItem);
}