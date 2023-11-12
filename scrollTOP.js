    document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollButton");

    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 1100) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    });

    scrollButton.addEventListener("click", function () {
      smoothScrollToTop();
    });

    function smoothScrollToTop() {
      const targetPosition = 0;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Время анимации в миллисекундах

      let start = null;
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
  });
