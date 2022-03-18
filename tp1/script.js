const button =document.querySelectorAll('button');
//
button.forEach(element => {
    element.addEventListener('click',()=>
    {
        const notif =document.querySelector('.notification');
        const div =document.createElement('div');
        const p=document.createElement("p");
        p.innerText="TAHIR";
        test=window.getComputedStyle(element);
        console.log(test);
        div.style.backgroundColor= test.backgroundColor
        div.appendChild(p);
        notif.appendChild(div);
        setTimeout(() => {
            notif.removeChild(div)
        }, 1000);
    })
});