document.getElementById('imgContainer').addEventListener('mouseover',function(){
    imageZoom("imgProduct");
});


function imageZoom(imgID) {

    

    // debugger;
    let img = document.getElementById(imgID);
    let lens = document.getElementById('lens');
    lens.style.backgroundImage = `url(${img.src})`;
    let ratio =2;
    lens.style.backgroundSize = (img.width * ratio) + "px " + (img.height * ratio) + "px";

    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("touchmove", moveLens);

    function moveLens() {
        let pos = getCursor();

        let positionLeft = pos.x - (lens.offsetWidth / 2);
        let positionTop = pos.y  - (lens.offsetHeight / 2);

        
      

        lens.style.left = positionLeft+"px";
        lens.style.top = positionTop+"px";

        lens.style.backgroundPosition = "-"+(pos.x * ratio)+"px -"+(pos.y * ratio)+"px";
    }

    function getCursor() {
        let e = window.event;
        let bound = img.getBoundingClientRect()
        var a = window.scrollY;
        console.log(e);
        console.log(a);
        let y = e.pageY - bound.top -a;
        let x = e.pageX - bound.left;
        return { 'x': x, 'y': y }
    }
}

imageZoom('imgProduct')



function hover(par)
{
    debugger;
    let mainImg = document.getElementById('imgProduct');
    let temp  = mainImg;
    let switchImg = document.getElementsByClassName('toSwitch').item(par);
    console.log("switch",switchImg);
    mainImg.src = switchImg.src;
}