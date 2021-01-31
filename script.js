let panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', (event) => {
  clearActive(panels);
  setActive(event.target);
}));

const clearActive = (elements) =>
  elements.forEach(element => element.classList.remove('active'));

const setActive = (element) =>
  element.classList.add('active');