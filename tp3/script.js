const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let pictures=[
    'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
    'https://www.letelegramme.fr/images/2022/03/13/n3f-maintien-en-vue-pour-les-quimperoises_6246639_360x235.jpg?v=1',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTST04jQ_K2qMAQEmwWOL6Ts5dXujNfnobLwQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WKnkJBz4T-jXyI7Ay9fhvVqU1U8BKHJ7rw&usqp=CAU',
    'https://wallpaper.dog/large/20383536.jpg'
];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}
sliderInterval = setInterval(moveRight, 5000);
const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
img.addEventListener('mouseover', function(){
    //img.style.transform="scale(1.3)";
    alert('po');
});