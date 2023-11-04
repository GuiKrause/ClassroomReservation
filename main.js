const reservButton = document.getElementById('reservation-button')
const reservationsMade = document.getElementById('reservations-made')

let count = 0
reservButton.addEventListener('click',()=>{
    reservationsMade.innerHTML = '📆 Reservations Made:'
    count++
    reservationsMade.innerHTML = reservationsMade.innerText + ` ${count}`
})
