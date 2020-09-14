function qs(s) {
    return document.querySelectorAll(s);
}
inp = qs("input");
btn = qs("button");

function add() {
    let attn = qs("#attention")[0];
    let td_inp = qs("#td-input")[0];
    let list = document.createElement("li");
    let right = document.createElement("div");
    let left = document.createElement("div");
    let close = document.createElement("span");
    let edit = document.createElement("span");
    let like = document.createElement("span");
    let check = document.createElement("input");
    let txt = document.createElement("span");

    list.setAttribute("class", "list");
    check.setAttribute("type", "checkbox");
    close.setAttribute("class", "fa fa-close");
    edit.setAttribute("class", "fa fa-pencil edit");
    like.setAttribute("class", "fa fa-heart like ");
    right.setAttribute("class", "right");

    left.setAttribute("class", "left");
    txt.setAttribute("class", "tl-text");

    let nt = document.createTextNode(inp[0].value);

    inp[0].focus();

    if (inp[0].value == "" || inp[0].value == null) {
        attn.innerHTML = "Boş ola bilməz!";
        attn.style.display = "block";
        setTimeout(() => {
            attn.style.display = "none";
        }, 2700);
        btn[0].setAttribute("disabled");
    } else {
        btn[0].removeAttribute("disabled");
        attn.innerHTML = "";
    }

    like.onclick = () => {
        if (like.style.color != "red") {
            like.style.color = "red";
        } else {
            like.style.color = "";
        }
    };
    close.onclick = () => {
        list.remove();
    };
    txt.append(nt);
    right.append(like, edit, close);
    left.append(check, txt);

    list.append(right, left);
    let lists = qs("#lists")[0].append(list);

    txt.setAttribute("contentEditable", "false");

    edit.onclick = () => {
        edit.classList.toggle("fa-check");
        edit.classList.toggle("fa-pencil");
        if (edit.classList.contains("fa-pencil") == false) {
            txt.contentEditable = true;
            txt.focus();
            txt.style.textDecoration = "underline";
        } else {
            txt.setAttribute("contentEditable", "false");
            txt.style.textDecoration = "";
        }

        alert(edit.hasAttribute(id));
        if (edit.getAttribute == "fa fa-pencil") {
            alert(edit.hasAttribute("class"));
        }
        //  else{
        // prompt(txt.contentEditable)
        //  }
    };

    if (qs(".fa-pencil"))
        check.onclick = () => {
            if (check.checked == true) {
                txt.style.textDecoration = "line-through";
            } else if (check.checked == false) {
                txt.style.textDecoration = "";
            }
        };
    inp[0].value = "";
 }
add();
