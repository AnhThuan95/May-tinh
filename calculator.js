function cong() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    x1 = a + b;
    document.getElementById("result").innerHTML = "Phep cong: " + x1;
}

function tru() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    x2 = a - b;
    document.getElementById("result").innerHTML = "Phep tru: " + x2;
}

function nhan() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    x3 = a * b;
    document.getElementById("result").innerHTML = "Phep nhan: " +x3;
}

function chia() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    x4 = a / b;
    document.getElementById("result").innerHTML = "Phep chia: " +x4;
}