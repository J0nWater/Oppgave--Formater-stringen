let textArea ="";
let inPut = "";

updateView();
function updateView(){
    document.getElementById('updateView').innerHTML =/*HTML*/`
    <div>Text: ${textArea}</div>
    <input onchange="setText(this.value)"><br>
    <button onclick="changeLetter()">Change letter</button>
    `
}
function changeLetter(){
    let value = inPut;
    let firstCapitalLetter = value[0].toUpperCase();
    let restOfString = value.slice(1);
    textArea = firstCapitalLetter + restOfString;
    updateView();
}  
function setText(newValue) {
    inPut = newValue;
}     
