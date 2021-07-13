 //Variables
var canvas, cx, objetos, objetoActual, barra, pos ;
var incioX = 0, incioY = 0, cont=0;
var ropa  = new Image();
var caja  = new Image();
var conRemeras = 0, remeras, total, sumar = false, color=1, r=0, id=1;

var rojo  = new Image();
var naranja  = new Image();
var amarillo  = new Image();
var verde  = new Image();
var azul  = new Image();
var violeta  = new Image();
var velocidad = 1, dificultad=0;
let remerasV = [];
let nivel = [5,10,15,20,25,30];

var segundos = 400;

//sonido
var sonido = new Audio("bounce.mp3");
var error = new Audio("error.mp3");
var gameover = new Audio("game-over.mp3");

const lista = document.getElementById('remera');
const elemento = document.createElement('div');

const lista2 = document.getElementById('reloj');
const elemento2 = document.createElement('div');

ropa.src = "img/amarillo.png";
caja.src = "img/caja.png";






function ColoresRemeras(valor){
   

    color = valor;

    switch(color){
        case 1:
            rojo.src = "img/rojo.png";
            naranja.src = "img/naranja.png";
            amarillo.src = "img/amarillo.png";
            verde.src = "img/verde.png";
            azul.src = "img/azul.png";
            violeta.src = "img/violeta.png";

            remerasV = ["img/rojo.png","img/naranja.png","img/amarillo.png", "img/verde.png", "img/azul.png", "img/violeta.png" ];
            MostrarRopa();
          
           
        break;

        case 2:
            rojo.src = "img/protanopia/rojo.png";
            naranja.src = "img/protanopia/naranja.png";
            amarillo.src = "img/protanopia/amarillo.png";
            verde.src = "img/protanopia/verde.png";
            azul.src = "img/protanopia/azul.png";
            violeta.src = "img/protanopia/violeta.png";

            remerasV = ["img/protanopia/rojo.png","img/protanopia/naranja.png","img/protanopia/amarillo.png", "img/protanopia/verde.png", "img/protanopia/azul.png", "img/protanopia/violeta.png" ];
            MostrarRopa();
          
            break;

        case 3:
            rojo.src = "img/deuteranopia/rojo.png";
            naranja.src = "img/deuteranopia/naranja.png";
            amarillo.src = "img/deuteranopia/amarillo.png";
            verde.src = "img/deuteranopia/verde.png";
            azul.src = "img/deuteranopia/azul.png";
            violeta.src = "img/deuteranopia/violeta.png";

            
            remerasV = ["img/deuteranopia/rojo.png","img/deuteranopia/naranja.png","img/deuteranopia/amarillo.png", "img/deuteranopia/verde.png", "img/deuteranopia/azul.png", "img/deuteranopia/violeta.png" ];
            MostrarRopa();

        break;

        case 4:
            rojo.src = "img/tritanopia/rojo.png";
            naranja.src = "img/tritanopia/naranja.png";
            amarillo.src = "img/tritanopia/amarillo.png";
            verde.src = "img/tritanopia/verde.png";
            azul.src = "img/tritanopia/azul.png";
            violeta.src = "img/tritanopia/violeta.png";

            
            remerasV = ["img/tritanopia/rojo.png","img/tritanopia/naranja.png","img/tritanopia/amarillo.png", "img/tritanopia/verde.png", "img/tritanopia/azul.png", "img/tritanopia/violeta.png" ];
            MostrarRopa();
        break;
    }

   


}






function actualizar(){

    cx.fillStyle = '#09a8f1';
    cx.fillRect(0,0,1000,650);
 
    

    for(var i=1; i < objetos.length; i++){
         
        if(objetos[i].mov){
            objetos[i].x += velocidad;
            if( objetos[i].x > canvas.width){
                objetos[i].x = 0;
            }
           
        }
        
        /*cx.fillStyle = objetos[i].color;
         cx.fillRect(objetos[i].x,objetos[i].y,objetos[i] .width,objetos[i].height) ; */
         cx.drawImage(objetos[i].image,objetos[i].x,objetos[i].y ,objetos[i].width,objetos[i].height  );
    
        
    }

    cx.drawImage(objetos[0].image,objetos[0].x,objetos[0].y ,objetos[0].width,objetos[0].height  );

     
}

function mover(){
    actualizar();
}


function guardar(){

    if(objetoActual.y<=0 ){

        objetos[pos].x = 0;
        objetos[pos].y = 0;
        objetos[pos].mov = true;
    }

    
    if(objetoActual.y >= 400 && objetoActual.x >= 400 &&  objetoActual.x <= 600 && objetoActual.id-1 == r){
        /*alert("paso");*/

        sonido.play();
        incioX = 0;
        incioY = 0;
        objetoActual = null;
        objetos[pos].x = -1000;
        objetos[pos].y = 0;
        objetos[pos].mov = true;
        sumar = true;

    }   
    else if(objetoActual.y >= 400 && objetoActual.x >= 400 &&  objetoActual.x <= 600 && objetoActual.id-1 != r){
        error.play();
    }


    setInterval(validarPunto, 3000);

}

  setInterval(mover, 1);
  setInterval(cuantaRegresiva, 1000);

  




window.onload = function(){



   
    objetos = [];
   canvas = document.getElementById("miCanvas");
   cx = canvas.getContext('2d');
   
   
    ColoresRemeras(color);
 
   //Agregar objetos de prueba
   objetos.push({
    x: -100, y: 500,
    width: 1500, height:150,
    color: 'red',
    image: caja,
    mov: true
   });


   //REMERAS
   objetos.push({
    x: 0, y: 0,
    width: 150, height:200,
    color: 'red',
    image: rojo,
    mov: true,
    id: 1
   });
   objetos.push({
    x: 300, y: 0,
    width: 150, height:200,
    color: 'blue',
    image: naranja,
    mov: true,
    id: 2
   });

   objetos.push({
    x: 600, y: 0,
    width: 150, height:200,
    color: 'red',
    image: amarillo,
    mov: true,
    id: 3
   });
   objetos.push({
    x: 700, y: 0,
    width: 150, height:200,
    color: 'blue',
    image: verde,
    mov: true,
    id: 4
   });

   objetos.push({
    x: 900, y: 0,
    width: 150, height:200,
    color: 'red',
    image: azul,
    mov: true,
    id: 5
   });
   objetos.push({
    x: 980, y: 0,
    width: 150, height:200,
    color: 'blue',
    image: violeta,
    mov: true,
    id: 6
   });

   objetos.push({
    x: 680, y: 0,
    width: 150, height:200,
    color: 'red',
    image: rojo,
    mov: true,
    id: 1
   });
   objetos.push({
    x: 600, y: 0,
    width: 150, height:200,
    color: 'blue',
    image: naranja,
    mov: true,
    id: 2
   });

   objetos.push({
    x: 900, y: 0,
    width: 150, height:200,
    color: 'red',
    image: amarillo,
    mov: true,
    id: 3
   });
   objetos.push({
    x: 380, y: 0,
    width: 150, height:200,
    color: 'blue',
    image: verde,
    mov: true,
    id: 4
   });

   objetos.push({
    x: 80, y: 0,
    width: 150, height:200,
    color: 'red',
    image: azul,
    mov: true,
    id: 5
   });
   objetos.push({
    x: 800, y: 0,
    width: 150, height:200,
    color: 'blue',
    image: violeta,
    mov: true,
    id: 6
   });

 

  
   actualizar();
   MostrarRopa();

   //Funciones para Usar el Mous
      canvas.onmousedown = function(event){
       for(var i=1; i < objetos.length; i++){
           if(objetos[i].x <= event.clientX && (objetos[i].width + objetos[i].x >= event.clientX) &&
              objetos[i].y <= event.clientY && (objetos[i].width + objetos[i].y >= event.clientY)){
                pos = i;
                objetos[i].mov = false;
                id = objetos[i].id;
                objetoActual = objetos[i];
                incioY = event.clientY - objetos[i].y;
                incioX = event.clientX - objetos[i].x;
                console.log(incioX);
              

               break;
           }
        }
      };

      canvas.onmousemove = function(event){
          if(objetoActual != null){
              objetoActual.x = event.clientX - incioX;
              objetoActual.y = event.clientY - incioY;
              actualizar();
              guardar();
          }
          
      };


      canvas.onmouseup = function(event){
          objetoActual = null;
      };

};


function validarPunto(){
    if(sumar){
        sumar = false;
        elemento.innerHTML = "";
        SumarPunto(true);
        MostrarRopa();
    }

    else{
        SumarPunto(false);
    }
}


function SumarPunto(valor){
    if(valor){
       
        conRemeras++;
        if(conRemeras >= total ){
            r++;
               if(conRemeras==30){
               alert("GANASTE REY, Tu tiempo fue de: "+segundos);
               window.location.href='http://wolftech.space/gotogamejam-Equipo-11-Mandalorians'; 
               }
            conRemeras = 0;
        }

     


    }
}





function MostrarRopa(){

    

    total = nivel[r];

    elemento.innerHTML = `
        
    <div class="remera-a-guardar">
        
         <span id="contador">${total}/${conRemeras}</span> <br>
         <img src="${remerasV[r]}" alt="">
        

        </div>
    `;

    lista.appendChild(elemento);
}


function tiempo(){



    elemento2.innerHTML = `
    <div class="tiempo">
    <span>${segundos}s</span>
    </div>  
    `;

    lista2.appendChild(elemento2);
}



function cuantaRegresiva(){
   
         if(segundos!=0){
            segundos--;
            dificultad ++;

            if(dificultad ==120 && velocidad>=4){
                velocidad++;
                dificultad = 0;
                console.log(velocidad);
            }

            tiempo();
         }

         else{
            gameover.play();
             alert("GAME OVER");
             window.location.href='http://wolftech.space/gotogamejam-Equipo-11-Mandalorians'; 
         }
       
}



///Configuracion

const menu =     document.getElementById("configuarar");

$(".abrir").click(function(){
  
    menu.style.left = '0';
    menu.style.transition = '1s';
});

$(".cerrar").click(function(){
  
    menu.style.left = '-800px';
    menu.style.transition = '1s';
});


$(".op1").click(function(){
  
    ColoresRemeras(1);
});


$(".op2").click(function(){
  
    ColoresRemeras(2);
});


$(".op3").click(function(){
  
    ColoresRemeras(3);
});


$(".op4").click(function(){
  
    ColoresRemeras(4);
});





