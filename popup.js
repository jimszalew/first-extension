document.addEventListener('DOMContentLoaded', function() {
  var background = chrome.extension.getBackgroundPage()
  background.broadcast('this is fun')

  var stuff = {
    junk: "things",
    dogs: "are cool"
  }
  background.saveData(stuff)

  var testButton = document.getElementsByClassName('test-button')
  background.broadcast(testButton[0])

  testButton[0].addEventListener('click', function() {
    background.getData()
  })
})
