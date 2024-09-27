const images = [
    { src: 'img/card/딸기.png', dataCard: '딸기' },
    { src: 'img/card/딸기.png', dataCard: '딸기' },
    { src: 'img/card/레몬.png', dataCard: '레몬' },
    { src: 'img/card/레몬.png', dataCard: '레몬' },
    { src: 'img/card/바나나.png', dataCard: '바나나' },
    { src: 'img/card/바나나.png', dataCard: '바나나' },
    { src: 'img/card/사과.png', dataCard: '사과' },
    { src: 'img/card/사과.png', dataCard: '사과' },
    { src: 'img/card/포도.png', dataCard: '포도' },
    { src: 'img/card/포도.png', dataCard: '포도' },
    { src: 'img/card/수박.png', dataCard: '수박' },
    { src: 'img/card/수박.png', dataCard: '수박' }
];

const backImg = "img/card/back.png";

let firstCard = null;
let secondCard = null;
let lockBoard = false;

// 배열 섞기 함수
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 카드 생성 함수
function createCards() {
    shuffle(images); // 카드 섞기
    const box = document.querySelector('.s_box');
    images.forEach(image => {
        const card = document.createElement('img');
        card.classList.add('img');
        card.src = backImg; // 초기 상태의 카드 이미지
        card.setAttribute('data-card', image.dataCard);
        card.dataset.image = image.src;
        card.addEventListener('click', flipCard);
        box.appendChild(card); // 카드 추가
    });
}

// 카드 클릭 이벤트 핸들러
function flipCard() {
    if (lockBoard) return; // 카드 클릭 잠금
    if (this === firstCard) return; // 이미 선택된 카드 클릭 무시

    this.src = this.dataset.image;
    this.style.transform = 'rotateY(180deg)'; 
    this.style.transition = 'transform 0.5s';
    if (!firstCard) {
        firstCard = this; // 첫 번째 카드 저장
        return;
    }
    
    secondCard = this; // 두 번째 카드 저장
    checkForMatch();
}


// 카드 매칭 확인
function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    isMatch ? disableCards() : unflipCards();
}

// 카드 비활성화
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

// 카드 다시 뒤집기
function unflipCards() {
    lockBoard = true; // 카드 클릭 잠금
    setTimeout(() => {
        firstCard.src = backImg;
        secondCard.src = backImg;
        firstCard.style.transform = 'rotateY(0deg)'; 
        secondCard.style.transform = 'rotateY(0deg)'; 
        resetBoard();
    }, 500);
}

// 보드 초기화
function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];

    const cards = document.querySelectorAll('.img');

}

// 게임 초기화
function init() {
    createCards(); // 카드 생성
}

// 리셋 버튼 클릭 시 리셋 기능
document.querySelector('.button').addEventListener('click', resetGame);

function resetGame() {
    const box = document.querySelector('.s_box');
    box.innerHTML = ''; // 기존 카드 삭제
    createCards(); // 새로운 카드 생성 및 섞기
    resetBoard(); // 보드 초기화
}

document.querySelector('.button').addEventListener('click', start);

function start() {
    resetGame(); // 게임 초기화

    // 모든 카드의 앞면을 보여줌
    const cards = document.querySelectorAll('.img');
    cards.forEach(card => {
        card.src = card.dataset.image; // 앞면 이미지로 설정
    });

    // 5초 후에 모든 카드를 뒷면으로 되돌림
    setTimeout(() => {
        cards.forEach(card => {
            card.src = backImg; // 뒷면 이미지로 설정
        });
    }, 3000); // 5000ms = 5초
}

// 초기화 함수 호출
init();







