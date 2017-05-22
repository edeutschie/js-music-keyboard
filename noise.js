$(document).ready( function() {
  // your code here


    // console.log(audio);

  $(".instrument").on('click', 'button', function(event) {
    $(this).attr("class"); //use this to target the c or whatever

    var note = this.className.split(" ")[1];
    console.log(note);
    var audio = $("#" + note + "Audio")[0];
    audio.play();
  });
});
