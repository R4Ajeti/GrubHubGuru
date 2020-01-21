import about from './about.js';
import contact from './contact.js';
import info from './info.js';
import items from './items.js';

const main = flag => {
  if (!flag) {
    const menuContainer = document.createElement('h1');
    menuContainer.appendChild(items());
    const row = document.getElementsByClassName('row')[0];
    row.parentNode.replaceChild(menuContainer, row);
    const btn = document.getElementById('menu');
    btn.innerHTML = 'HOME';
    btn.onclick = function() {
      main(true);
    };
  } else {
    const base = document.querySelector('#content');

    if (base.childElementCount > 2) {
      base.removeChild(base.lastChild);
      base.removeChild(base.lastChild);
      base.removeChild(base.lastChild);
      base.removeChild(base.lastChild);
    }

    const btn = document.createElement('BUTTON');
    btn.setAttribute('id', 'menu');
    btn.innerHTML = 'MENU';
    btn.onclick = function() {
      main(false);
    };
    base.appendChild(btn);

    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'content-main');
    mainContainer.classList.add('bg-highlighted');

    const innerMain = document.createElement('div');
    innerMain.setAttribute('id', 'content-main-inner');

    const rowInner = document.createElement('div');
    rowInner.classList.add('row');

    const leftRow = document.createElement('div');
    leftRow.classList.add('col-xs-6', 'col-md-6', 'col-sm-6');

    leftRow.appendChild(about());

    const rightRow = document.createElement('div');
    rightRow.classList.add('col-xs-6', 'col-md-6', 'col-sm-6');

    rightRow.appendChild(contact());

    rowInner.appendChild(leftRow);
    rowInner.appendChild(rightRow);

    innerMain.appendChild(rowInner);
    mainContainer.appendChild(innerMain);

    base.appendChild(mainContainer);

    const br = document.createElement('br');

    base.appendChild(br);

    const innerContainer = document.createElement('div');
    innerContainer.setAttribute('id', 'content-inner');
    innerContainer.classList.add('bg-highlighted');

    innerContainer.appendChild(info());

    base.appendChild(innerContainer);
  }
};
export default main;
