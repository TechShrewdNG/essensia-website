document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  var toggle = document.getElementById('mobile-menu-toggle');
  var menu = document.getElementById('mobile-menu');
  var openIcon = document.getElementById('mob-open');
  var closeIcon = document.getElementById('mob-close');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isHidden = menu.classList.toggle('hidden');
      openIcon.classList.toggle('hidden', !isHidden);
      closeIcon.classList.toggle('hidden', isHidden);
    });
  }

  // Desktop Services dropdown — click to open/close
  var wrapper = document.querySelector('nav .relative.group');
  if (wrapper) {
    var btn = wrapper.querySelector('button');
    var drop = wrapper.querySelector('div.absolute');
    if (btn && drop) {
      var open = false;

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        open = !open;
        if (open) {
          drop.classList.remove('opacity-0', 'invisible');
          drop.classList.add('opacity-100', 'visible');
          drop.style.transform = 'translateY(0)';
        } else {
          drop.classList.remove('opacity-100', 'visible');
          drop.classList.add('opacity-0', 'invisible');
          drop.style.transform = 'translateY(4px)';
        }
      });

      document.addEventListener('click', function () {
        if (open) {
          open = false;
          drop.classList.remove('opacity-100', 'visible');
          drop.classList.add('opacity-0', 'invisible');
          drop.style.transform = 'translateY(4px)';
        }
      });
    }
  }
});
