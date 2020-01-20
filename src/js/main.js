import about from './about.js';
import contact from './contact.js';
import info from './info.js';

const main = () => {
  const base = document.querySelector('#content');

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
};
export default main;
