const aboutSection = () => {
  const base = document.querySelector('#content');

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('content-about');

  const aboutHeading = document.createElement('h2');
  aboutHeading.innerText = 'Për ne';

  const aboutRowContainer = document.createElement('div');
  aboutRowContainer.classList.add('about_short');
  aboutRowContainer.innerText = `Restaurant Edi 2 një vend i tretë në mes të punës dhe
      shtëpisë.<br><br>
      Tek ne ku ushqimi shijon më së miri…
      <br><br>
      Jemi mësuar që gjithmonë ta dëgjojmë fjalën NDRYSHE. Ne nuk
      duam të jemi ndryshe ne duam që të sjellim kualitet. Që të
      ofrojmë më të veqantën për klientët tanë nuk është gjithmonë e
      lehtë, kërkon përkushtim por asnjëherë nuk është lodhje për
      ne. Qysh në fillim ka qenë e rëndësishme që të funksionojmë me
      seriozitet. Ajo ka bërë që si familje të gjithë të
      përkushtohemi maksimalisht.<br><br>`;

  aboutContainer.appendChild(aboutHeading);
  aboutContainer.appendChild(aboutRowContainer);
  base.appendChild(aboutContainer);
};
export default aboutSection;
