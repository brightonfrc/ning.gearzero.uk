const logo = document.getElementById("logo");

let rot = 0;

setInterval(() => {
  const svgDocument = logo.contentDocument;
  if (!svgDocument) return;
  rot += 0.2;
  rot = rot % 360;
  const gear = svgDocument.getElementById("gear");
  gear.style.transformOrigin = `center`;
  gear.style.transformBox = `fill-box`;
  gear.style.transform = `rotate(${rot}deg)`;
});
