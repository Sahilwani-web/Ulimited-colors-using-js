const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i= 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 10)]
        
    }
    return  color;

}
let IntervalId;
const startChangingColor = () =>{

    IntervalId = setInterval(changeBgColor,1000)
    function changeBgColor() {document.body.style.backgroundColor = randomColor()}

}
const stopChangingColor = () =>{
    clearInterval(IntervalId);

}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
