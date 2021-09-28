'use-strict';

const applyClassList = () => {
  let classs = Array.from(document.querySelector('ol').children);
  console.log(classs);
  // Adding Classes list Styles
  classs.forEach((el) => {
    el.style.background = '#222';
  });
};

const applyDark = () => {
  let currentUrl = document.location.href;
  if (currentUrl.includes('classroom.google.com')) {
    // Selecting the required elements
    let body = document.querySelector('body');
    let nav = document.querySelector('nav');
    // Apply Styles
    setTimeout(() => {}, 3000);
    body.style.backgroundColor = '#111111f5';
    nav.style.background = '#222';
    nav.style.borderBottom = '0.0625rem solid #666';
  }
};

window.addEventListener('load', applyDark);
