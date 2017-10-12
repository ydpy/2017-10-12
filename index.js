document.addEventListener('mouseup',up);
function up(ev){
    document.removeEventListener('mousedown',down);
    document.removeEventListener('mouseup',up);
}