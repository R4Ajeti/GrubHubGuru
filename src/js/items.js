import { maxColValInMatrix, minColValInMatrix } from './staticFunctions.js';

const items = () => {
  const strToEuro = x => parseInt(x.substr(0, x.length - 1).replace('.', ''));
  const itemFeatureH = ['#', 'Përshkrimi', 'Përmbajtja', 'Cmimi'];
  const itemFeatureV = [1, 2, 3, 4, 5, 6];
  const itemMatrix = [
    ['Sup pule', '', '1.50€'],
    ['Sup viqi', '', '2.50€'],
    ['Sup me perime', '', '1.50€'],
    ['Rissoto pule', '', '3.70€'],
    ['Rissoto viqi', '', '3.70€'],
    ['Rissoto me fruta deti', '', '4.50€']
  ];
  const itemsContainer = document.createElement('div');
  itemsContainer.setAttribute('id', 'content-items');
  itemsContainer.style.opacity = 1;
  itemsContainer.border = '3px solid red';

  const resposiveItems = document.createElement('div');
  resposiveItems.classList.add('table-responsive');
  resposiveItems.style.borderRadius = '15px 50px 30px';
  resposiveItems.border = '3px solid red';

  const tableResposive = document.createElement('table');
  tableResposive.classList.add('table', 'table-curved', 'table-light');

  const theadTable = document.createElement('thead');
  theadTable.classList.add('thead-dark');
  const trThead = document.createElement('tr');

  for (let i = 0; i < itemFeatureH.length; i++) {
    let val = i == 0 ? '#' : itemFeatureH[i];
    let thTr = document.createElement('th');
    thTr.scope = 'col';
    thTr.innerHTML = val;
    trThead.appendChild(thTr);
  }

  theadTable.appendChild(trThead);

  const tbodyTable = document.createElement('tbody');

  for (let i = 0; i < itemMatrix.length; i++) {
    let trTbody = document.createElement('tr');
    const thTr = document.createElement('th');
    thTr.scope = 'row';
    thTr.innerHTML = itemFeatureV[i];
    trTbody.appendChild(thTr);
    for (let j = 0; j < itemMatrix[i].length; j++) {
      let priceType = null;
      if (j == itemMatrix[i].length - 1) {
        if (
          strToEuro(itemMatrix[i][j]) ==
          maxColValInMatrix(itemMatrix, 2, strToEuro)
        )
          priceType = 'danger';
        else if (
          strToEuro(itemMatrix[i][j]) ==
          minColValInMatrix(itemMatrix, 2, strToEuro)
        )
          priceType = 'success';
      }

      const tdTr = document.createElement('td');
      tdTr.innerHTML = itemMatrix[i][j];
      if (priceType !== null) {
        let help = 'table-' + priceType;
        trTbody.classList.add(help);
      }
      trTbody.appendChild(tdTr);
    }
    tbodyTable.appendChild(trTbody);
  }
  tableResposive.appendChild(theadTable);
  tableResposive.appendChild(tbodyTable);

  itemsContainer.appendChild(tableResposive);
  return itemsContainer;
};
export default items;
