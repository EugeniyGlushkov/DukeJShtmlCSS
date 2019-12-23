function changeColor() {
    var divs = getDivs();
    divs[0].className = 'greenback';
    divs[1].className = 'redback';
}

function changeText() {
    var divs = getDivs();
    divs[0].innerText = 'Erste';
    divs[1].innerText = 'Zweite';
}

function getDivs() {
    var block1 = document.getElementById('div1');
    var block2 = document.getElementById('div2');
    return {0:block1, 1:block2};
}