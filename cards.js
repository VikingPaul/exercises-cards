var num = 0
document.getElementById('add').addEventListener("click", function() {
  document.getElementById('cardPlacement').innerHTML += `<div id="num${num}"><p>${document.getElementById('textInput').value}</p><button id="del${num}">delete</button></div>`
  num++
})
document.getElementById("cardPlacement").addEventListener("click", function(e) {
  if (e.target.id.substring(0,3) === "del") {
    deleteCard(e.target.id.substring(3,e.target.id.length))
  }
})
function deleteCard(boomBoomPow) {
  document.getElementById('cardPlacement').removeChild(document.getElementById('num' + boomBoomPow))
}