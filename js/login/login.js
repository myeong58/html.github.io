function joinUser() {
    var form = document.getElementById("log_b");
    axios({
        method: 'post',
        url: 'http://192.168.0.64:5500/html/login.html',
        data: {
            id: loginForm.username.value,
            password: loginForm.password.value
        }
    }).then((Response) => {
        console.log("response.data: ", Response.data);
        return Response.data;
    }).then((data) => {
        if(data.flag == false) {
            //메시지 출력
            let alert_html = "<h6 class='fw-bold text-center mt-5'>다시 로그인해주세요.</h6>";
                        document.getElementById("alert").innerHTML = alert_html;
                    } else {
                        alert("로그인 성공");

                        var form_info = document.getElementById("form_info");
                        form_info.id.value = form.id.value;
                        form_info.submit();
        }
    })

}