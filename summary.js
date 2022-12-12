let login_btn = document.getElementById('login_btn');
let write;

login_btn.addEventListener("click", login);

if(sessionStorage.getItem('id') == null) {
    login_btn.innerText = "로그인";
} else if (sessionStorage.getItem('id') != "") {
    login_btn.innerText = sessionStorage.getItem("name") + "님";
} 
load();

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

function load() {
    $.ajax({
        url: 'summary.php',
        type: 'POST',
        success: function (data) {
            $("#main").html(data);
            write = document.getElementById('write');
            write.addEventListener('click', callNewPost);
        },
        error: function (e) {
            alert(e.reponseText);
        }
    });
}

function toBuy(e) {
    let w_id = e.target.className;
    window.open(`./buying.html?${w_id}`);
}

function callNewPost() {
    if(sessionStorage.id != "" && sessionStorage.id != null){
        location.href = "newPost.html";
    } else {
        alert("로그인 후 이용해주세요.");
    }
}
