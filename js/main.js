let ticketPrice = 550;
let totalPrice = 0;

function scrollToNextSection() {
    const buyTicket = document.getElementById("buy-Ticket");
    const ticketSection = document.getElementById("ticket-section");

    var currentSection = document.getElementById('buy-Ticket');
    var nextSection = currentSection.nextElementSibling || document.getElementById('ticket-section');
    nextSection.scrollIntoView({ behavior: 'smooth' });
}

const seatButtons = document.getElementsByClassName('seatBtn');

for (seatButton of seatButtons) {

    seatButton.addEventListener('click', function (e) {

        /// 
        const totalSeat = document.getElementById('total-seat');
        let seatNumber = parseInt(totalSeat.innerText);
        seatNumber = seatNumber - 1;
        console.log(seatNumber);
        setOutPut('total-seat', seatNumber);


        // bill-Seat-Count

        const billSeatCountEle = document.getElementById('bill-Seat-Count');
        let billSeatCount = parseInt(billSeatCountEle.innerText);

        if (billSeatCount > 3 && seatNumber > 0) {
            return;
        }
        billSeatCount = billSeatCount + 1;
        setOutPut('bill-Seat-Count', billSeatCount);
        console.log(billSeatCount);

        // Change button color based on condition
        if (billSeatCount > 4 && seatNumber > 0) {
            this.style.backgroundColor = '';
        } else {
            this.style.backgroundColor = 'green';

            this.disable = true;
        }

        //
        const seatList = document.getElementById('seat-list');

        const div = document.createElement('div');
        div.setAttribute("style", "display:flex; justify-content: space-between");

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = this.innerText;
        p2.innerText = 'Economy';
        p3.innerText = ticketPrice;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        seatList.appendChild(div);

        ////
        const perTicket = parseInt(seatList.lastChild.lastChild.innerText);
        totalPrice = totalPrice + perTicket;
        console.log(totalPrice)

        //
        const totalAmount = document.getElementById('total-price');
        console.log(parseInt(totalAmount.innerText))
        totalAmount.innerText = totalPrice;

        //Grand Total
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPrice;
    })
}

function setOutPut(elementId, value) {
    document.getElementById(elementId).innerText = value;
}


let nextBtn = document.getElementById('next-btn')
function nextPage(){
   let mainSection = document.getElementById('main');
   mainSection.classList.add('hidden')

   let success = document.getElementById('sussess');
   success.classList.remove('hidden')
console.log(888)
}