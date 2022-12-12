let id = document.getElementById("id");
let pw = document.getElementById("pw");

function inputcheck() {
    var id_check = new RegExp(/^([A-Za-z0-9]){6,15}$/);
    var pass_check = new RegExp(/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/);
    if(id_check.test(id.value) && pass_check.test(pw.value)) {
        return true;
    } else {
        return false;
    }
}

$("#btn").click(function () {
    if(inputcheck()) {
        $.ajax({
            url: 'login.php',
            type: 'POST',
            data: {
                id : $("#id").val(),
                pw : $("#pw").val()
            },
            success: function(data) {
                if(data != 'false') {
                    sessionStorage.id = id.value;
                    sessionStorage.name = data;
                    location.href = "main.html";
                    alert("로그인 성공");
                } else {
                    alert("아이디와 비밀번호를 확인해주세요.");
                }
            },
            error: function(e) {
                alert(e.reponseText);
            }
        })
    } else {
        alert("아이디와 비밀번호를 확인해주세요.");
    }
})