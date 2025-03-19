const numSparkles = 100;
const container = document.body;

for (let i = 0; i < numSparkles; i++) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.top = Math.random() * 100 + '%';
  sparkle.style.left = Math.random() * 100 + '%';
  sparkle.style.animationDelay = Math.random() * 2 + 's';
  container.appendChild(sparkle);
}