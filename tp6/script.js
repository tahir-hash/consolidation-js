const contain =document.querySelector('.contain');
const header =document.querySelector('header');
const search =document.querySelector('header input');
const icones_search=document.querySelector('header i');
const favorites =document.querySelector('.favorites');
const img_favorites =document.querySelector('.favorites img');
const text_favorites =document.querySelector('.favorites h2');
const recettes =document.querySelector('.recettes');
const modal =document.querySelector('.modal');

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
  const titre =document.createElement('div');
  titre.setAttribute('class','titre');
  const h2 =document.createElement('h2');
  h2.innerText= tab.strMeal;
  const close=document.createElement('button');
  close.setAttribute('type','button');
  close.innerText="x";
  const contain_rec=document.createElement('div');
  contain_rec.setAttribute('class','contain_rec')
  const img_contain__rec=document.createElement('div');
  img_contain__rec.setAttribute('class','img_contain__rec');
  const image=document.createElement('img');
  image.src=tab.strMealThumb;
  const description=document.createElement('div');
  description.setAttribute('class','description');
  var paragraphe=document.createElement('p');
  paragraphe.innerText=tab.strInstructions;
  const ing=document.createElement('div');
  ing.setAttribute('class','ing');
  const ing_title=document.createElement('h1');
  ing_title.innerText="Ingredients:";
  const ol=document.createElement('ol');
  for(var cpt=1; cpt<=20; cpt++)
  {
    if(tab['strIngredient'+cpt]!=='')
    {
      const li=document.createElement('li');
      li.innerText=tab['strIngredient'+cpt];
      ol.appendChild(li)
    }
  }
  //append
  titre.appendChild(h2);
  titre.appendChild(close);
  img_contain__rec.appendChild(image);
  description.appendChild(paragraphe);
  ing.appendChild(ing_title);
  ing.appendChild(ol);
  contain_rec.appendChild(img_contain__rec);
  contain_rec.appendChild(description);
  contain_rec.appendChild(ing);
  modal.appendChild(titre);
  modal.appendChild(contain_rec);
  //append
  close.addEventListener('click', ()=>{
    modal.classList.remove('show');
   modal.innerHTML="";
  })
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