// funkcia na zistenie ci je produkt novy (do 30 dni)
function isNewProduct(dateString) {
    const productDate = new Date(dateString);
    const today = new Date();

    const diffTime = today - productDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays <= 30;
}

// prejdi vsetky produkty
document.querySelectorAll('.product-card').forEach(function(card) {

    const createdDate = card.getAttribute('data-created');
    const priceText = card.querySelector('.price-final').innerText;

    const price = Number(
        priceText
        .replace(/[^\d,]/g, '') // odstráni € a medzery
        .replace(',', '.')
    );

    // 1. NOVINKA
    if (isNewProduct(createdDate)) {
        card.querySelector('.badge').style.display = 'block';
    } else {
        card.querySelector('.badge').style.display = 'none';
    }

    // 2. DOPRAVA
    if (price < 50) {
        card.querySelector('.shipping-info').innerText = "🚚 Doprava zadarmo nad 50 €";
    }

});