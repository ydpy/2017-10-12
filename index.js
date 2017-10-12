            
var box = document.querySelector('.box');
box.addEventListener('mousedown',down);
function down(ev){
    var starX = ev.clientX - box.offsetLeft;
    var starY = ev.clientY - box.offsetTop;

    document.addEventListener('mousemove',move);
    function move(ev){
        box.style.marginLeft = ev.clientX - starX;
        box.style.marginTop = ev.client - starY;
    }
    document.addEventListener('mouseup',up);
    function up(ev){
        document.removeEventListener('mousedown',down);
        document.removeEventListener('mouseup',up);
    }
}