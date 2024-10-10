// const json_path = '../json/account.json';

// const loginForm = document.getElementById("login-form");
// const login_b = document.getElementById("log_b");



// login_b.addEventListener('click', (event) => {
//     // JavaScript를 사용하여 유효성을 검사하기만 하므로 제출을 방지
//     event.preventDefault();
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     fetch(json_path)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // user와 passwd가 일치하는 항목을 찾음
//             const user = data.find(account => account.user === username && account.passwd === password);
//             if (user) {
//                 alert("success login!");
//                 location.reload();
//             } else {
//                 alert("아이디/비밀번호가 틀렸습니다!");
//             }
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//             alert("error login!");
//         });

// });
// async function createAccount() {
//     let new_id = prompt("아이디를 입력하세요.", "아이디");
//     let new_passwd = prompt("비밀번호를 입력하세요.", "비밀번호");

//     try {
//         // JSON 파일에서 기존 계정 목록 가져오기
//         const response = await fetch('../json/account.json');
//         if (!response.ok) {
//             throw new Error('네트워크 응답이 좋지 않습니다.');
//         }
//         let accounts = await response.json();

//         // 새로운 계정 추가
//         const newAccount = {
//             user: new_id,
//             passwd: new_passwd
//         };
//         accounts.push(newAccount); // 배열에 추가

//         // 수정된 계정 목록을 서버에 저장 (여기서는 예시로 콘솔에 출력)
//         console.log('계정이 성공적으로 추가되었습니다.', accounts);

//         // 서버에 POST 요청을 통해 새로운 계정 저장 (서버가 필요함)
//         await fetch('../json/account.json', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(accounts)
//         });

//     } catch (error) {
//         console.error('계정 생성 중 오류 발생:', error);
//     }
// }

// // DOMContentLoaded 이벤트를 사용하여 DOM이 완전히 로드된 후에 이벤트 리스너 추가
// document.addEventListener("DOMContentLoaded", function() {
//     const makeIdButton = document.getElementById("make_id");
//     makeIdButton.addEventListener("click", function(event) {
//         event.preventDefault(); // 링크의 기본 동작 방지
//         createAccount(); // 계정 만들기 함수 호출
//     });
// });