// Get extra memory, storage, and delivery charge cost field by Id
const extraMemoryField = document.getElementById('extra-memory-charge');
const extraStorageField = document.getElementById('extra-storage-charge');
const deliveryChargeField = document.getElementById('delivery-charge');
// get best price field by id
const bestPriceField = document.getElementById('best-price');

// get promo code input field by id
const promoCodeField = document.getElementById('promo-code');
// get discount total field by id
const discountTotalField = document.getElementById('discount-total');

// get total cost field by Id
const total = document.getElementById('total-price');

// Memory button 8GB and 16GB click eventhandler
document.getElementById('memory-8gb-btn').addEventListener('click', function () {
    extraMemoryField.innerText = 0;
    updateTotal();
    updateDiscountTotal()
});
document.getElementById('memory-16gb-btn').addEventListener('click', function () {
    extraMemoryField.innerText = 180;
    updateTotal();
    updateDiscountTotal()
});

// Storage button 256GB,512GB and 1TB click eventhandler
document.getElementById('storage-256gb-btn').addEventListener('click', function () {
    extraStorageField.innerText = 0;
    updateTotal();
    updateDiscountTotal()
});
document.getElementById('storage-512gb-btn').addEventListener('click', function () {
    extraStorageField.innerText = 100;
    updateTotal();
    updateDiscountTotal()
});
document.getElementById('storage-1tb-btn').addEventListener('click', function () {
    extraStorageField.innerText = 180;
    updateTotal();
    updateDiscountTotal()
});

// Delivery charge button event handler
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    deliveryChargeField.innerText = 0;
    updateTotal();
    updateDiscountTotal()
});
document.getElementById('express-delivery-btn').addEventListener('click', function () {
    deliveryChargeField.innerText = 20;
    updateTotal();
    updateDiscountTotal()
});

// Update Total function
function updateTotal() {
    const bestPrice = parseInt(bestPriceField.innerText);
    const extraMemoryCharge = parseInt(extraMemoryField.innerText);
    const extraStorageCharge = parseInt(extraStorageField.innerText);
    const deliveryCharge = parseInt(deliveryChargeField.innerText);
    const grandTotal = bestPrice + extraMemoryCharge + extraStorageCharge + deliveryCharge;
    total.innerText = grandTotal;
}

// Update Discount Total function
function updateDiscountTotal() {
    const discountTotal = total.innerText;
    discountTotalField.innerText = discountTotal;
}

// Promo code 20% discount function
function applyPromoCode() {
    let cuponTotal = parseFloat(total.innerText);
    const matchCode = promoCodeField.value;
    const promoCode = 'stevekaku';
    if (matchCode == promoCode) {
        cuponTotal -= cuponTotal * 0.2;
        discountTotalField.innerText = cuponTotal;
    }
    else {
        discountTotalField.innerText = total.innerText;
    }
    promoCodeField.value = '';
}