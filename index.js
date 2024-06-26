const allKeyBord = document.getElementsByClassName('kbd');

let count = 0;
let maxSeat = 4;

for (const kbd of allKeyBord) {
    kbd.addEventListener('click', function (e) {

        kbd.classList.toggle('click');

        if (kbd.classList.contains('click')) {

             count = count + 1 ;

            const findTotalSeat = document.getElementById('selected-seat').innerText;
            document.getElementById('selected-seat').innerText = parseInt(findTotalSeat) - 1;

            document.getElementById('change-seatnumber').innerText = count ;   

            const find = document.getElementById

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
            p3.innerText = '550';
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
            
            document.getElementById('change-seatnumber').innerText = count - 1 ;   
           
            

            
            
        }
    });
}