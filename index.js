box.addEventListener('mousemove',move);
function move(ev){
    box.style.marginLeft = ev.clientX - starX;
    box.style.marginTop = ev.client - starY;
}