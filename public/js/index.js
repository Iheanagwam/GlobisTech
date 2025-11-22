window.addEventListener("DOMContentLoaded", function(){
    /* Study case slider variables*/
  let currentIndex = 1;
  const slider = document.querySelectorAll("#slider");
  const slides = document.getElementById('slides');
  const dots = document.querySelectorAll('.dot');
  
  const totalSlides = dots.length;
  let timer = setInterval(() => moveSlide(1), 2000); // Auto-play every 5s

  function updateSlide() {
    // slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    slider.forEach(slide => slide.classList.remove("active-slide"));
    slider[currentIndex].classList.add("active-slide")
    
    dots.forEach(dot => dot.classList.remove('active-dot'));
    dots[currentIndex].classList.add('active-dot');
  };

  function moveSlide(step) {
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    updateSlide();
    resetTimer();
  };

  function goToSlide(index) {
    currentIndex = index;
    updateSlide();
    resetTimer();
  };

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => moveSlide(1), 10000);
  };

  updateSlide();

  /* Faqs variables*/
  const arrows = document.querySelectorAll(".arrow");
  const faqsBodys = document.querySelectorAll(".faqs-q-card");
  const faqsPara = document.querySelectorAll(".faqs-q-card p");
  let currentFaqBody = "";
  let = prevDropedBody = "";
  
  /* Faqs dropdown function*/
  function dropDown(arrow, i) {
    const faqsParaHeight = faqsPara[i].clientHeight;
    const faqs_q_cardHeight = faqsParaHeight + 16;
    arrow.classList.toggle("activeArrow");
    
   if(faqsBodys[i].clientHeight == 0){
      faqsBodys[i].style.height = faqs_q_cardHeight + "px";
    }else{
      faqsBodys[i].style.height = "0px";
    };
  };
  
  arrows.forEach((arrow, i) => {
    arrow.onclick = () => {
      dropDown(arrow, i);
    }
  });
  
  /* Element counting block*/
  // Function to animate the counter
  function animateCount(el) {
    const target = +el.getAttribute('data-target');
    let count = 0;
    const speed = 100; // lower = faster
  
    const update = () => {
      const increment = target / speed;
      count += increment;
  
      if (count < target) {
        el.textContent = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    };
  
    update();
  }

  // Trigger when element enters viewport
  const counters = document.querySelectorAll('.count');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    observer.observe(counter);
  });
  
  /* Header tab scrolling effect*/
  const headTab = document.querySelector("#header-tab");
  
  var stickyOffset = headTab.offsetTop;
  var headerHeight = headTab.offsetHeight; // Get header height
  
  window.onscroll = function() {
    const dropOffset = stickyOffset + 200;
    console.log(window.pageYOffset, dropOffset);
      
    if (window.pageYOffset >= dropOffset) {
        headTab.classList.add("sticky");
        document.body.style.paddingTop = headerHeight + "px";
        
        headTab.style.transitiin = "position 2s linear";
    } else {
        headTab.classList.remove("sticky");
        document.body.style.paddingTop = "0";
    };
  };
});
