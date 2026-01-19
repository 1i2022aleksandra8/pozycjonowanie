// Zadanie 4: Obsługa scrollowania

// 1. Pobierz nawigację (nav)
const nav = document.querySelector('nav')

// 2. Dodaj event listener na 'scroll' dla obiektu window
window.addEventListener("scroll", function () {
  // 3. Sprawdź pozycję scrolla (window.scrollY)
  // Jeśli scroll > 50 -> dodaj klasę 'scrolled' do nav
  // Jeśli scroll <= 50 -> usuń klasę 'scrolled' z nav
  if (this.window.scrollY > 50){
    nav.classList.add('.scrolled')
  } else {
    nav.classList.remowe('.scrolled')
  }
});
