// [AI Generated] Data: 01/09/2026
// Descricao: Calculo automatico dos dias restantes, fallback da imagem e confetes na abertura
// Gerado por: Cursor AI
// AI_GENERATED_CODE_START
(() => {
  // Ajuste esta data para o dia de chegada da Lara (formato ISO: AAAA-MM-DD).
  const targetDate = "2026-09-05";

  const messageElement = document.getElementById("countdownMessage");
  const imageElement = document.getElementById("arrivalImage");
  const placeholderElement = document.getElementById("imagePlaceholder");

  const calculateRemainingDays = (dateString) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const arrival = new Date(`${dateString}T00:00:00`);

    if (Number.isNaN(arrival.getTime())) {
      return null;
    }

    const diffMs = arrival.getTime() - today.getTime();
    return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  };

  const remainingDays = calculateRemainingDays(targetDate);

  if (remainingDays === null) {
    messageElement.textContent = "Defina uma data valida para a chegada da Lara.";
  } else {
    messageElement.textContent = `Faltam ${remainingDays} dias para Lara chegar!`;
  }

  imageElement.addEventListener("load", () => {
    placeholderElement.style.display = "none";
  });

  imageElement.addEventListener("error", () => {
    imageElement.style.display = "none";
    placeholderElement.style.display = "grid";
  });

  if (imageElement.complete && imageElement.naturalWidth > 0) {
    placeholderElement.style.display = "none";
  }

  // [AI Generated] Data: 01/09/2026
  // Descricao: Efeito visual de confetes ao abrir a pagina
  // Gerado por: Cursor AI
  // AI_GENERATED_CODE_START
  const launchConfetti = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    Object.assign(canvas.style, {
      position: "fixed",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: "9999"
    });

    document.body.appendChild(canvas);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = ["#ff5c8a", "#ffd166", "#8be9fd", "#ff9ecb", "#c8f7a6"];
    const confetti = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.6,
      size: 6 + Math.random() * 10,
      speedY: 1.6 + Math.random() * 3,
      speedX: -1.2 + Math.random() * 2.4,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: -0.1 + Math.random() * 0.2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    const durationMs = 2600;
    const start = performance.now();

    const drawPiece = (piece) => {
      context.save();
      context.translate(piece.x, piece.y);
      context.rotate(piece.rotation);
      context.fillStyle = piece.color;
      context.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.6);
      context.restore();
    };

    const animate = (time) => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (const piece of confetti) {
        piece.x += piece.speedX;
        piece.y += piece.speedY;
        piece.rotation += piece.rotationSpeed;

        if (piece.y > canvas.height + 30) {
          piece.y = -30;
          piece.x = Math.random() * canvas.width;
        }

        drawPiece(piece);
      }

      if (time - start < durationMs) {
        requestAnimationFrame(animate);
        return;
      }

      window.removeEventListener("resize", resizeCanvas);
      canvas.remove();
    };

    requestAnimationFrame(animate);
  };

  launchConfetti();
  // AI_GENERATED_CODE_END
})();
// AI_GENERATED_CODE_END
