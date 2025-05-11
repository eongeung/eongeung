function resizeIframe(iframe) {
  const doc = iframe.contentWindow.document;
  if (doc.readyState === 'complete') {
    iframe.style.height = doc.body.scrollHeight + 'px';
  }
}

window.addEventListener("load", () => {
  const frames = document.querySelectorAll("iframe");

  frames.forEach((frame) => {
    frame.onload = () => resizeIframe(frame);
  });
});
