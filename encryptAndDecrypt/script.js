const Encrpyt = function () {
  let msg = document.getElementById("text").value;
  let step = parseInt(document.getElementById("number").value);

  if (!isNaN(step)) {
    document.getElementById("output").innerHTML = "Invalid number";
    return;
  }
  let newMsg = "";

  for (let i = 0; i < msg.length; i++) {
    newMsg += String.fromCharCode(msg.charCodeAt(i) + step);
  }

  document.getElementById("output").innerHTML = "Encrypted Message " + newMsg;
};

const Decrpyt = function () {
  let msg = document.getElementById("text1").value;
  let step = parseInt(document.getElementById("number1").value);

  if (!isNaN(step)) {
    document.getElementById("output1").innerHTML = "Invalid number";
    return;
  }
  let newMsg = "";

  for (let i = 0; i < msg.length; i++) {
    newMsg += String.fromCharCode(msg.charCodeAt(i) - step);
  }

  document.getElementById("output1").innerHTML = "Decrypted Message " + newMsg;
};

let msgEncrpyt = document.getElementById("button");
msgEncrpyt.addEventListener("click", Encrpyt);

let msgDecrpyt = document.getElementById("button1");
msgDecrpyt.addEventListener("click", Decrpyt);
