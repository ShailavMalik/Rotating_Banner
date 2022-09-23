let imgStatus = 1;

let width;

function myFunction(x) {
    if (x.matches) {
        width = document.body.clientWidth + "px";
    }

    else {
        width = "1000px";
    }
}

let mmObj = window.matchMedia("(max-width:1000px)");


myFunction(mmObj);

onresize=location.reload;

function rotateBanner() {
    if (imgStatus === 1) {
        document.querySelector(".bannerImg2").style.zIndex = "-1";
        document.querySelector(".bannerImg1").style.zIndex = "1";
        document.querySelector(".bannerImg3").style.zIndex = "1";
        /* Image which is going to come from last position to first position 
          should have least index as it have to cross other two images and  it  should 
          not be visible to user while going from last position to first position 
        */

        this.setTimeout(function () {
            document.querySelector(".bannerImg1").style.right = "0";
            document.querySelector(".bannerImg2").style.right = '-' + width;
            document.querySelector(".bannerImg3").style.right = width;
            imgStatus = 2;
        }, 1000);
    }

    else if (imgStatus === 2) {
        document.querySelector(".bannerImg3").style.zIndex = "-1";
        document.querySelector(".bannerImg1").style.zIndex = "1";
        document.querySelector(".bannerImg2").style.zIndex = "1";

        this.setTimeout(function () {
            document.querySelector(".bannerImg1").style.right = width;
            document.querySelector(".bannerImg2").style.right = "0";
            document.querySelector(".bannerImg3").style.right = '-' + width;
            imgStatus = 3;
        }, 1000);
    }

    else if (imgStatus === 3) {
        document.querySelector(".bannerImg3").style.zIndex = "1";
        document.querySelector(".bannerImg1").style.zIndex = "-1";
        document.querySelector(".bannerImg2").style.zIndex = "1";

        this.setTimeout(function () {
            document.querySelector(".bannerImg1").style.right = '-' + width;
            document.querySelector(".bannerImg2").style.right = width;
            document.querySelector(".bannerImg3").style.right = "0";
            imgStatus = 1;
        }, 1000);
    }
}

setInterval(rotateBanner, 4000);

