console.log("Runnin runnin, and runnin runnin")

var tester = "this a test"

function broadcast(input) {
  console.log(input)
}

function saveData(data) {
  chrome.storage.local.set(data, function() {
    console.log(data)
  })
}

function getData() {
  chrome.storage.local.get(function(storedStuff) {
    console.log(storedStuff)
  })
}
