import imageLogo from '../img/edi2logo4.png';

const header = () => {
  const base = document.querySelector('#content');

  const headerContainer = document.createElement('div');
  headerContainer.setAttribute('id', 'content-header');

  const lHeader = document.createElement('div');
  lHeader.setAttribute('id', 'header-left');

  const rHeader = document.createElement('div');
  rHeader.setAttribute('id', 'header-right');

  const logoHeader = document.createElement('div');
  logoHeader.setAttribute('id', 'logo');

  const imgLogo = document.createElement('img');
  imgLogo.src = imageLogo;

  logoHeader.appendChild(imgLogo);
  headerContainer.appendChild(lHeader);
  headerContainer.appendChild(rHeader);
  headerContainer.appendChild(logoHeader);

  base.appendChild(headerContainer);
};
export default header;
