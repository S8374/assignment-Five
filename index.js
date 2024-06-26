const allKeyBord = document.getElementsByClassName('kbd');

let count = 0;
let maxSeat = 4;
const seatPrice = 550; // Price per seat

for (const kbd of allKeyBord) {
    kbd.addEventListener('click', function (e) {
        if (count < maxSeat || kbd.classList.contains('click')) {
            kbd.classList.toggle('click');

            if (kbd.classList.contains('click')) {
                count++;

                const findTotalSeat = document.getElementById('selected-seat').innerText;
                document.getElementById('selected-seat').innerText = parseInt(findTotalSeat) - 1;

                document.getElementById('change-seatnumber').innerText = count;

                const seatName = kbd.innerText;
                const findId = document.getElementById('set-seatName');
                const createdId = document.createElement('div');
                createdId.setAttribute('id', seatName);  // Setting unique ID for each created element

                const p = document.createElement('h1');
                p.innerText = seatName;
                createdId.appendChild(p);

                const p2 = document.createElement('p');
                p2.innerText = 'Economy';
                createdId.appendChild(p2);

                const p3 = document.createElement('h3');
                p3.innerText = seatPrice;
                createdId.appendChild(p3);

                findId.appendChild(createdId);
            } else {
                const seatName = kbd.innerText;
                const findId = document.getElementById('set-seatName');
                const seatDiv = document.getElementById(seatName);
                if (seatDiv) {
                    findId.removeChild(seatDiv);
                }

                const findTotalSeat = document.getElementById('selected-seat').innerText;
                document.getElementById('selected-seat').innerText = parseInt(findTotalSeat) + 1;

                count--;
                document.getElementById('change-seatnumber').innerText = count;
            }

            // Update total price
            const totalPrice = count * seatPrice;
            document.getElementById('total-price').innerText = totalPrice;
            document.getElementById('grand-total').innerText = totalPrice; // Assuming grand total is the same as total price here
        } else {
            alert(`You can only select up to ${maxSeat} seats.`);
        }
    });
}