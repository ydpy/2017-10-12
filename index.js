
var box = document.querySelector('.box');
box.addEventListener('mousedown',down);
function down(ev){
    var starX = ev.clientX - box.offsetLeft;
    var starY = ev.clientY - box.offsetTop;
    document.addEventListener('mousemove',move);
    function move(ev){
        box.style.left = ev.clientX - starX + "px";
        box.style.top = ev.clientY - starY + "px";
    }
    document.addEventListener('mouseup',up);
    function up(ev){
        document.removeEventListener('mousemove',move);
        document.removeEventListener('mouseup',up);
    }
}