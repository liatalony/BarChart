let bars = document.querySelectorAll("article");
let array = new Array(40).fill(1);
let i = 0;

setArray();

function setArray() {
  const queueSize = getNumberOfCustomers();
  array.unshift(queueSize);
  array.pop();
  barSplit();
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}
function barSplit() {
  i = 0;
  bars.forEach(barSize);
  setTimeout(function() {
    setArray();
  }, 1000);
}

function barSize(bar) {
  bar.style.height = `${(array[i] / 32) * 100}px`;
  i++;
  console.log(i);
}
