const button = document.getElementById('menu-button');
  const dropdownMenu = document.getElementById('dropdown-menu');

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;
    button.setAttribute('aria-expanded', !expanded);
    if (!expanded) {
      dropdownMenu.classList.add('block');
      dropdownMenu.classList.remove('hidden');
    } else {
      dropdownMenu.classList.add('hidden');
      dropdownMenu.classList.remove('block');
    }
  });

  // Close the dropdown when focus moves away from it
  dropdownMenu.addEventListener('focusout', () => {
    dropdownMenu.classList.add('hidden');
    dropdownMenu.classList.remove('block');
    button.setAttribute('aria-expanded', 'false');
  });
