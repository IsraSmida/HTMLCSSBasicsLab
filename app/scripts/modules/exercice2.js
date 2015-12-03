function init() {
  var diametres = [4878, 12104, 12756, 6787, 142800, 120000, 51200, 48600];
  var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

  var couleurs = ["#A9A9A9", "#DEB887", "#00008B", "#8B0000", "#FFA500", "#FF4500", "#66CDAA","#00BFFF", "#CD853F"];
  var max = 0;

  for (var i = 0; i < diametres.length; i++) {
    if (diametres[i] > max)
      max = diametres[i];
  }

  for (var j = 0; j < diametres.length; j++) {
    var newDiv = document.createElement("div");
    var paragraphe = document.createElement("p");
    var planete = document.createTextNode(names[j]);

    paragraphe.appendChild(planete);
    newDiv.appendChild(paragraphe);

    /*var className = document.createAttribute("class");
    className.value = "planete";
    newDiv.setAttributeNode(className);*/

    document.getElementById("blocks").appendChild(newDiv);

    //newDiv.style.backgroundColor = "black";
    newDiv.style.backgroundColor = couleurs[j];
    newDiv.style.height = "50px";
    newDiv.style.width = diametres[j] * 200 / max + "px";

    paragraphe.style.color = "#696969";
    paragraphe.style.position = "relative";
    paragraphe.style.left = "50px";
    paragraphe.style.top = "15px";
  }
  document.getElementById("blocks").style.transformOrigin = "top left";
  document.getElementById("blocks").style.transform = "translate(0px, 225px) rotate(-90deg)";
}
window.onload = init();
