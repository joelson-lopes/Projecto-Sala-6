function vermais(){
    let pontos = document.getElementById("pontos");
    let mais = document.getElementById("mais");
    let btnVermais = document.getElementById("btnVerMais");


    if(pontos.style.display === "none"){
        pontos.style.display="flex";
        mais.style.display="none";
        btnVermais.innerHTML="Ver mais";


    }else{
        pontos.style.display="none";
        mais.style.display="flex";
        pontos.style.display= "flex-wrap:wrap;"
        btnVermais.innerHTML="Ver menos";
    }
}