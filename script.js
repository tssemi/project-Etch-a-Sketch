const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    alert('Do you want to change the grid?');
    
});
function createSquares(squares = 16) {
    for (let i = 0; i < squares; i++) {
        let divRow = document.createElement('div');
        for (let j = 0; j < squares; j++) {
            let divChild = document.createElement('div');
            divRow.appendChild(divChild).classList.add('divChild');
            divChild.addEventListener('mouseover', function(e) {
                e.target.style.background = 'black';
            });
        }
        container.appendChild(divRow).classList.add('divRow');
    }    
}
createSquares();