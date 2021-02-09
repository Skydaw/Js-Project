// Initialisation de nos sélecteurs
const randomColor = document.querySelector('#color-button');
const bgColor = document.querySelector('main');
const inputColor = document.querySelector('#color-input')

const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

randomColor.addEventListener('click', (e) => {
    const colorPicked = [];
    const btnColorPicked=[];
    
    for(let i = 0; i<6; i++){
        let pickColor = hexArray[Math.floor(Math.random()*hexArray.length)];
        colorPicked.push(pickColor);
    }
    for(let i = 0; i<6; i++){
        let pickColor = hexArray[Math.floor(Math.random()*hexArray.length)];
        btnColorPicked.push(pickColor);
    }

    colorHex = `#${colorPicked.join('')}`;
    btnHex  = `#${btnColorPicked.join('')}`;

    bgColor.style.backgroundColor = colorHex;
    randomColor.style.backgroundColor = btnHex;
});


// inputColor.addEventListener('keyup',(e)=>{
//     const userInput = inputColor.value;
//     if(userInput.length===3||userInput.length===6){
//         console.log("yop")
//         bgColor.style.background = `#${userInput}`
//     }
// })
inputColor.addEventListener('keyup',(e)=>{
    const userInput = inputColor.value
    if( userInput.length === 6){
        bgColor.style.background=`#${userInput}`;
        inputColor.style.border=`2px solid green`;
    }else{
        inputColor.style.border=`2px solid red`;
    }
})




