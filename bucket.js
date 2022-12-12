let login_btn = document.getElementById('login_btn');
let buy_btn = document.getElementById('buy_btn');
let cancel_btn;

login_btn.addEventListener("click", login);
buy_btn.addEventListener("click", buy);

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
    url: 'bucket.php',
    type: 'POST',
    data: {
      user: sessionStorage.getItem("id")
    },
    success: function (data) {
      $("#main").html(data);
      cancel_btn = document.getElementById("cancel");
      cancel_btn.addEventListener("click", cancel);
    },
    error: function (e) {
      alert(e.reponseText);
    }
  });
}

function cancel() {
  let arr = [];
  let str = "";
  let check = document.getElementsByName("check");
  for (let i = 0; i < check.length; i++) {
    if (check[i].checked == true) {
      arr.push(check[i].value);
      str = str+check[i].value+" ";
    }
  }

  $.ajax({
    url: 'bucket_cancel.php',
    type: 'POST',
    data: {
      user: sessionStorage.getItem("id"),
      arr: arr
    },
    success: function (data) {
      alert("삭제되었습니다.");
      load();
    },
    error: function (e) {
      alert(e.reponseText);
    }
  });
}

function buy() {
  window.open("bucket_buy.html");
}