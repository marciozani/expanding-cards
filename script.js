let panels = document.querySelectorAll('.panel');

panels.forEach(panel =>
  panel.addEventListener('click', 
event =>
 {
  panels.forEach(panel =>
    panel.classList.remove('active'));

  const active = event.target;
  active.classList.add('active');
}));

