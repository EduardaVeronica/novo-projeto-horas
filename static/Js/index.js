function horario () {
  let msg = document.getElementById('msg');
  let img = document.getElementById('img');
  let turno = document.getElementById('turno')
  let data =  new Date ();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segun = data.getSeconds(); 

  msg.innerHTML = `<strong>  ${hora}:${minuto}:${segun}</strong> `;
     if ( hora >= 0 && hora < 12){
        
              // BOM DIA//
        turno.innerText = " Bom Dia! ";
        turno.style.font = "25pt Italic";
        img.src = '../templates/img/bomdia.jpg';
        document.body.style.background = '#a4d3bc';
        
    } else if (hora >= 12 && hora < 18) { 
        
             // BOA TARDE // 
        turno.innerText = " Boa Tarde! " ;
        turno.style.font = "25pt Italic";
        img.src = '../templates/img/tarde.jpg';
        document.body.style.background = '#997a4e';
;
    } else {
         
                // BOA NOITE //
        turno.innerText = " Boa Noite! " ;
        turno.style.font = "25pt Italic";
        img.src = '../templates/img/boanoite.jpg';
        document.body.style.background= '#060606';
    }  

    //
    const timer=setInterval(horario,1000);
}

