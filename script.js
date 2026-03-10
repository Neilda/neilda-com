const QUOTES = {
  founders: 'I design ecosystems where ambitious builders find momentum, capital, and each other.',
  leaders: 'I help communities move from random results to deliberate architecture.',
  collaborators: "If you're building something serious, let's find where our work connects.",
};

const quote = document.getElementById('slider-quote');
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const audience = tab.dataset.audience;

    // Update active tab
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    // Fade out, swap text, fade in
    quote.classList.add('fade');
    setTimeout(() => {
      quote.textContent = QUOTES[audience];
      quote.classList.remove('fade');
    }, 200);
  });
});
