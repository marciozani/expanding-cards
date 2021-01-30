let panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  console.log('registered');
  panel.addEventListener('click', this.toogleActive);
});

function toogleActive(event) {
  panels.forEach(panel => {
    console.log(panel.className);
    panel.classList.remove('active');
  });

  const active = event.target;
  active.classList.add('active');
}

