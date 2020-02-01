const info = () => {
  const infoContainer = document.createElement('div');
  infoContainer.setAttribute('id', 'partneret');

  const hInfo = document.createElement('h1');
  hInfo.innerHTML = 'Historiku';

  const tabsInfo = document.createElement('div');
  tabsInfo.classList.add('tabs');

  const t1Tabs = document.createElement('div');
  t1Tabs.classList.add('tab-2');

  const lT1 = document.createElement('label');
  lT1.innerHTML = 'Restaurant EDI';
  lT1.htmlFor = 'tab2-1';

  const inT1 = document.createElement('input');
  inT1.setAttribute('id', 'tab2-1');
  inT1.name = 'tabs-two';
  inT1.type = 'radio';
  inT1.checked = true;

  const divT1 = document.createElement('div');

  const h4Div = document.createElement('h4');
  h4Div.innerHTML = 'Objekti i vjeter';

  const pDiv = document.createElement('p');
  pDiv.innerHTML = `Në vitin 2010 për ta zgjeruar hapësirën dhe avansuar menun
  tonë u ndërtua objekti i ri,i cili gjendet në afërsi të
  Restaurantit të parë. Një kuzhinë moderne e kombinuar midis
  kuzhinës italiane, franceze tradicionales si dhe një piceri me
  furrë druri.`;

  divT1.appendChild(h4Div);
  divT1.appendChild(pDiv);

  t1Tabs.appendChild(lT1);
  t1Tabs.appendChild(inT1);
  t1Tabs.appendChild(divT1);

  const t2Tabs = document.createElement('div');
  t2Tabs.classList.add('tab-2');

  const lT2 = document.createElement('label');
  lT2.innerHTML = 'Restaurant EDI 2';
  lT2.htmlFor = 'tab2-2';

  const inT2 = document.createElement('input');
  inT2.setAttribute('id', 'tab2-2');
  inT2.name = 'tabs-two';
  inT2.type = 'radio';

  const divT2 = document.createElement('div');

  const h4Div2 = document.createElement('h4');
  h4Div2.innerHTML = 'Objekti i Ri';

  const pDiv2 = document.createElement('p');
  pDiv2.innerHTML = `Restauranti i ri përbëhet nga tri salla dhe një dhomë private.
  Dy dhomat kryesore ku ju mund të shijoni kafen apo drekën e
  darkën me më të dashurit tuaj. Ndërsa pjesa tjetër private, iu
  ofron komoditet për organizime të ndryshme. Në ditët e ngrohta
  klientët tanë mund të shijojnë ushqimin apo edhe një pije në
  terasën e gjelbëruar e cila posedon 90-të ulëse.`;

  divT2.appendChild(h4Div2);
  divT2.appendChild(pDiv2);

  t2Tabs.appendChild(lT2);
  t2Tabs.appendChild(inT2);
  t2Tabs.appendChild(divT2);

  tabsInfo.appendChild(t1Tabs);
  tabsInfo.appendChild(t2Tabs);

  infoContainer.appendChild(hInfo);
  infoContainer.appendChild(tabsInfo);

  return infoContainer;
};
export default info;
