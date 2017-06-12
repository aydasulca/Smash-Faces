'use strict';
/*
$("select").on("change", (e) => {
  e.preventDefault();
  const option = $('#select').val();
  const peru = $('#photos-Peru').val();
  const mexico = $('#photos-Mexico').val();

  if(option == '#photos-Peru'){
    '#photos-Mexico'.addClass("none");
    '#photos-Peru'.toggleClass("none");
  }else {
    '#photos-Peru'.addClass("none");
    '#photos-Mexico'.toggleClass("none");
  }
})
*/
$(function(){
   const photoPeru= $('#photos-Peru');
   const coderDiv = $('<div class="coderDiv"></div>');

   photoPeru.append(coderDiv);

   for(var i=0; i<peru.length; i++){
     const img = $('<img class="photo-coder"></img>');
     img.attr("src", 'assets/fotos/peru/' + peru[i].image);
     img.attr("alt",peru[i].name);
     coderDiv.append(img);
   }
   return photoPer;
});

$(function(){
   const photoMexico= $('#photos-Mexico');
   const coderDiv = $('<div class="coderDiv"></div>');

   photoMexico.append(coderDiv);

   for(var i=0; i<mexico.length; i++){
     const img = $('<img class="photo-coder"></img>');
     img.attr("src", 'assets/fotos/mexico/' + mexico[i].image);
    img.attr("alt",mexico[i].name);
     coderDiv.append(img);
   }
   return photoMexico;
});
