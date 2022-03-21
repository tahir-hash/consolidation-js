const contain =document.querySelector('.contain');
const header =document.querySelector('header');
const search =document.querySelector('header input');
const favorites =document.querySelector('.favorites');
const img_favorites =document.querySelector('.favorites img');
const text_favorites =document.querySelector('.favorites h2');
const recettes =document.querySelector('.recettes');
const modal =document.querySelector('.modal');
const close=document.getElementById('close')

var generator="https://www.themealdb.com/api/json/v1/1/random.php"

function genererElements(tab)
{
  const img_rec=document.createElement('div');
  const affiche_rec =document.createElement('div');
  affiche_rec.setAttribute('class', 'affiche_rec')
  img_rec.setAttribute('class', 'img_rec');
  const img=document.createElement('img');
  img.src=tab.strMealThumb;
  const button=document.createElement('button');
  button.setAttribute('type', 'button');
  const title_rec =document.createElement('div');
  title_rec.setAttribute('class', 'title_rec');
  const h2=document.createElement('h2');
  const i= document.createElement('i');
  i.setAttribute('class','fa-regular fa-heart fa-2x test');
  button.innerText='Generer une Recette';
  button.setAttribute('id', 'button')
  h2.innerText= tab.strMeal;
  //append

  img_rec.appendChild(img);
  title_rec.appendChild(h2);
  title_rec.appendChild(i);
  affiche_rec.appendChild(img_rec);
  affiche_rec.appendChild(button);
  affiche_rec.appendChild(title_rec);
  recettes.appendChild(affiche_rec);
  //generer
  button.addEventListener('click', function(){
    window.location.reload();
  });  
  //modal
  i.addEventListener('click',()=>{
    modal.classList.add('show');
    pop_up(tab);
    
  });

}
//pop up
function pop_up(tab)
{
  var titre =document.querySelector('.titre h2');
  titre.innerText= tab.strMeal;
  var img_mod=document.querySelector('.img_contain__rec img');
  img_mod.src=tab.strMealThumb;
  var paragraphe=document.querySelector('.description p');
  paragraphe.innerText=tab.strInstructions;
  var ul=document.querySelector('.ing ul');
  for(var i=1 ; i<=20; i++)
  {
    var li=document.createElement('li');
    li.innerText=tab.strIngredient+i;
    ul.appendChild(li);
  }
  
}
rechercher_food(generator);
///
search.addEventListener('keyup', function(){
  if(search.value!="")
  {
    recettes.innerHTML="";
    recettes.classList.add('hide');
    let SEARCHAPI =
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`;
    rechercher_food(SEARCHAPI);
    

  }
  else
  {
    recettes.innerHTML="";
    recettes.classList.remove('hide');
    rechercher_food(generator)
  }
});
//recherche
function rechercher_food(url)
{
  fetch(url).then(response => response.json().then(data => {
    data.meals.forEach(element => {
      genererElements(element);
    }); 
  })); 
}

close.addEventListener('click', ()=>{
  modal.classList.add('remove');
  modal.classList.remove('show');

})
const tr= document.querySelectorAll('.test')
tr.forEach(element => {
  element.addEventListener('click',()=>
  {
    modal.classList.add('show');
    pop_up(tab);
  })
});