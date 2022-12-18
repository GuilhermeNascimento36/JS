var fmrAdicionar = document.getElementById("add-item");
var itens = [];


fmrAdicionar.addEventListener("submit", (dados) => {
    dados.preventDefault(); //cancela o comportamento padrão para não ficar recarregando

    //estamos chamando o target do vetor, só que pelo nome do input
    let nome = dados.target.elements['nome'].value;
    let quantidade = dados.target.elements['quantidade'].value;
    criarElemento(nome, quantidade);
});

function criarElemento (nome, quantidade){

    if(nome.length > 0 && quantidade.length > 0 && quantidade > 0){
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

        //objeto referente ao item do array
        let item = {
            "nome": nome,
            "quantidade": quantidade
        }
        
        itens.push(item);

        //salvando no localstorage do navegador e convertendo o objeto para tipo string (por conta do json)
        localStorage.setItem("item", JSON.stringify(itens));
    }

    else if(quantidade < 0){
        console.log("Não é possível obter uma quantidade negativa.");
        }

    else{
        console.log("Erro! Não é possível adicionar um item nulo.");
    }
 }
 