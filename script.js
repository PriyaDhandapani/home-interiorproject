const subscribeBtn = document.getElementById("btn");
subscribeBtn.addEventListener("click", function () {
  showThankYouMessage();
});

function showThankYouMessage() {
  const message = document.createElement("p");
  message.textContent = "Thank you for subscribing!";
  message.ClassList.add("popup-message");
  document.body.appendChild(message);
}

// let a = 10;
// console.log(a);
