var fome = 100;
var higiene = 100;
var sono = 100;
var diversao = 100;
var social = 100;

function Loop(time = 2){
    var total = fome + higiene + sono + diversao + social;

    if(fome <= 0 || higiene <= 0 || sono <= 0 || diversao <= 0 || social <= 0) {
        document.getElementById('blocoImagem').innerHTML = 'Você deixou seu amadotchi morrer, tente novamente (atualize a página)'
    }else if(total > 400){
        document.getElementById("gabumon").style.backgroundColor = "aqua"
    }else if(total > 300){
        document.getElementById("gabumon").style.backgroundColor = "greenyellow";
    }else if(total > 200){
        document.getElementById("gabumon").style.backgroundColor = "yellow";
    }else if(total > 100){
        document.getElementById("gabumon").style.backgroundColor = "orange";
    }else if(total > 50){
        document.getElementById("gabumon").style.backgroundColor = "red";
    }

    fome = fome - parseInt(time);
    higiene = higiene - parseInt(time);
    sono = sono - parseInt(time);
    diversao = diversao - parseInt(time);
    social = social - parseInt(time);


    document.getElementById('fome').innerHTML = fome + '%'
    document.getElementById('higiene').innerHTML = higiene + '%'
    document.getElementById('sono').innerHTML = sono + '%'
    document.getElementById('diversão').innerHTML = diversao + '%'
    document.getElementById('social').innerHTML = social + '%'

}

function Start() {
    var temporizador = setInterval(Loop, 1000);
}

function Comer() {
    fome = 100;
    document.getElementById('fome').innerHTML = fome + '%';
    document.getElementById('fome').style.width = fome + 'px';
}

function Banho() {
    higiene = 100;
    document.getElementById('higiene').innerHTML = higiene + '%';
    document.getElementById('higiene').style.width = higiene + 'px';
}

function Dormir() {
    sono = 100;
    document.getElementById('sono').innerHTML = sono + '%';
    document.getElementById('sono').style.width = sono + 'px';
}

function Brincar() {
    diversao = 100;
    document.getElementById('diversao').innerHTML = diversao + '%';
    document.getElementById('diversao').style.width = diversao + 'px';
}

function Conversar() {
    social = 100;
    document.getElementById('social').innerHTML = social + '%';
    document.getElementById('social').style.width = social + 'px';
}

Start();