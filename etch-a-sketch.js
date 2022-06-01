const body = document.querySelector("body");
const grid = document.createElement("div");
const divButton = document.createElement("div");
const buttonPromptGrid = document.createElement("button");
const buttonReset = document.createElement("button");
const buttonRGB = document.createElement("button");

grid.id = "grid";
grid.style.cssText ="display:flex;flex-direction:column;align-items:center; width:fit-content;border: solid 0.1px grey";
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
            //colDiv.style.cssText = "border: solid 0.5px grey";
            colDiv.style.cssText += "width:10px;height:10px";
            colDiv.id = "tinyDiv";
            rowDiv.appendChild(colDiv);
        }
        grid.appendChild(rowDiv);
        body.appendChild(grid);
    }
}

const Header = document.createElement("div");

Header.textContent = "Etch A Sketch";
Header.style.cssText = "font-size: 50px; margin-top: 20px";
body.appendChild(Header);

function randomInteger()
{
    return Math.floor(Math.random()*255);
}

divButton.appendChild(buttonPromptGrid);
divButton.appendChild(buttonReset);
divButton.appendChild(buttonRGB);
body.append(divButton);

let sizeGrid = 10;
insertDivs(sizeGrid);

buttonPromptGrid.textContent = "Set Size";
buttonPromptGrid.style.cssText = "background-color: #121212; color: white; border: 1px solid #f44336; border-radius: 12px; padding: 5px 20px; margin: 20px; font-size: 20px";
document.body.style.backgroundColor = "#121212";

buttonReset.textContent = "Reset";
buttonReset.style.cssText = "background-color: #121212; color: white; border: 1px solid #f44336; border-radius: 12px; padding: 5px 20px; margin: 20px; font-size: 20px";
buttonRGB.textContent = "RGB";
buttonRGB.style.cssText = "background-color: #121212; color: white; border: 1px solid #f44336; border-radius: 12px; padding: 5px 20px; margin: 20px; font-size: 20px";
buttonRGB.value = 0;

let toggleRGBBool = buttonRGB.value;

function paintDiv (valueRGB) {
    let listenDivOuter  = document.querySelectorAll("#tinyDiv");
    listenDivOuter.forEach((div) => {
        div.addEventListener('mouseover', (div) => {
            let colorRed = randomInteger();
            let colorGreen = randomInteger();
            let colorBlue = randomInteger();
            let setColor = "white";

            if (valueRGB == 1)
            {
                setColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
            }
            
            div.stopPropagation();
            div.target.style.transition ="0.7s";
            div.target.style.backgroundColor = setColor;
            
        });
    
        div.addEventListener("mouseout", (div) => {
            div.stopPropagation();
            div.target.style.transition ="10s";
            if (valueRGB == 0)
            {
                div.target.style.color = "white";
            }
            
        });
    });
}

paintDiv(toggleRGBBool);

function removeGrid()
{
    const listenDiv = document.querySelectorAll("#tinyDiv");
    for (let i = 0; i < listenDiv.length; i++)
    {
        listenDiv[i].parentNode.removeChild(listenDiv[i]);
    }
    listenDivOuter  = document.querySelectorAll("#tinyDiv");
}


buttonPromptGrid.addEventListener("click", (event) => {
    let inputGridSize = prompt("Enter a value for grid size up to 100 px.\
    \nThe grid is a square.");
    sizeGrid = inputGridSize;
    if (inputGridSize > 0 && inputGridSize <= 100)
    {
        removeGrid();
        insertDivs(inputGridSize);
        paintDiv(buttonRGB.value);
    }
    else
    {
        alert("Invalid value!");
    }
});

buttonReset.addEventListener("click", (event) => {
    removeGrid();
    insertDivs(sizeGrid);
    paintDiv(toggleRGBBool);
})

buttonRGB.addEventListener("click", (event) => {
    if (buttonRGB.value == 1)
    {
        buttonRGB.value = 0;
        paintDiv(buttonRGB.value);
    }
    else
    {
        buttonRGB.value = 1;
        paintDiv(buttonRGB.value);
    }
})