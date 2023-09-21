const team = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg' 
  },

  {
    nome: 'Angela Caroll'	,
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg '
  },

  {
    nome: 'Walter Gordon' ,
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg' 
  },

  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'
  },

 {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg'
  },

  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
  },
 
];
 console.log(team[0].nome)
 console.log(team[0].ruolo)
 console.log(team[0].foto)

 for (const utente of team){

  console.log(utente.nome);
  console.log(utente.ruolo);
  console.log(utente.foto);
  
const colonnaCard = document.querySelector('.row');
 colonnaCard.innerHTML +=

  `<div class="col mt-4">
  <div class="card border border-0 radius text-center " style="width: 18rem;">
    <img src="img/${utente.foto }" class="card-img-top radius" alt="...">
    <div class="card-body">
      <h5 class="card-title">${utente.nome}</h5>
      <p class="card-text">${utente.ruolo}</p>
    </div>
  </div>
</div>`

 }