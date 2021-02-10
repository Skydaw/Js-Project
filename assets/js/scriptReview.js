// Initilisation des données nécéssaires
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  const author = document.querySelector('.name')
  const job = document.querySelector('.job')
  const text = document.querySelector('.text_review')
  const image = document.querySelector('.portrait')

let currentReview = 0;

// action au chargement de la page 
window.addEventListener("DOMContentLoaded",()=>{
    const review = reviews[currentReview];
    image.src = review.img;
    author.innerText = review.name.toUpperCase(0);
    job.innerText = review.job;
    text.innerText = review.text;
})

// Fonction changement de commentaire

function showPerson(person){
    const review = reviews[person];
    image.src = review.img;
    author.innerText = review.name.toUpperCase();

    job.innerText = review.job;
    text.innerText = review.text;
}
// Fonction next personne pour boutton et automatique
function nextPerson(){
    const longueur=reviews.length -1;
    console.log(longueur);
    currentReview++;
    if(currentReview<=longueur){
        showPerson(currentReview)
    }
    else{
        currentReview=0;
        showPerson(currentReview)
    }
}


// variable des bouttons
  const next =document.querySelector('.btn_after')
  const before = document.querySelector('.btn_before')
  const random = document.querySelector('.btn_random')


  
//Event boutton next
  next.addEventListener("click",()=>{
    nextPerson()
  })
  //Defilement automatique
  window.setInterval(nextPerson,8000)

//Event boutton before
  before.addEventListener("click",()=>{
    const longueur=reviews.length -1;
    currentReview--;
    if(currentReview>=0){
        showPerson(currentReview)
    }
    else{
        currentReview=longueur;
        showPerson(currentReview)
    }
  })
  
//Event boutton radom
  random.addEventListener("click",()=>{
      console.log('yop')
      let currentRandom= Math.floor(Math.random()*reviews.length)
      while(currentRandom==currentReview){
        currentRandom= Math.floor(Math.random()*reviews.length)
      }
      currentReview = currentRandom
      showPerson(currentReview)

  })





