const body = document.querySelector("body");
const grid = document.createElement("div");
const buttonPromptGrid = document.createElement("button");

grid.id = "grid";
grid.style.cssText ="display:flex;flex-direction:column;align-items:center; width:fit-content";
body.style.cssText = 'display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;font-family: Roboto, sans-serif;';

function insertDivs(inputGridSize) {
    for (let rowCount = 0; rowCount < inputGridSize; rowCount++)
    {
        console.log("Creating..");
        let rowDiv = document.createElement("div");
        rowDiv.style.cssText = "display:flex; justify-content:center; align-items:center;";
        rowDiv.style.cssText = "display:flex; justify-content:center; align-items:center;";
        rowDiv.id = "tinyDiv";

        for (let colCount = 0; colCount < inputGridSize; colCount++)
        {
            let colDiv = document.createElement("div");
            colDiv.style.cssText = "border: solid 0.5px grey";
            colDiv.style.cssText += "width:10px;height:10px";
            colDiv.id = "tinyDiv";
            rowDiv.appendChild(colDiv);
        }
        grid.appendChild(rowDiv);
        body.appendChild(grid);
    }
}

const testDiv = document.createElement("div");

testDiv.textContent = "Etch A Sketch";
testDiv.className = "tinyDiv";
body.appendChild(testDiv);

function randomInteger()
{
    return Math.floor(Math.random()*255);
}

grid.addEventListener("mouseover", (event) => {
    let colorRed = randomInteger();
    let colorGreen = randomInteger();
    let colorBlue = randomInteger();
    
    let randomColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
    event.target.style.transition ="0.01s";
    event.target.style.backgroundColor = randomColor;
    event.stopImmediatePropagation();
});

grid.addEventListener("mouseout", (event) => {
    event.target.style.transition ="5s";
    event.target.style.backgroundColor = "";
    
});

body.appendChild(buttonPromptGrid);
insertDivs(10);

function removeGrid()
{
    const listenDiv  = document.querySelectorAll("#tinyDiv");
    for (let i = 0; i < listenDiv.length; i++)
    {
        listenDiv[i].parentNode.removeChild(listenDiv[i]);
    }
}

buttonPromptGrid.addEventListener("click", (event) => {
    let inputGridSize = prompt("Enter a value for grid size up to 100 px.\
    \nThe grid is a square.");
    removeGrid();
    insertDivs(inputGridSize);
    
});

buttonPromptGrid.textContent = "Set Size";
buttonPromptGrid.style.cssText = "background-color: #121212; color: white; border: 1px solid #f44336; border-radius: 12px; padding: 5px 20px; margin: 20px; font-size: 7px";




document.body.style.backgroundColor = "#121212";

