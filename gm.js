const inp = document.getElementById('inp');

function Calculate(Mustafa) {
  inp.value += Mustafa
}

function Allclear() {
  inp.value = ""
}
function Final() {
  const equal = inp.value;
  const equal1 = eval(equal)
  inp.value = equal1
}
function ClearRecord() {
  const clear = inp.value;
  const clear1 = clear.slice(0, -1);
  inp.value = clear1
}