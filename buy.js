let login_btn = document.getElementById('login_btn');
const receivedData = location.href.split("?")[1];

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
        url: 'buy.php',
        type: 'POST',
        data: {
          id: receivedData
        },
        success: function (data) {
            $("#add").html(data);
        },
        error: function (e) {
          alert(e.reponseText);
        }
      });
}

function buy() {
  alert("구매되었습니다.");
}