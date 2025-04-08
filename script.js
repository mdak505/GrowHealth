function showMessage() {
  alert("GrowHealth offers flexible and affordable RCM solutions for clinics and hospitals!");
}

function handleSubmit(event) {
  event.preventDefault();
  alert("Your message has been sent. We will get back to you soon!");
}
// Animated Counter Script
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };

  // Start the counter animation when scrolled into view
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      updateCounter();
      observer.disconnect(); // Run once
    }
  });

  observer.observe(counter);
});
