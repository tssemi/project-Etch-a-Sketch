const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let removeDiv = document.querySelectorAll('.divRow');
    for (let e of removeDiv) e.remove();
    let num;
    do
    num = prompt('Put the number of squares per side. The limit of squares is 100', );
    while (num > 100);
    createSquares(num);
});
function createSquares(squares = 16) {
    for (let i = 0; i < squares; i++) {
        let divRow = document.createElement('div');
        for (let j = 0; j < squares; j++) {
            let opa = 0.1;
            let divChild = document.createElement('div');
            divRow.appendChild(divChild).classList.add('divChild');
            divChild.addEventListener('mouseover', (e) => {
                e.target.style.background = 'black';
                e.target.style.opacity = opa;
                opa += 0.1;
            });
            divChild.addEventListener('click', (e) => {
                e.target.style.background = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
                e.target.style.opacity = '100%';
            })
        }
        container.appendChild(divRow).classList.add('divRow');
    }    
}

function randomColor() {
    return Math.floor(Math.random() * 255)
}
createSquares();