const discoveryButton = document.querySelector('.discovery-button');
const discovery = document.querySelector('#discovery');

if (discoveryButton && discovery) {
  discoveryButton.hidden = false;
  discoveryButton.addEventListener('click', () => {
    const expanded = discoveryButton.getAttribute('aria-expanded') === 'true';
    discoveryButton.setAttribute('aria-expanded', String(!expanded));
    discovery.hidden = expanded;
    discoveryButton.innerHTML = expanded
      ? 'Take a closer look <span aria-hidden="true">+</span>'
      : 'A little more to notice <span aria-hidden="true">−</span>';
  });
}
