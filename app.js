const seatLists = document.getElementsByClassName("seat-style");
let seatCount = 0;
for (const seatList of seatLists) {
    seatList.addEventListener("click", function (event) {
        seatCount += 1;
        event.target.classList.remove("seat-style");
        event.target.classList.add("add-style");
        event.target.setAttribute("disabled", true);

        if (seatCount > 4) {
            alert("You are not allowed to purchase more than four seats...!");
            event.target.classList.remove("add-style");
            event.target.classList.add("seat-style");
            return event.target.setAttribute("disabled", true);


        }
        const totalSeat = document.getElementById("total-seat").innerText;
        const convertedSetNumber = parseInt(totalSeat);

        /* create element */
        const listItem = findElement("list-item");
        const li = document.createElement("li");
        const p1 = document.createElement("p");
        p1.innerText = seatList.innerText;
        const p2 = document.createElement("p");
        p2.innerText = "economic";
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
        const hidden = findElement("btn-input").parentElement.parentElement;
        const btnInput = findElement("btn-input").value;
        // const validity = btnInput.split(" ").join("").toUpperCase();

       
        if (convertedTicketPrice === 2200) {
            event.target.setAttribute("disabled", false);
            if (btnInput === "NEW15") {
                const discount = convertedTicketPrice - convertedTicketPrice * 15 / 100;
                discountPrice(convertedTicketPrice, discount);
                setInnerText("grand-price", discount)
                hidden.classList.add("hidden");

                findElement("btn-input").value = "";
            }
            else if (btnInput === "Couple 20") {
                const discount = convertedTicketPrice - convertedTicketPrice * 20 / 100;
                discountPrice(convertedTicketPrice, discount);
                setInnerText("grand-price", discount)
                hidden.classList.add("hidden");
              
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

const successBtn = findElement("successBtn");
const phoneNumber = findElement("phone-number");

successBtn.addEventListener("click", submitSuccess);
function submitSuccess() {

    findElement("success").classList.remove("hidden");
    findElement("header").classList.add("hidden");
    findElement("main").classList.add("hidden");
    findElement("footer").classList.add("hidden");
}


// ticket scrolling
scrollToSection("buy-ticket")
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// discount price function
function discountPrice(total, dis) {
    const parentDiv = findElement("btn-input").parentElement.parentElement.parentElement;
    const p = document.createElement("p");
    p.innerText = `Discount Price : ${parseInt((total - dis))} /-`;
    p.classList.add("para-style");
    parentDiv.appendChild(p);
}