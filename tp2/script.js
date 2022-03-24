var menu =[
    {
        "img_name":"fa-solid fa-gauge fa-2x",
        "name_menu": "Dashboard",
        "deplier":"",
        "deplier1":"",
        "sousMenu":[],
        "new":"fa-solid fa-barcode fa-2x",
        "number":""
    },
    {
        "img_name":"fa-solid fa-file fa-2x",
        "name_menu": "Layout",
        "deplier":"",
        "deplier1":"",
        "sousMenu":[],
        "new":"",
        "number":""
    },
    {
        "img_name":"fa-solid fa-barcode fa-2x",
        "name_menu": "Widgets",
        "deplier":"",
        "deplier1":"",
        "sousMenu":[],
        "new":"",
        "number":"fa-solid fa-6 fa-2x"
    },
    {
        "img_name":"fa-solid fa-chart-pie fa-2x",
        "name_menu": "Charts",
        "deplier":"fa-solid fa-arrow-down-long fa-2x",
        "deplier1":"fa-solid fa-arrow-left fa-2x close",
        "sousMenu":[
            {
                "img_name":"fa-solid fa-circle fa-2x sous",
                "name_menu": "ChartJS",
                "deplier":"",
                "deplier1":"",
                "sousMenu":[],
                "new":"",
                "number":""
            },
            {
                "img_name":"fa-solid fa-circle fa-2x sous",
                "name_menu": "Flot",
                "deplier":"",
                "deplier1":"",
                "sousMenu":[],
                "new":"",
                "number":""
            },
            {
                "img_name":"fa-solid fa-circle fa-2x sous",
                "name_menu": "Inline",
                "deplier":"",
                "deplier1":"",
                "sousMenu":[],
                "new":"",
                "number":""
            },
            {
                "img_name":"fa-solid fa-circle fa-2x sous",
                "name_menu": "Uplot",
                "deplier":"",
                "deplier1":"",
                "sousMenu":[],
                "new":"",
                "number":""
            }
        ],
        "new":"",
        "number":""
    },
    {
        "img_name":"fa-solid fa-tree fa-2x",
        "name_menu": "UI ELEMENT",
        "deplier":"",
        "deplier1":"",
        "sousMenu":[],
        "new":"",
        "number":""
    },
    {
        "img_name":"fa-solid fa-file fa-2x",
        "name_menu": "Forms",
        "deplier":"",
        "deplier1":"",
        "sousMenu":[],
        "new":"",
        "number":""
    },
    {
        "img_name":"fa-solid fa-table fa-2x",
        "name_menu": "Tables",
        "deplier":"fa-solid fa-arrow-down-long fa-2x",
        "deplier1":"fa-solid fa-arrow-left fa-2x close",
        "sousMenu":[
            {
                "img_name":"fa-solid fa-circle fa-2x sous",
                "name_menu": "table1",
                "deplier":"",
                "deplier1":"",
                "sousMenu":[],
                "new":"",
                "number":""
            },
            {
                "img_name":"fa-solid fa-circle fa-2x sous",
                "name_menu": "table2",
                "deplier":"",
                "deplier1":"",
                "sousMenu":[],
                "new":"",
                "number":""
            },
            {
                "img_name":"fa-solid fa-circle fa-2x sous",
                "name_menu": "table3",
                "deplier":"",
                "deplier1":"",
                "sousMenu":[],
                "new":"",
                "number":""
            },
            {
                "img_name":"fa-solid fa-circle fa-2x sous",
                "name_menu": "table4",
                "deplier":"",
                "deplier1":"",
                "sousMenu":[],
                "new":"",
                "number":""
            }
        ],
        "new":"",
        "number":""
    }
]
//declaration
const nav =document.querySelector('.nav');
const input = document.querySelector('.search')
const ul= document.querySelector(".menu");
const open=document.getElementById('open');
const close=document.getElementById('close');
const sub=document.querySelector(".sub");
const burger =document.querySelector('.burger img');

 burger.addEventListener('click', function()
 {  
     input.classList.toggle('hide');
     nav.classList.toggle('hide');
 });

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
    const li =document.createElement('li');
    li.setAttribute('class','first');
    firsti= document.createElement('i');
    firsti.setAttribute("class",element.img_name );
    const p=document.createElement('p');
    p.innerText=element.name_menu;
    const small=document.createElement('small');
    const span =document.createElement('span');
    span.setAttribute("class","derou");
    secondi= document.createElement('i');
    secondi.setAttribute("class",element.deplier);
    second1= document.createElement('i');
    second1.setAttribute("class",element.deplier1);
    thirdi= document.createElement('i');
    thirdi.setAttribute("class",element.new );
    fouri= document.createElement('i');
    fouri.setAttribute("class",element.number );
    const ul1= document.createElement('ul');
    ul1.setAttribute('class',"sub");

  
    //apend
    
    li.appendChild(firsti);
    li.appendChild(p);
    small.appendChild(thirdi);
    small.appendChild(fouri);
    li.appendChild(small);
    span.appendChild(secondi);
    span.appendChild(second1);
    li.appendChild(span);
    //ul1.appendChild(sous(element.sousMenu,ul1))
    ul.appendChild(li);
    element.sousMenu.forEach(element => {
        generate(element);
    });
    //event
    secondi
}

/* const ul1=document.createElement('ul');
        const li1 =document.createElement('li');
        firsti1= document.createElement('i');
        firsti1.setAttribute("class",sub.img_name );
        const p1=document.createElement('p');
        p1.innerText=sub.name_menu;
        li1.appendChild(firsti1);
        li1.appendChild(p1);
        ul1.appendChild(li1) */