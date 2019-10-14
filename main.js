document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mainHeader").onclick = function() {
      var colors = ["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"];
      this.colorID = this.colorID || 0;
      this.style.color = colors[this.colorID++%colors.length];
    }
})

$( document ).ready(function() {
  $( "#middle" ).click(function() {
    $( "#middle" ).fadeOut( "slow", function() {
    });
  });
});