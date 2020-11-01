const pasedia=document.getElementById("pase_dia");
const pasecompleto=document.getElementById("pase_completo");
const pasedosdias=document.getElementById("pase_dosdias");

const Calcular=document.getElementById("calcular");


Calcular.addEventListener("click",()=>{
    const lista=document.getElementById("lista-productos");
    const sumatotal=document.getElementById("suma-total");

    const preciodia=30;
    const preciocompleto=50;
    const preciodosdias=45;
 

    const totaldia=pasedia.value*preciodia;
    const totalcompleto=pasecompleto.value*preciocompleto;
    const totaldosdias=pasedosdias.value*preciodosdias;
   


    var total=totaldia+totalcompleto+totaldosdias;
    let resumen="";

    if(pasedia.value>0) resumen+="<p>"+pasedia.value+" pases por día: $"+totaldia+"</p>";
    if(pasecompleto.value>0) resumen+="<p>"+pasecompleto.value+" pases Todos los Días: $"+totalcompleto+"</p>";
    if(pasedosdias.value>0) resumen+="<p>"+pasedosdias.value+" pases por Dos días: $"+totaldosdias+"</p>";

    lista.innerHTML=resumen;
    sumatotal.innerHTML="$ "+total;
})

