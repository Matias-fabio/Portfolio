const goIn = document.getElementById("goIn");
const goGit = document.getElementById("goGit");
const presIn = document.getElementById("pres-text-card");
const descargarCV = document.getElementById("descargar-cv");
const contacto = document.querySelectorAll("#contacto");

// Redireccion a paginas sociales

goIn.addEventListener("click", () => {
  window.open("https://www.linkedin.com/", "_blank");
});
presIn.addEventListener("click", () => {
  window.open("https://www.linkedin.com/", "_blank");
});

goGit.addEventListener("click", () => {
  window.open("https://github.com/Matias-fabio", "_blank");
});

//descargar cv
descargarCV.addEventListener("click", () => {
  const enlace = document.createElement("a");
  enlace.href = "./resources/CurriculumVitae.pdf";
  enlace.download = "CurriculumVitae.pdf";
  enlace.click();
});

//formulario de contacto
contacto.forEach((element) => {
  element.addEventListener("click", () => {
    window.open("https://forms.gle/dYC92dsNJ8c9kwtS9", "_blank");
  });
});
