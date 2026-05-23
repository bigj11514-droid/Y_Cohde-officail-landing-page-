const heroCard = document.querySelector('.hero-card');
const serviceCards = document.querySelectorAll('.service-card');

function handleOrbit(event, target, strength = 16) {
  const rect = target.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * strength;
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * strength;
  target.style.setProperty('--rotate-x', `${-y}deg`);
  target.style.setProperty('--rotate-y', `${x}deg`);
}

function resetOrbit(target) {
  target.style.setProperty('--rotate-x', '0deg');
  target.style.setProperty('--rotate-y', '0deg');
}

if (heroCard) {
  heroCard.addEventListener('pointermove', event => handleOrbit(event, heroCard, 18));
  heroCard.addEventListener('pointerleave', () => resetOrbit(heroCard));
}

serviceCards.forEach(card => {
  card.addEventListener('pointermove', event => handleOrbit(event, card, 10));
  card.addEventListener('pointerleave', () => resetOrbit(card));
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
