var count = 0;

// 초기 보드 생성 함수
function createBoard() {
    const box = document.querySelector('.s_box');
    for(let i =1; i<10; i++) {
        const img = document.getElementById(i);
        img.src = "../img/ttt/no.png"; // 초기 상태의 카드 이미지
        img.alt = "";
        img.addEventListener('click', h_click);
    }
}

// 클릭 이벤트 핸들러
function h_click() {
    if (count++ % 2 === 1 ) {
        this.src = '../img/ttt/O.png'; // 첫 번째 플레이어 o
        this.alt = "O";
    }else{
        this.src = '../img/ttt/X.png'; // 두 번째 플레이어 x
        this.alt = "X";
    }
    this.removeEventListener('click', h_click);

    setTimeout ( () => {
        if(count >= 2){
            let win = checkForWin()
            if (win != null){
                alert("승자는 "  + win  + "입니다!");
                resetGame();
            }
        }
    }, 1500);
}


// bingo 확인
function checkForWin() {
    const A = document.getElementsByClassName('img');

    const winConditons = [
        [0, 1, 2], // 가로
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // 세로
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // 대각선
        [2, 4, 6]
    ];

    for(let conditon of winConditons){
        const [a, b, c] = conditon;
        if(A[a].alt === A[b].alt && A[b].alt === A[c].alt && A[a].alt !== "")
            return A[a].alt;
    }    
    return null;
}


// 게임 초기화
function init() {
    createBoard(); // 카드 생성
}

// 리셋 버튼 클릭 시 리셋 기능
document.querySelector('.button').addEventListener('click', resetGame);

function resetGame() {
    const box = document.querySelector('.s_box');
    createBoard(); // 새로운 보드 생성 
}

// 초기화 함수 호출
init();