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

  const inputFild =   document.getElementById('input-section') ;
         inputFild.style.display = 'block';

                const findTotalSeat = document.getElementById('selected-seat').innerText;
                document.getElementById('selected-seat').innerText = parseInt(findTotalSeat) - 1;

              const s =  document.getElementById('change-seatnumber').innerText = count;
              

                const seatName = kbd.innerText;
                const findId = document.getElementById('set-seatName');
                const createdId = document.createElement('div');
                createdId.setAttribute('id', seatName);

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

                const inputFild =   document.getElementById('input-section') ;
                inputFild.style.display = 'none';
            }


            // Update total price
            const totalPrice = count * seatPrice;
            document.getElementById('total-price').innerText = totalPrice;
            document.getElementById('grand-total').innerText = totalPrice; 
        } else {
            alert(`You can only select up to 4 seats.`);

            
        }
    });
    
}









function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;

    if (name && number && email) {
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
        
                <style>
                    .thank-you-message {
                        
                        text-align: center;
                        margin-top: 50px;
                    }
                        #ss-im{
                            display: flex ;
                            justify-content: center ;
                        }
                       .ss{
                             display: flex ;
                            justify-content: center ;
                            color:#52d93d ;
                            font-size:50px ;
                       }
                      .susses{
                       display: flex;
                        justify-content: center;
                        }
                </style>
            
               <div id="ss-im">
                   <img src="images/success.png" alt="">
               </div>
                <p class='ss'> SUCCESS </p>
                <div class="thank-you-message">
                    <h1>Thank you for Booking Our <br> Bus Seats. We are working hard to find the best <br> service and deals for you. Shortly you will find a confirmation in your email</h1>
                    <h2></h2>
                </div>
                <div class='susses'>
                   <button id='lets-continue' style="width: 300px; height: 55.99px; border-radius: 32px; background: #52d93d; color: aliceblue;outline: none; border: none;">Continue</button>
                </div>
                     <script>
                    document.getElementById('lets-continue').addEventListener('click', function() {
                        window.close();
                        window.opener.refreshSeatSection();
                    });
                </script>
        
        `);
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
        document.getElementById('email').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}


function refreshSeatSection() {
    const seatSection = document.querySelector('.seat-section');
    count = 0;
    document.getElementById('selected-seat').innerText = 40 ;
    document.getElementById('change-seatnumber').innerText = count;
    document.getElementById('total-price').innerText = 0;
    document.getElementById('grand-total').innerText = 0;
    for (const kbd of allKeyBord) {
        kbd.classList.remove('click');
    }
}