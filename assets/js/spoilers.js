document.addEventListener('DOMContentLoaded', function() {
  // Convert >!text!< syntax to spoilers
  document.querySelectorAll('p, li, td').forEach(element => {
    if (element.innerHTML.includes('&gt;!') && element.innerHTML.includes('!&lt;')) {
      element.innerHTML = element.innerHTML.replace(
        /&gt;!(.*?)!&lt;/g,
        '<span class="spoiler">$1</span>'
      );
    }
  });
  
  // Make spoilers clickable
  document.querySelectorAll('.spoiler').forEach(spoiler => {
    spoiler.addEventListener('click', function() {
      this.classList.add('revealed');
    });
  });
});