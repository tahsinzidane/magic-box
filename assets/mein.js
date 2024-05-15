let box = document.getElementById("box"),
  val = document.getElementById("value");

val.addEventListener("input", () => {
  box.style.borderRadius = val.value;
  box.style.backgroundColor = val.value;

  // const title = val.value;
                // I tried to make the title bar interactive
});