let count_id = 0; // 초기 ID 값
let todos = []; // 할 일 목록 배열

// add_todo 함수 정의
function add_todo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    if (todoText) {
        const todo = { id: count_id++, text: todoText };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        .then(response => response.json())
        .then(data => {
            todos.push({ id: count_id, text: todoText });
            console.log("id:", count_id, "text:", todoText);
            input.value = '';
            renderTodos();
        })
        .catch(error => console.error("Error: ", error));
    }
}

// 버튼 클릭 이벤트 리스너
document.getElementById('addButton').addEventListener('click', add_todo);


function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; // 기존 목록 초기화

    todos.forEach(todo => {
        const li = document.createElement('li');

        // 체크박스 생성
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `todo-${todo.id}`; // 고유 ID 설정
        checkbox.addEventListener('change', function() {
            if (this.checked) 
                li.classList.add('completed'); // 중간줄 추가
            else 
                li.classList.remove('completed'); // 중간줄 제거
        });

        // 체크박스를 li에 추가
        li.appendChild(checkbox);

        // 할 일 텍스트 추가
        const label = document.createElement('label');
        label.htmlFor = `todo-${todo.id}`; // 체크박스와 연결
        label.textContent = todo.text;
        li.appendChild(label);

        // 삭제 버튼 추가
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.addEventListener('click', function() {
            todos = todos.filter(t => t.id !== todo.id); // 해당 항목만 삭제
            renderTodos(); // 목록 다시 렌더링
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

// CSS 스타일 추가 (중간줄)
const style = document.createElement('style');
style.textContent = `
    .completed label {
        text-decoration: line-through; /* 중간줄 추가 */
    }
`;
document.head.appendChild(style);



