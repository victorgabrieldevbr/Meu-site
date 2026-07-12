document.getElementById('year').textContent = new Date().getFullYear();

  // efeito de digitação na linha final do editor
  const target = document.getElementById('typed');
  const text = 'console.log(dev.objetivo);';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce) {
    target.textContent = text;
  } else {
    let i = 0;
    function type(){
      if (i <= text.length){
        target.textContent = text.slice(0, i);
        i++;
        setTimeout(type, 45);
      }
    }
    setTimeout(type, 400);
  }

  // marca aba ativa conforme rolagem
  const sections = document.querySelectorAll('main section');
  const tabs = document.querySelectorAll('.tab');
  const links = document.querySelectorAll('.nav-links a');

  const setActive = (id) => {
    tabs.forEach(t => t.classList.toggle('active', t.getAttribute('href') === '#' + id));
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
