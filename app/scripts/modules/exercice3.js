function init() {
  var holder = document.getElementById('holder');
  var output = document.getElementById('output');
  holder.addEventListener('drop', function(e){
    e.preventDefault();
    holder.className = '';

    var file = e.dataTransfer.files[0];
    var reader = new FileReader();

    if (file.type == "image/jpg" || file.type == "image/jpeg" || file.type == "image/bmp" || file.type == "image/gif" || file.type == "image/png") {
      var vignette = document.createElement("img");
      var className = document.createAttribute("class");
      className.value = "taille img-thumbnail";
      vignette.setAttributeNode(className);
      var source = document.createAttribute("src");
    }
    else {
      alert("Erreur : Type de fichier !");
    }
    reader.onload = function(e){
      source.value = reader.result;
    }
    vignette.setAttributeNode(source);
    output.appendChild(vignette);

    reader.onloadend = function(e){
      if (file) {
        reader.readAsDataURL(file);
      } else {
        vignette.src = "";
      }
    };
    reader.readAsText(file);
  });

  holder.addEventListener('dragover', function(e){
    e.preventDefault();
    holder.className = 'hover';
  });

  holder.addEventListener('dragleave', function(e){
    e.preventDefault();
    holder.className = '';
  });
};
window.onload = init();
