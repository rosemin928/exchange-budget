const krClock = document.querySelector("#krClock");
const ukClock = document.querySelector("#ukClock");

function getKrClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    krClock.innerText = `Korea ${hours}:${minutes}:${seconds}`;
}

function getUkClock() {
    const date = new Date();
    const preHours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    if (preHours<8) {
        const hours = String(date.getHours()+16).padStart(2, "0");
        ukClock.innerText = `UK ${hours}:${minutes}:${seconds}`;
    } else {
        const hours = String(date.getHours()-8).padStart(2, "0");
        ukClock.innerText = `UK ${hours}:${minutes}:${seconds}`;
    }
}

getKrClock();
getUkClock();
setInterval(getKrClock, 1000);
setInterval(getUkClock, 1000);