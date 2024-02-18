const seatLists = document.getElementsByClassName("seat-style");
let seatCount = 0;
for (const seatList of seatLists) {
    seatList.addEventListener("click", function (event) {
        seatCount += 1;
        event.target.classList.remove("seat-style");
        event.target.classList.add("add-style");
        event.target.setAttribute("disabled", true);


        const totalSeat = document.getElementById("total-seat").innerText;
        const convertedSetNumber = parseInt(totalSeat);

        /* create element */
        const listItem = findElement("list-item");
        const li = document.createElement("li");
        const p1 = document.createElement("p");
        p1.innerText = seatList.innerText;
        const p2 = document.createElement("p");
        p2.innerText = "Economic";
        const p3 = document.createElement("p");
        p3.innerText = 550;
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        listItem.appendChild(li).classList.add("list-style");
        //   end
        const singlePrice = p3.innerText;

        // display total price
        displayTotalPrice("total-price", singlePrice);
        displayGrandPrice()

        setInnerText("total-seat", convertedSetNumber - 1)
        setInnerText("seat-count", seatCount);
    })
}

// display total price function
function displayTotalPrice(Id, value) {
    const totalPrice = findElement(Id).innerText;
    const convertedTicketPrice = parseInt(totalPrice);
    const sum = convertedTicketPrice + parseInt(value);
    setInnerText("total-price", sum);

}

// display grand price function
function displayGrandPrice() {
    const totalPrice = findElement("total-price").innerText;
    const convertedTicketPrice = parseInt(totalPrice);
    setInnerText("grand-price", convertedTicketPrice)

    const applyBtn = findElement("apply-btn");
    applyBtn.addEventListener("click", function (event) {
        const btnInput = findElement("btn-input").value;
       const validity=  btnInput.split(" ").join("").toUpperCase();
        // console.log(value);
        if (convertedTicketPrice === 2200) {
            event.target.setAttribute("disabled", false);
            if (validity === "NEW15") {
                const discount = convertedTicketPrice - convertedTicketPrice * 15 / 100;
                setInnerText("grand-price", discount)
                // console.log(discount);
                findElement("btn-input").value = "";
            } else {
                alert("Your coupon is invalid");
                findElement("btn-input").value = "";
            }
        }
    })
}


function setInnerText(Id, value) {
    const text = document.getElementById(Id);
    text.innerText = value;
}
// find element
function findElement(Id) {
    const element = document.getElementById(Id);
    return element;
}