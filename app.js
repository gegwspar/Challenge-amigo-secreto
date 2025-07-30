let listaAmigos = [];

//Funçao que faz com que o usuario digite o nome e apareça na lista.
function adicionarAmigo(){
    let input = document.querySelector('input');
    let nome = input.value.trim();
    
    if (nome == '') {
        alert('Campo vazio!Por favor, digite um nome.');
        return;
    } 
        listaAmigos.push(nome);
        input.value = ''; //limpa o campo de input
        exibirAmigos()
    
}

function exibirAmigos() {
    let exibirNome = document.getElementById('listaAmigos');
    exibirNome.innerHTML = ''; 

    listaAmigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        exibirNome.appendChild(li);
    });
}

 function sortearAmigo() {

   if (listaAmigos.length < 2) {
    alert('Insira pelo menos o nome de dois amigos no sorteio.');
    return;
   }
    let sorteio = parseInt(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[sorteio];

    let resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto sorteado é ${nomeSorteado}`;

    limparCampo();
}

function limparCampo (){
 listaAmigos = []; //esvazia o array
 document.getElementById('listaAmigos').innerHTML = ''; //limpa a lista da tela 
 }