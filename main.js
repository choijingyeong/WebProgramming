let login_btn = document.getElementById('login_btn')

login_btn.addEventListener("click", login);

if(sessionStorage.getItem('id') == null) {
    login_btn.innerText = "로그인";
} else if (sessionStorage.getItem('id') != "") {
    login_btn.innerText = sessionStorage.getItem("name") + "님";
} 
load();

function load() {
    $.ajax({
        url: 'main.php',
        type: 'POST',
        data: {
            
        },
        success: function (data) {
            $(".para").html(data);
        },
        error: function (e) {
            alert(e.reponseText);
        }
    });
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

function toBuy(e) {
    let w_id = e.target.id;
    window.open(`./buying.html?${w_id}`);
}