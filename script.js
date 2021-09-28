'use-strict';

const applyClassList = () => {
  let classs = Array.from(document.querySelector('ol').children);
  // Adding Classes list Styles
  classs.forEach((el) => {
    el.style.background = '#222';
    el.style.border = '0.0625rem solid #484848';
    el.children[2].style.borderTop = '0.0625rem solid #484848';
  });
  return (classs.length = 0 ? false : true);
};
const applyDarkSidebar = () => {
  let sidebar = document.querySelector('.OX4Vcb');
  if (!sidebar) return setTimeout(applyDarkSidebar, 2000);
  let linkTexts = Array.from(document.querySelectorAll('.nhassd'));
  let CtText = Array.from(document.querySelectorAll('.TajIHf'));
  linkTexts.forEach((el) => {
    el.style.color = '#eee';
  });
  CtText.forEach((el) => {
    el.style.color = '#a7a7a7';
  });
  sidebar.style.background = '#222';
};
const applyDarkMain = () => {
  // Selecting the required elements
  let body = document.querySelector('body');
  let nav = document.querySelector('nav');

  // Applying Styles
  body.style.backgroundColor = '#111111f5';
  nav.style.background = '#222';
  nav.style.borderBottom = '0.0625rem solid #666';
};
const applyDark = () => {
  let currentUrl = document.location.href;
  if (currentUrl.includes('classroom.google.com')) {
    // Calling Required funcs
    applyDarkMain();
    applyDarkSidebar();
    setTimeout(() => {
      let ret = applyClassList();
      if (!ret)
        setTimeout(() => {
          console.log('Timer registered');
          applyClassList();
        }, 3000);
    }, 3000);
  }
};

window.addEventListener('load', applyDark);
