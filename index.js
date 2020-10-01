const parent = document.getElementById("wrapper");

for (let i = 1; i < 11; i++) {
    const child = `<div class="child"><p>${i}</p> </div>`
    parent.innerHTML += child;
}

const box = document.getElementsByClassName("child");

const switchFunc = (el) => {
    const idx = el.firstChild.innerHTML
    el.addEventListener("click", () => {
        if (el.style.backgroundColor === "" || el.style.backgroundColor === "black") {
            el.style.backgroundColor = "blue";
            el.firstChild.innerHTML = `Turning ON ${idx}`;
        } else {
            el.style.backgroundColor = "black";
            el.firstChild.innerHTML = `Turning OFF ${idx}`;
        }
    })
}

for (let z = 0; z < box.length; z++) {
    switchFunc(box[z]);
}
