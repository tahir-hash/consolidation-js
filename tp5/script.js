const contain =document.querySelector('.contain');
const header =document.querySelector('header');
const form =document.querySelector('form');
const movies_container =document.querySelector('.movies_container');
const recherche =document.querySelector('.recherche');
var search =document.querySelector('header input');
const loader=document.querySelector(".loader");
const loading=document.querySelector(".loading");
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

function genererElements(tab)
{
  const subcontain=document.createElement('div');
  subcontain.setAttribute('class', 'subcontain');
  const text_img=document.createElement('div');
  text_img.setAttribute('class', 'text_img');
  const img=document.createElement('img');
  img.src=IMGPATH+tab.poster_path;
  const text=document.createElement('div');
  text.setAttribute('class', 'text');
  const h2 =document.createElement('h2');
  const p=document.createElement('p');
  const title=document.createElement('div');
  title.setAttribute('class', 'title');
  const h21 =document.createElement('h2');
  const span=document.createElement('span');
  h2.innerText='Overview';
  p.innerText= tab.overview;
  h21.innerText=tab.original_title;
  span.innerText=tab.vote_average;
  //append

  text.appendChild(h2);
  text.appendChild(p);
  text_img.appendChild(img);
  text_img.appendChild(text);
  title.appendChild(h21);
  title.appendChild(span);
  subcontain.appendChild(text_img);
  subcontain.appendChild(title);
  movies_container.appendChild(subcontain);
  contain.appendChild(movies_container);

  img.addEventListener('mouseover', function(){
    text.classList.add('hover');
    text_img.classList.add('hover');

  });
  img.addEventListener('mouseleave', function(){
    text.classList.remove('hover');
    text_img.classList.remove('hover');

  });

}
//load

//
  movies(APIURL)
/* function movies(url)
{
  async function asy()
  {
    await fetch(url).then(response => await response.json().then(data => {
      data.results.forEach(element => {
        genererElements(element);
        console.log(element)
      });
    })); 
  }
  asy()
} */
function movies(url)
{
  async function asy()
  {
    let reponse =await fetch(url);
    let data =await reponse.json();
    console.log(data);
    data.results.forEach(element => {
      genererElements(element);
    });
  } 
  asy()
  window.addEventListener('load', ()=>{
    movies(APIURL);
    loader.classList.add('hidden');
  })
}
  //recherche
search.addEventListener('keyup', function(){
  if(search.value!="")
  {
    movies_container.innerHTML="";
   // movies_container.classList.add('search');
    //recherche.classList.add('search');
    let SEARCHAPI =
    `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search.value}`;
      movies(SEARCHAPI);
  }
  else
  {
    movies_container.innerHTML="";
    movies(APIURL)
  }
});

/* btn.addEventListener('click', ()=>
{
  i=i+1;
  console.log(i)
  var test=
  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${i}`;
  movies(test);
}); */

window.addEventListener('load', ()=>{
  movies(APIURL);
  loader.classList.add('hidden');
})