const box = document.querySelector(".box");

function changeColor(){
    
    const charr = '0123456789abcdef';
    let q_color = '';

    for (let i = 0; i< 6; i++){
        const randIndex = Math.floor(Math.random() * charr.length);
        q_color += charr[randIndex];
    }

    q_color = '#' + q_color;
    box.style.backgroundColor = q_color;

}

function checkAnswer(){
    let ans = document.getElementById('ans').value;

    const backColorHex = rgbToHex(box.style.backgroundColor);
    console.log(backColorHex)


    if(ans === backColorHex){
        alert("정답입니다.");
        changeColor();
    }else
        alert("오답입니다.")
}

const rgbToHex = (rgb) => {
    const rgbArray = rgb.match(/\d+/g);
    return `#${((1 << 24) + (parseInt(rgbArray[0]) << 16) + (parseInt(rgbArray[1]) << 8) + parseInt(rgbArray[2])).toString(16).slice(1)}`;
};

function ee(e){
    if(e.keyCode === 13) {
        checkAnswer();
    }

}


changeColor()