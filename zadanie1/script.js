// Zadanie 3: Napisz obsługę otwierania i zamykania modala

// 1. Pobierz elementy do zmiennych (btnOpen, btnClose, overlay)

// 2. Dodaj nasłuchwianie kliknięcia na btnOpen -> pokaż overlay (display = 'block' lub 'flex')

// 3. Dodaj nasłuchwianie kliknięcia na btnClose -> ukryj overlay (display = 'none')


const openModal = document.getElementById('openModal')
const closeModal = document.getElementById('closeModal')
const overlay = document.querySelector('.overlay')

openModal.addEventListener('click', function(){
    overlay.style.display = 'block'
})

closeModal.addEventListener('click', function(){
    overlay.style.display = 'none'
})