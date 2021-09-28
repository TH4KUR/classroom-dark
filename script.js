'use-strict';

const applyDark = () => {
  console.log('laoded');
  let currentUrl = document.location.href;
  if (currentUrl.includes('classroom.google.com')) {
    // Selecting the required elements
    let body = document.querySelector('body');
    let nav = document.querySelector('nav');
    let classes =
      Array.from(document.querySelector('ol').children) ||
      setTimeout(() => Array.from(document.querySelector('ol').children), 3000);
    // Apply Styles
    body.style.backgroundColor = '#111111f5';
    nav.style.background = '#222';
    nav.style.borderBottom = '0.0625rem solid #666';
  }
};

window.addEventListener('load', applyDark);
