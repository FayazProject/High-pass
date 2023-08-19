const menuHeight = document.querySelector('.nav').scrollHeight;

document.documentElement.style.setProperty('--nav-menu', menuHeight+'px');

console.log(menuHeight)
