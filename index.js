const title = document.querySelector('.dev');
const txt = 'DEVELOPPEUR WEB & WEB MOBILE';

function typewriter(word, index) {
    if(index < word.length) {
        setTimeout( () => {
        title.innerHTML += `<span>${word[index]}</span>`
        typewriter(txt, index + 1)
    }, 300);
    }
}

setTimeout (() => {
    typewriter(txt,0)
},500);


setTimeout(() => {
document.querySelector(".loader-ctn").style.display = "none";
}, 3200);