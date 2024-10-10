// https://velog.io/@jubby/MySQL%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%ED%9A%8C%EC%9B%90%EC%A0%95%EB%B3%B4-%EC%88%98%EC%A0%95-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0


const login_b = document.getElementById("log_b")

function joinUser() {
    var form = document.getElementById("log_b");
    axios({
        method: 'post',
        url: 'http://192.168.0.64:5500/html/login.html',
        data: {
            id: loginForm.username.value,
            name: form 
        }
    })

}