var box = document.querySelector('.box');
box.addEventListener('mousedown',down);
function down(ev){
    var starX = ev.clientX - box.offsetLeft;
    var starY = ev.clientY - box.offsetTop;
}