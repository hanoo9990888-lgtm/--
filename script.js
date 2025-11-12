document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const loader = document.getElementById("loader");
  const result = document.getElementById("result");
  const bgAudio = document.getElementById("bgAudio");
  const hearts = document.querySelector(".floating-hearts");

  // تشغيل الصوت تلقائيًا
  bgAudio.volume = 0.3;
  bgAudio.play().catch(() => {
    console.log("الصوت لم يُفعّل تلقائيًا — يمكن تشغيله بعد تفاعل المستخدم");
  });

  // تحريك زر "لا" عند مرور الفأرة عليه
  noBtn.addEventListener("mouseover", () => {
    const container = document.querySelector(".buttons-container");
    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.transition = "all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
  });

  // عند الضغط على "نعم"
  yesBtn.addEventListener("click", () => {
    loader.style.display = "block";
    result.style.opacity = 0;

    setTimeout(() => {
      loader.style.display = "none";
      result.style.display = "flex";
      result.style.opacity = 1;

      // إنشاء قلوب متحركة
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const heart = document.createElement("div");
          heart.classList.add("heart-piece");
          heart.style.animationDelay = `${i * 0.2}s`;
          hearts.appendChild(heart);
        }, i * 200);
      }

      // ملء شريط التقدم
      const bar = document.querySelector(".bar-fill");
      bar.style.width = "100%";
    }, 3000);
  });
});