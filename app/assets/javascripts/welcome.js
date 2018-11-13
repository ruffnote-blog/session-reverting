// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("turbolinks:load", function() {
  fetchTime()
  setInterval(fetchTime, 5000)
})

function fetchTime() {
  var time = document.querySelector('.js-time')
  if (!time) {
    return
  }
  fetch('/time').then(function(response) {
    response.json().then(function(data) {
      time.innerHTML = new Date(parseInt(data.time))
    })
  })
}
