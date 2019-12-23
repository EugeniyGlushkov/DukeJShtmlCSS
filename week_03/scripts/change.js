function clickButton() {
    choiseсConf();
}

function choiseсConf() {
    var choise = confirm();
    var alertMsg = choise ? 'You pressed OK!' : 'Are you sure you want to cancel?';
    alert(alertMsg);
}