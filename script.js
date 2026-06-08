function openBook(){

    document.querySelector(".cover").style.display="none";

    document.getElementById("content").style.display="block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

function celebrate(){

    confetti({
        particleCount:250,
        spread:180,
        origin:{
            y:0.6
        }
    });

}
function openLetter(id){

    let surat = document.getElementById(id);

    if(surat.style.display === "block"){
        surat.style.display = "none";
    }else{
        surat.style.display = "block";
    }

}