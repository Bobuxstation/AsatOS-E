$( ".window" ).draggable({ handle: ".header" });

function openfiles() {
document.getElementById("app").style.display = "block";
document.getElementById("store").src = "https://zeankundev.github.io/KaOS-Store/index.html";
}
function closefiles() {
document.getElementById("app").style.display = "none";
document.getElementById("store").src = "";
}

function openfiles2() {
document.getElementById("app2").style.display = "block";
}
function closefiles2() {
document.getElementById("app2").style.display = "none";
}

function openfiles3() {
document.getElementById("app3").style.display = "block";
document.getElementById("file").src = "c://";
}
function closefiles3() {
document.getElementById("app3").style.display = "none";
document.getElementById("file").src = "";
}

function openfiles4() {
document.getElementById("app4").style.display = "block";
}
function closefiles4() {
document.getElementById("app4").style.display = "none";
}

function openfiles5() {
document.getElementById("app5").style.display = "block";
}
function closefiles5() {
document.getElementById("app5").style.display = "none";
}

function openfiles6() {
document.getElementById("app6").style.display = "block";
document.getElementById("browserframe").src = "browserhome.html";
}
function closefiles6() {
document.getElementById("app6").style.display = "none";
document.getElementById("browserframe").src = "";
}

function openfiles7() {
document.getElementById("app7").style.display = "block";
}
function closefiles7() {
document.getElementById("app7").style.display = "none";
}

function menu() {
  var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function custom_bg(event) {
  var reader = new FileReader();
  reader.onload = function() {
    document.getElementById("body").style.backgroundImage = `url(${reader.result})`;
    document.getElementById("body").style.backgroundSize = 'cover';
  }
  reader.readAsDataURL(event.target.files[0]);
}
function search() {
  var search = prompt("Enter A JavaScript Function...")
  eval(search);
}

function browsergo() {
  let link = document.getElementById("link").value;
  document.getElementById("browserframe").src = link;
}
function browserrefresh() {
  document.getElementById("browserframe").src = document.getElementById("browserframe").src;
}
function browserhome() {
  document.getElementById("browserframe").src = "browserhome.html";
}