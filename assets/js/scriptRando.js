// Initialisation de nos sélecteurs
const randomColor = document.querySelector('#color-button');
const bgColor = document.querySelector('.container');
const inputColor = document.querySelector('#color-input');
const colorInput = document.querySelector('#color')


const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


// boutton randomizer coleur
randomColor.addEventListener('click', (e) => {
    const colorPicked = [];
    for(let i = 0; i<6; i++){
        let pickColor = hexArray[Math.floor(Math.random()*hexArray.length)];
        colorPicked.push(pickColor);
    }
    colorHex = `${colorPicked.join('')}`;
    bgColor.style.backgroundColor = `#${colorHex}`;
    inputColor.value= `${colorHex}`
});

// champs pour entrer la valeur hexadecimale
inputColor.addEventListener('keyup',(e)=>{
    const userInput = inputColor.value
    if( userInput.length === 6){
        bgColor.style.background=`#${userInput}`;
        inputColor.style.border=`2px solid green`;
    }else{
        inputColor.style.border=`2px solid red`;
    }
})
// choix de la couleur
colorInput.addEventListener('input',()=>{
    const color =colorInput.value
    const out =color.substring(1,color.length)
    inputColor.value= out
    bgColor.style.backgroundColor= color


})




