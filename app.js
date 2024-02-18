const seatLists = document.getElementsByClassName("seat-style");
let seatCount = 0;
for (const seatList of seatLists) {
    seatList.addEventListener("click", function () {
        seatCount += 1;



        console.log(seatCount);
        const totalSeat = document.getElementById("total-seat").innerText;
        const convertedSetNumber = parseInt(totalSeat);

      








        setInnerText("total-seat", convertedSetNumber - 1)
        setInnerText("seat-count", seatCount);
    })
}




function setInnerText(Id, value) {
    const text = document.getElementById(Id);
    text.innerText = value;
} 