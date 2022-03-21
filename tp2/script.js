var menu =[
    {
        "img_name":"fa-solid fa-gauge fa-2x",
        "name_menu": "Dashboard",
        "deplier":"",
        "sousMenu":[],
        "new":"fa-solid fa-barcode fa-2x",
        "number":""
    },
    {
        "img_name":"fa-solid fa-file fa-2x",
        "name_menu": "Layout",
        "deplier":"",
        "sousMenu":[],
        "new":"",
        "number":""
    },
    {
        "img_name":"fa-solid fa-barcode fa-2x",
        "name_menu": "Widgets",
        "deplier":"",
        "sousMenu":[],
        "new":"",
        "number":"fa-solid fa-6 fa-2x"
    },
    {
        "img_name":"fa-solid fa-chart-pie fa-2x",
        "name_menu": "Charts",
        "deplier":"fa-solid fa-arrow-down-long fa-2x",
        "sousMenu":[
            {
                "img_name":"fa-solid fa-circle fa-2x",
                "name_menu": "ChartJS"
            },
            {
                "img_name":"fa-solid fa-circle fa-2x",
                "name_menu": "Flot"
            },
            {
                "img_name":"fa-solid fa-circle fa-2x",
                "name_menu": "Inline"
            },
            {
                "img_name":"fa-solid fa-circle fa-2x",
                "name_menu": "Uplot"
            }
        ],
        "new":"",
        "number":""
    },
    {
        "img_name":"fa-solid fa-tree fa-2x",
        "name_menu": "UI ELEMENT",
        "deplier":"",
        "sousMenu":[],
        "new":"",
        "number":""
    },
    {
        "img_name":"fa-solid fa-file fa-2x",
        "name_menu": "Forms",
        "deplier":"",
        "sousMenu":[],
        "new":"",
        "number":""
    },
    {
        "img_name":"fa-solid fa-table fa-2x",
        "name_menu": "Tables",
        "deplier":"",
        "sousMenu":[],
        "new":"",
        "number":""
    }
]
const p =document.querySelectorAll('p');
const nav =document.querySelector('.nav');
const input = document.querySelector('.search')

 const burger =document.querySelector('.burger img')
 burger.addEventListener('click', function()
 {  
     input.classList.toggle('hide');
     nav.classList.toggle('hide');
 });
 const lien= document.querySelector(".menu");
 const fleche=document.getElementById('derou');
 const open=document.getElementById('open');
 const close=document.getElementById('close');
 const sub=document.querySelector(".sub");
 /* fleche.addEventListener('click', function(){
    
     sub.classList.toggle('hide');
    
 }); */

 //creation de menu
 function load(menu)
{
        menu.forEach(element => {
            generate(element);
        });
};
load(menu);
function generate (element)
{
            const div=document.createElement('div');
            div.setAttribute("class", "menu-gen");
            const li=document.createElement('li');
            firsti= document.createElement('i');
            firsti.setAttribute("class",element.img_name );
            const p=document.createElement('p');
            p.innerText=element.name_menu;
            const span =document.createElement('span');
            span.setAttribute("class","span");
            const span1 =document.createElement('span');
            span1.setAttribute("class","span1");
            secondi= document.createElement('i');
            secondi.setAttribute("class",element.deplier );
            thirdi= document.createElement('i');
            thirdi.setAttribute("class",element.new );
            fouri= document.createElement('i');
            fouri.setAttribute("class",element.number );
            //apendchild
            div.appendChild(li);
            li.appendChild(firsti);
            li.appendChild(p);
            li.appendChild(span);
            span.appendChild(secondi);
            lien.appendChild(div);
}