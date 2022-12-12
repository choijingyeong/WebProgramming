let id = document.getElementById("id");
let pw = document.getElementById("pw");
let pwcheck = document.getElementById("pwcheck");
let name = document.getElementById("name");
let email = document.getElementById("email");

function inputcheck() {
    var id_check = new RegExp(/^([A-Za-z0-9]){6,15}$/);
    var pass_check = new RegExp(/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/);
    if(id_check.test(id.value) && pass_check.test(pw.value)) {
        return true;
    } else {
        return false;
    }
}

$("#btn").click(function() {
    if(inputcheck()) {
        if(pw != pwcheck) {
            $.ajax({
                url: 'join.php',
                type: 'POST',
                data: {
                    id : id.value,
                    pw : pw.value,
                    name: name.value,
                    email: email.value,
                    phone: $("#phone").val()
                },
                success: function(data) {
                    alert("회원가입 성공!");
                    location.href = "main.html";
                },
                error: function(e) {
                    alert(e.reponseText);
                }
            })
        } else {
            alert("비밀번호화 비밀번호 확인이 다릅니다.");
        }
    } else {
        alert("아이디와 비밀번호를 확인해주세요.");
    }
})