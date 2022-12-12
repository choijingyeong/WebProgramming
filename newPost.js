let login_btn = document.getElementById('login_btn')

login_btn.addEventListener("click", login);

if(sessionStorage.getItem('id') == null) {
    login_btn.innerText = "로그인";
} else if (sessionStorage.getItem('id') != "") {
    login_btn.innerText = sessionStorage.getItem("name") + "님";
} 

function login() {
    if (sessionStorage.getItem('id') == "" || sessionStorage.getItem('id') == null) {
        location.href = "login.html";
    } else {
        alert("로그아웃 되었습니다.");
        sessionStorage.id = "";
        sessionStorage.name = "";
        login_btn.innerText = "로그인";
    }
}

$("#sub").click(function () {
    $.ajax({
        url: 'savePost.php',
        type: 'POST',
        data: {
            title: $("#title").val(),
            prize: $('#prize').val(),
            kg: $('#kg').val(),
            writing: $("#writing").val(),
            img: $("#file")[0].files[0].name
        },
        success: function (data) {

        },
        error: function (e) {
            alert(e.reponseText);
        }
    });

    var form = new FormData();
    form.append("file", $("#file")[0].files[0]);
    
    $.ajax({
        type: "POST",
        url: "saveImg.php",
        data: form,
        async: false,
        enctype: "multipart/form-data",
        processData: false,
        contentType: false,
        success: function (data) {
          console.log(data);
        },
        error: function (e) {
            alert(e.reponseText);
        }
    });

    location.href = "main.html";
    alert("업로드 되었습니다.")
});