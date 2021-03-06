'use strict';

let i = 0;
const nombreC = $('#name-coder');
const comprobar = $('#btn-comprobar');
let puntos = 0;

$("select").on("change", (e) => {
  e.preventDefault();
  const option = $('#select').val();
  if(option == "peru"){
    $('#photos-Mexico').addClass("none");
    $('#photos-Peru').toggleClass("none");
  }else {
    $('#photos-Peru').addClass("none");
    $('#photos-Mexico').toggleClass("none");
  }
})


$(function(){
   const photoPeru= $('#photos-Peru');
   const coderDiv = $('<div class="coderDiv col-md-pull-12"></div>');
   const img = $('<img class="photo-coder col-md-12"></img>');
     img.attr("src", 'assets/fotos/peru/' + peru[i].image);
     img.attr("alt",peru[i].name);
     photoPeru.append(coderDiv);
     coderDiv.append(img);

     comprobar.on('click',(e) => {
       e.preventDefault();
       if(nombreC.val().toLowerCase() == peru[i].name.toLowerCase()){
         alert("Muy bien, has ganado 5 puntos.");
         puntos = puntos + 5;
         i++;
         $('#score').html("<strong>"+ puntos +"</strong>");
         setTimeout(function () {
           img.attr("src", 'assets/fotos/peru/' + peru[i+1].image);
           img.attr("alt",peru[i+1].name);
           coderDiv.append(img);
           photoPeru.append(coderDiv);
         },3000);
       }else {
         alert("Sigue intentando.");
       }
     });

   return photoPeru;
 });



$(function(){
   const photoMexico= $('#photos-Mexico');
   const coderDiv = $('<div class="coderDiv col-md-12"></div>');
     const img = $('<img class="photo-coder col-md-12"></img>');
     img.attr("src", 'assets/fotos/mexico/' + mexico[i].image);
     img.attr("alt",mexico[i].name);
     photoMexico.append(coderDiv);
     coderDiv.append(img);
/*
     comprobar.on('click',(e) => {
       if(nombreC.val().toLowerCase() == mexico[i].name.toLowerCase()){
         alert("muy bien");
       }else {
         alert("muy mal");
       }
     });
*/
   return photoMexico;
 });
