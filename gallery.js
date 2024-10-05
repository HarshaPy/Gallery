var allImg = document.images;
for(i=0;i<=allImg.length-1;i++){
    allImg[i].src = `${i}.jpg`
    allImg[i].addEventListener("click",function(){
        document.getElementById("BigWindow").style.display="flex"
document.getElementById("bigImage").style.backgroundImage = `URL(${this.src})`
    })
}

function bigWindowClose(){
    document.getElementById("BigWindow").style.display = "none"
}