let box = document.getElementById("box"),
  val = document.getElementById("value");

val.addEventListener("input", () => {
  box.style.borderRadius = val.value;
  box.style.backgroundColor = val.value;

  if ("cherry red" === val.value) {
    box.style.backgroundColor = "#C24641";
  }

  if ("acid green" === val.value) {
    box.style.backgroundColor = "#B0BF1A";
  }

  if ("navy blue" === val.value) {
    box.style.backgroundColor = "#000080";
  }

  if ("grape vino" === val.value) {
    box.style.backgroundColor = "#722F37";
  }

  if ("baby pink" === val.value) {
    box.style.backgroundColor = "pink";
  }

  if ("lemon yellow" === val.value) {
    box.style.backgroundColor = "#FAFA33";
  }

  if ("bronze" === val.value) {
    box.style.backgroundColor = "#CD7F32";
  }

  if ("pista green" === val.value) {
    box.style.backgroundColor = "#93C572";
  }

  if ("tsn" === val.value) {
    box.style.backgroundColor = "#333";
  }

});

//   #93C572