
//move around the char

const el = document.getElementById('myDropdown');
const charElement = document.getElementById('honey');


el.addEventListener('change', function() {
    if (el.value !== "") {
        charElement.src = el.value + ".png";
        charElement.style.display = "block";
    } else {
        charElement.style.display = "none";
    }
});


let isDrag = false;

function check(event) {
    isDrag = true;
    document.addEventListener("mousemove", char);
}

function stopmoving(event) {
    isDrag = false;
    document.removeEventListener("mousemove", char);
}

function char(event) {
    if (isDrag) {
        charElement.style.left = event.clientX + "px";
        charElement.style.top = event.clientY + "px";
    }
}

charElement.addEventListener("mousedown", check);
window.addEventListener("mouseup", stopmoving);
