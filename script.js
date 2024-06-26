document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll('header nav ul li a');
  
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        var offsetTop = targetElement.offsetTop;
        
        window.scrollTo({
          top: offsetTop - 180, // Ajuste conforme necessário para considerar o cabeçalho fixo
          behavior: 'smooth'
        });
      }
    });
  });
});
