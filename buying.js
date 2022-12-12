let login_btn = document.getElementById('login_btn');
const receivedData = location.href.split("?")[1];
let buy_btn = document.getElementById("buy_btn");

login_btn.addEventListener("click", login);
buy_btn.addEventListener("click", buy);

if (sessionStorage.getItem('id') == null) {
  login_btn.innerText = "로그인";
} else if (sessionStorage.getItem('id') != "") {
  login_btn.innerText = sessionStorage.getItem("name") + "님";
}
load();

function load() {
  $.ajax({
    url: 'callPost.php',
    type: 'POST',
    data: {
      w_id: receivedData
    },
    success: function (data) {
      let arr = JSON.parse(data);
      document.getElementById("img").src = "./img/" + arr.img;
      $("#title").html(arr.title);
      $("#weight").html("1kg 당 " + arr.prize + "원<br>" + arr.kg + "kg 단위로 판매 중");
      let str = arr.writing.replace(/(?:\r\n|\r|\n)/g, '<br>');
      $("#writing").html(str);
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

function count(type) {
  let number = num.innerText;

  if (type === 'plus') {
    number = parseInt(number) + 1;
  } else if (type === 'minus') {
    number = parseInt(number) - 1;
  }

  num.innerText = number;
}

$("#bucket_btn").click(function () {
  if (sessionStorage.id != "" && sessionStorage.id != null) {
    $.ajax({
      url: 'saveBucket.php',
      type: 'POST',
      data: {
        id: receivedData,
        num: parseInt(num.innerText),
        user: sessionStorage.getItem('id')
      },
      success: function (data) {

      },
      error: function (e) {
        alert(e.reponseText);
      }
    });
    alert("장바구니에 담았습니다.");
  } else {
    alert("로그인 후 이용해주세요."); 
  }
})

function buy() {
  window.open(`./buy.html?${receivedData}`);
}