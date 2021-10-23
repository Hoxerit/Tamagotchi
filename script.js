var fome = 100;
var higiene = 100;
var sono = 100;
var diversao = 100;
var social = 100;

function loop(time = 2){
    var total = fome + higiene + sono + diversao + social;

    if(fome <= 0 || higiene <= 0 || sono <= 0 || diversao <= 0 || social <= 0) {
        document.getElementById('blocoImagem').innerHTML = 'Você deixou seu amadotchi morrer, tente novamente (atualize a página)'
    }

}