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

    let verificaElemento = itens.find(elemento => elemento.nome === nome.value);

    if(verificaElemento){
        //elemento encontrado, alocamos o valor no elemento de mesmo id
        item.id = verificaElemento.id;
        atualizarItens(item);

        //atualizando no array
        itens[verificaElemento.id] = item;
    }
    else{
        if(quantidade.value.length > 0 && nome.value.length > 0 && quantidade.value > 0){
            item.id = itens.length;
            criarElemento(item);
            itens.push(item); 
        }
    
        else if(quantidade.value < 0){
            console.log("Não é possível obter uma quantidade negativa.");
            alert("Erro! Não é possível adicionar uma quantidade negativa.");
        }
    
        else{
            console.log("Erro! Não é possível adicionar um item nulo.");
            alert("Erro! Não é possível adicionar um produto nulo.");
        }
    }

    //salvando no localstorage do navegador e convertendo o objeto para tipo string (por conta do json)
    localStorage.setItem("itens", JSON.stringify(itens));  

    nome.value = "";
    quantidade.value = "";
});


function criarElemento (item){    
    let novoItem = document.createElement("li");
    novoItem.classList.add("item");

    //anexando no html e na árvore com o appendChild
    let qtdItem = document.createElement("strong");
    qtdItem.innerHTML = item.quantidade;

    //alocando id no item com data atribute
    qtdItem.dataset.id = item.id;

    novoItem.appendChild(qtdItem);
    
    //o nome vem dps da tag strong
    novoItem.innerHTML += item.nome;

    listaItems.appendChild(novoItem);
}

function atualizarItens(item){
    //adicionando a quantidade de acordo com o data-id passado
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade;
}