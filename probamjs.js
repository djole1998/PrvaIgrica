function pocetak (){
    let randomBroj = Math.floor(Math.random() * 9);
    let zelenoPolje = document.getElementById('d' + randomBroj);
    if (zelenoPolje.style.backgroundColor !== 'blue'){
        zelenoPolje.style.backgroundColor = 'green';
    } else {
        pocetak();
    }
}
function kliknuto(id) {
    let dugme = document.getElementById(id);
    if( dugme.style.backgroundColor === 'green'){
        dugme.style.backgroundColor = 'blue';
        scoreBoard();
        pocetak();
        for (let i = 0; i < 9; i++){
            let plavoDugme = document.getElementById('d' + i);
            if (plavoDugme.style.backgroundColor === 'blue' && dugme.id !== plavoDugme.id ){
                plavoDugme.style.backgroundColor = 'white';
            }
        }
    } else if (dugme.style.backgroundColor === 'blue') {
        kraj();
    }
}
function kraj() {
    for(let i = 0; i < 9; i++){
        let dugme = document.getElementById('d' + i);
        if(dugme.style.backgroundColor = 'white'){
        }
    }
    let score = document.getElementById('score');
    score.innerText = 'START';
    pocetak();
}
function scoreBoard() {
    let score = document.getElementById('score');
    let number = score.innerText;
    if (number === 'START'){
        score.innerText = 1;
    } else {
        number = parseInt(number)
        score.innerText = number + 1;
    }
}