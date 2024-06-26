const b1 = document.getElementsByClassName("card");

for(let i=0;i<b1.length;i++){
    b1[i].addEventListener("mouseover", function(){
        const p = this.querySelector("p");
        p.style.zIndex = +2;
    });
    b1[i].addEventListener("mouseout", function(){
        const p = this.querySelector("p");
        p.style.zIndex = -2;
    });
}