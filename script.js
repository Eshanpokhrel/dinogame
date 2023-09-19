const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let score = 0;
function jump(){
    if(dispatchEvent.classList!="jump"){
        dino.classList.add("jump");
        setTimeout(function(){
            dino.classList.remove("jump");
            score++;
            document.getElementById("scoreCard").textContent = `Score: ${score}`;
        },1000)
    }
}

let checkAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143){
        dino.style.animationPlayState = 'paused';
        cactus.style.animationPlayState = 'paused';
        alert("Game Over!!!");
        window.location.reload();
    }

},10);
document.addEventListener("keydown",function(event){
    jump();
})
