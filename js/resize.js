function resizeIframe(iframe) {
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
}

window.addEventListener("load", () => {
  const aboutFrame = document.getElementById("aboutFrame");
  const contactFrame = document.getElementById("contactFrame");

  if (aboutFrame) {
    aboutFrame.onload = () => resizeIframe(aboutFrame);
  }
  if (contactFrame) {
    contactFrame.onload = () => resizeIframe(contactFrame);
  }
});

