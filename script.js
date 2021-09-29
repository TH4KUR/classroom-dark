'use-strict';

const addglobalStyles = () => {
  let style = document.createElement('style');
  let css = `
  body{color:#ddd}
  .apFsO.onkcGd,.apFsO.onkcGd:visited,.nhassd{color: #eee;}.oBSRLe,.TajIHf{color: #a7a7a7;}.rZXyy:hover{box-shadow: none;}.OX4Vcb{background: #222;}.gHz6xd{background:#222;border: 0.0625rem solid #484848}.SZ0kZe,{border-top: 0.0625rem solid #484848;}.Aopndd{background-color: #181818;border:0.0625rem solid #dadce042;}.s2g3Xd,.SZ0kZe{border-top:0.0625rem solid #dadce042;}.d4Fe0d{background-color:#101010;border: 0.0625rem solid #dadce042;}.EZrbnd{color:#eee}.sdDCme{color:#aaa;}.K6Ovqd,.Lzdwhd-BrZSOd,.wZTANe .J1raN{color:#bbb;}.asQXV,.A6dC2c,.K6Ovqd{color:#c5c5c5}.oleV8d{border: 0.0625rem solid #dadce042;}.wZTANe .J1raN:hover{color: #eee}
  `;
  style.innerText = css;
  document.querySelector('head').appendChild(style);
  console.log('hello', style.innerText);
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
    ////////////////////////////////////////////////////////
    // Calling Required funcs
    applyDarkMain();
    addglobalStyles();
  }
};

window.addEventListener('load', applyDark);
window.addEventListener('popstate', applyDark);
