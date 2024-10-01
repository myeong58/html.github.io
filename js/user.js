$(function () {
    $.ajax({
        url: "../json/user.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    // user_box div 생성
                    var userBox = $('<div class="user_box"></div>');

                    // 이미지 추가
                    userBox.append('<img class="user" src="../img/user/' + data[i].url + '" alt="user">');

                    // text_box div 생성
                    var textBox = $('<div class="text_box"></div>');
                    textBox.append('<h5 class="p_name">이름: ' + data[i].name + '</h5>');
                    textBox.append('<h5 class="p_age">나이: ' + data[i].age + '</h5>');
                    textBox.append('<h5 class="p_job">직업: ' + data[i].job + '</h5>');

                    // text_box를 user_box에 추가
                    userBox.append(textBox);

                    // user_box를 해당 box에 추가
                    $(".box").eq(0).append(userBox); // 모든 사용자 정보를 첫 번째 box에 추가
                }
            }
        }
    });
});