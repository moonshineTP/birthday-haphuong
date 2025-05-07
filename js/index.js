(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);

  var audio = $('background-music');

  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
      audio.play().catch(error => console.error('Error playing audio:', error));
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;

      audio.pause();
      audio.currentTime = 0;
    }, 1000);
  });
})();

(function() {
  function createConfetti() {
    const confettiCount = 50; // Number of confetti pieces
    const colors = ['#f26b38', '#ffefef', '#8b6a60', '#ffcc00', '#ff4081'];
    const body = document.body;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
      confetti.style.top = Math.random() * 20 + 'vh'; // Confetti stays near the top
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Random color
      confetti.style.transform = `scale(${Math.random()})`; // Random size
      body.appendChild(confetti);

      // Remove confetti after some time to prevent memory leaks
      setTimeout(() => confetti.remove(), 5000);
    }
  }

  // Trigger confetti on page load
  window.addEventListener('load', createConfetti);
})();

function createConfetti(amount = 100) {
  const colors = ['#f26b38', '#ffcc00', '#33ccff', '#99ff66', '#ff66cc'];

  for (let i = 0; i < amount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    const size = Math.random() * 6 + 4;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * 100}px`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(confetti);
  }
}

// Call it on page load or on demand
window.addEventListener('DOMContentLoaded', () => {
  createConfetti(80);
});


