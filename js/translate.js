
  const translateBtn = document.getElementById("translateBtn");
  const aboutText = document.getElementById("aboutText");

  let isTranslated = false;
  const originalText = aboutText.textContent;

  translateBtn.addEventListener("click", async () => {
    if (isTranslated) {
      aboutText.textContent = originalText;
      translateBtn.textContent = "Translate US";
      isTranslated = false;
      return;
    }

    translateBtn.textContent = "번역 중...";

    try {
      const response = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: originalText,
          source: "ko",
          target: "en",
          format: "text"
        })
      });

      const data = await response.json();
      aboutText.textContent = data.translatedText;
      translateBtn.textContent = "Translate KOR";
      isTranslated = true;

    } catch (error) {
      translateBtn.textContent = "번역 실패";
      console.error("번역 오류:", error);
    }
  });
