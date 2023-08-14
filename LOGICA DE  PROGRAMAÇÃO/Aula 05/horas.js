

function convertTime(time) {
    let [hours, minutes] = time.split(":").map(Number);
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        throw new Error("Hora inválida");
    }
    let period = hours >= 12 ? "P.M." : "A.M.";
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

function printTime(time) {
    try {
        console.log(convertTime(time));
    } catch (e) {
        console.error(e.message);
    }
}

printTime("12:25"); 
printTime("25:00"); 
