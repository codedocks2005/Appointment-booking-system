function bookAppointment() {
    let xhr = new XMLHttpRequest();
    let url = "book_appointment.php"; // Backend script

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("response").innerHTML = xhr.responseText;
        }
    };

    // Get selected service
    let service;
    document.querySelectorAll("input[name='service']").forEach((input) => {
        if (input.checked) {
            service = input.nextSibling.nodeValue.trim();
        }
    });

    let date = document.querySelector(".fc-day-selected")?.dataset.date || "";
    let time = document.getElementById("time").value;

    let params = `service=${service}&date=${date}&time=${time}`;
    xhr.send(params);
}
