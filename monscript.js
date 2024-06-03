document.addEventListener("scroll", function() {
    var sections = document.querySelectorAll("article.hidden-section");
    var windowHeight = window.innerHeight;
  
    sections.forEach(function(section) {
      if (section.getBoundingClientRect().top < windowHeight * 0.75) {
        section.classList.remove("hidden-section");
      }
    });
  });
  