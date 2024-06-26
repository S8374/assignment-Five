function updateTotalPrice(count) {
    const totalPrice = count * seatPrice;
    totalPriceElement.innerText = totalPrice;
}