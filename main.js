$(document).ready(function() {
	var url = 'https://flynn.boolean.careers/exercises/api/array/music'; // url api



  $.ajax( //ajax
    {
      'url' : url,
      'method' : 'GET',
      'success' : function (data) {
        printData(data.response); // passiamo la funzione
      },
      'error' : function (request, state, errors) {
        alert('error' + errors);
      }
    }
  );
});


function printData (data) {
  // console.log(data);
  for (var i = 0; i < data.length; i++) { //cicliamo data.response
    var disco = data[i]; //assegnamo alla variabile disco il ciclo data[i]
    var source = $("#entry-template").html(); //selezioniamo handlebars id
    var template = Handlebars.compile(source);
    var html = template(disco); // selezioniamo la variabile disco
    $('.cds-container').append(html); // facciamo append nella nostra classe
  }
}

$("select").change(function() {
  var genere = $(this).val(); // selezioniamo la nostra select
  console.log(genere);
    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        method: "GET",
        success: function(data) {
          console.log(data);
          var cd = data.response; // cd è la variabile che contiene data
          $(".cds-container").empty(); // empty rimuove l elemento
          for (var i = 0; i < cd.length; i++) { //cicliamo la lunghezza del nostro cd e lo assegnamo alla varibaile cdGenere
            var cdGenere = cd[i].genre;
            console.log(cdGenere);
            if (genere == cdGenere) { // se ogni genere"value" e uguale alla categoria cdGenere mostriamo la categoria
              var source = document.getElementById("entry-template").innerHTML;
              var template = Handlebars.compile(source);
              var html = template(cd[i]);
              $(".cds-container").append(html);
            } else if (genere == "") { // senno li mostriamo tutti
              for (var i = 0; i < cd.length; i++) {
                var source = document.getElementById("entry-template").innerHTML;
                var template = Handlebars.compile(source);
                var html = template(cd[i]);
                $(".cds-container").append(html);
              }
            }
          }
        },
        error: function(errore) {
          alert("Errore " + errore);
        }
      }
    );
  });
