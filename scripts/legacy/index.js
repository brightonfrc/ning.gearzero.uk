const marquee = document.getElementById("marquee");
const logo = document.getElementById("logo");

let hue = 0;
let rot = 0;

setInterval(() => {
  hue++;
  hue = hue % 360;

  rot += 0.2;
  rot = rot % 360;

  marquee.style.color = `hsl(${hue} 100 50)`;
  logo.style.transform = `rotate(${rot}deg)`;
});
