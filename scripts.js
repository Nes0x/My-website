function discord() {
    alert("Mój discord: ! Nes0x#3507")
}

window.onload = function(){
  let form_date = new Date('2021-05-01')
  let today = new Date()
  let difference = form_date > today ? form_date - today : today - form_date
  let days = Math.floor(difference / (1000 * 3600 * 24))
  let months = (today.getFullYear()*12 + today.getMonth()) - (form_date.getFullYear()*12 + form_date.getMonth())
  document.getElementById("date").innerText = "Uczę się programowania od " + days + " dni (" + months + " miesięcy)"
}