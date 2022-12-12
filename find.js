let form = document.getElementById("form");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let btn = document.getElementById("btn");

function emailDiv() {
    if(form.childElementCount > 2) {
        form.firstChild.remove();
    }
    let div = document.createElement("div");
    div.className = "int-area";
    let input = document.createElement("input");
    input.type = "text";
    input.name = "email";
    input.id = "info";
    input.autocomplete = "off";
    input.required = true;
    let label = document.createElement("label");
    label.htmlFor = "email";
    var t = document.createTextNode("이메일");
    label.appendChild(t);
    div.appendChild(input);
    div.appendChild(label);

    form.insertBefore(div, form.firstChild);
}

function phoneDiv() {
    if(form.childElementCount > 2) {
        form.firstChild.remove();
    }
    let div = document.createElement("div");
    div.className = "int-area";
    let input = document.createElement("input");
    input.type = "text";
    input.name = "phone";
    input.id = "info";
    input.autocomplete = "off";
    input.required = true;
    let label = document.createElement("label");
    label.htmlFor = "phone";
    var t = document.createTextNode("전화번호");
    label.appendChild(t);
    div.appendChild(input);
    div.appendChild(label);

    form.insertBefore(div, form.firstChild);
}

email.addEventListener("click", emailDiv);
phone.addEventListener("click", phoneDiv);
btn.addEventListener("click", kind);

function kind() {
   if(btn.value == "id") {
    findid();
   } else {
    findpw();
   }
}

function findid() {
    $.ajax({
        url: 'findid.php',
        type: 'POST',
        data: {
            info: $("#info").val(),
            name: $("#id").val()
        },
        success: function (data) {
            if(data != 'false'){
                alert("고객님의 아이디는 "+data+" 입니다.");
            } else {
                alert("해당하는 계정이 없습니다.");
            }
        },
        error: function (e) {
          alert(e.reponseText);
        }
      });
}

function findpw() {
    $.ajax({
        url: 'findpw.php',
        type: 'POST',
        data: {
            info: $("#info").val(),
            name: $("#name").val(),
            id: $("#id").val()
        },
        success: function (data) {
            if(data != 'false'){
                alert("고객님의 비밀번호는 "+data+" 입니다.");
            } else {
                alert("해당하는 계정이 없습니다.");
            }
        },
        error: function (e) {
          alert(e.reponseText);
        }
      });
}