const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    let divRow = document.createElement('div');
    for (let j = 0; j < 16; j++) {
        let divChild = document.createElement('div');
        divRow.appendChild(divChild).classList.add('divChild');
    }
    container.appendChild(divRow).classList.add('divRow');
}
