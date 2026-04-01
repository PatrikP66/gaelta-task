🐛 Zadanie 3 – Debug + optimalizácia 
    Nižšie nájdeš JavaScriptový kód. Obsahuje 3 chyby (logické alebo syntaktické). 
    Nájdi ich, oprav a vysvetli čo bolo zlé:


document.addEventListener('DOMContentLoaded', function() {
  const addToCartBtns = document.querySelectorAll('.btn-add-to-cart');
  
  addToCartBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault;
      
      const productId = btn.getAttribute('data-product');
      const quantity = document.querySelector('#qty-' + productId).val();
      
      fetch('/api/cart/add', {
        method: 'POST',
        body: JSON.stringify({
          product_id: productId,
          qty: quantity
        })
      })
      .then(response => response.json)
      .then(data => {
        console.log('Pridané do košíka', data);
      });
    });
  });
});


    - v tomto kóde som našiel chybu v časti e.preventDefault; 
        - táto chyba sposobí že sa funkcia nikdy nespustí
        - správne to má byť napísané e.preventDefault();

    - ďalšia chyba sa nachádza v .then(response => response.json)
        - v takomto prípade sa odkazujeme iba na funkciu a nie jej reálne volanie 
        - to znamená, že .then() dostane návratovú hodnotu funkciu, nie výsledok
        - správne napísané to má byť .then(response => response.json())

    - posledná chyba v kóde pri použití .val()
        - .val() funguje pri práci s jQuery
        - nakoľko tu máme čistý java script tak použijeme .value()