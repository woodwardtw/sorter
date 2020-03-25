//from https://stackoverflow.com/questions/43979555/javascript-shuffle-divs-within-div

function shuffle() {
  var container = document.getElementById("raw-words");
  console.log(container);
  var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('drag'));
    elementsArray.forEach(function(element){
    container.removeChild(element);
  })
  shuffleArray(elementsArray);
  elementsArray.forEach(function(element){
  container.appendChild(element);
})
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

$('#shuffle').click(function(){
  console.log('shuff')
  shuffle();
   });

$('#save_image_locally').click(function(){
    html2canvas($('#all'), 
    {
      onrendered: function (canvas) {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'word_sorting.jpg';
        a.click();
      }
    });
  });