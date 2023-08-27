function ShowAlert(amount, subtitle) {
  const mainblock = document.querySelector(".main");
  const alertContainer = document.createElement("div");
  alertContainer.classList.add("alertContainer");

  alertContainer.innerHTML = `<div class="interactiveContainer"><video muted="" class ="video" playsinline="" preload="auto" autoplay src="https://send.monobank.ua/widget/../widget/assets/media/1afa.webm"></video>
      <audio preload="auto" autoplay src="https://send.monobank.ua/widget/../widget/assets/media/730f.mp3"></audio></div>
      <div class="text text-scheme-black"><div class="title">${amount} ₴</div><div class="subtitle">Дякую, ${subtitle}, за підтримку!</div></div>`;
  alertContainer.classList.toggle("show");
  mainblock.append(alertContainer);

  setTimeout(() => {
    alertContainer.innerHTML = ``;
    alertContainer.classList.toggle("show");
  }, 5000);
}

export default ShowAlert;
