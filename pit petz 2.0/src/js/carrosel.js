const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel() {
  idx++;
  if (idx >= img.length) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 600}px)`;
}

function nextImage() {
  idx++;
  if (idx > img.length) {
    idx = idx + 1;
  }
  carrossel();
}

function prevImage() {
  idx--;
  if (idx < 0) {
    idx = img.length - 1;
  }
  carrossel();
}

setInterval(carrosel, 1500);
