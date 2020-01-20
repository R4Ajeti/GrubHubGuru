import imageFb from '../img/fb.png';

const contact = () => {
  const base = document.querySelector('#content');

  const contactContainer = document.createElement('div');

  const mapContainer = document.createElement('div');
  mapContainer.setAttribute('id', 'map_container');

  const hMap = document.createElement('h3');
  hMap.innerHTML = 'Ne gjendemi këtu';

  const addrMap = document.createElement('address');
  addrMap.innerHTML =
    'Adresa: M9 Eqrem Çabej, Prishtinë,<br>10 000 Prishtinë, Kosovë';

  mapContainer.appendChild(hMap);
  mapContainer.appendChild(addrMap);

  const reserContainer = document.createElement('div');
  reserContainer.setAttribute('id', 'reservation');

  const hReser = document.createElement('h3');
  hReser.innerHTML = 'Kontakt / Info për rezervim';

  const pReser = document.createElement('p');
  pReser.innerHTML = '+383 49 373 838';
  const br1 = document.createElement('br');
  const a1 = document.createElement('a');
  a1.href = 'mailto:info-edi2@gmail.com';
  a1.classList.add('stdA');
  a1.innerHTML = 'info-edi2@gmail.com';
  const br2 = document.createElement('br');
  const a2 = document.createElement('a');
  a2.href = '#';
  a2.classList.add('stdA');
  a2.innerHTML = 'Më Shumë';
  a2.target = '_blank';

  pReser.appendChild(br1);
  pReser.appendChild(a1);
  pReser.appendChild(br2);

  reserContainer.appendChild(hReser);
  reserContainer.appendChild(pReser);

  const socialContainer = document.createElement('div');
  socialContainer.setAttribute('id', 'social');

  const ulSocial = document.createElement('ul');
  ulSocial.classList.add('social');

  const liUl1 = document.createElement('li');

  const aLi1 = document.createElement('a');
  aLi1.href = '#';
  aLi1.classList.add('fb_btn');

  const imgA1 = document.createElement('img');
  imgA1.src = imageFb;

  aLi1.appendChild(imgA1);
  liUl1.appendChild(aLi1);

  const liUl2 = document.createElement('li');

  const aLi2 = document.createElement('a');
  aLi2.href = '#';
  aLi2.classList.add('comments_btn', 'stdA');
  aLi2.innerHTML = 'Sugjerimet tuaja';

  liUl2.appendChild(aLi2);
  ulSocial.appendChild(liUl1);
  ulSocial.appendChild(liUl2);
  socialContainer.appendChild(ulSocial);

  contactContainer.appendChild(mapContainer);
  contactContainer.appendChild(reserContainer);
  contactContainer.appendChild(socialContainer);
  return contactContainer;
};
export default contact;
