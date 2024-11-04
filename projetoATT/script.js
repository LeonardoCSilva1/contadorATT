//  DATA INICIO
const startDate = new Date('2022-01-08');

document.getElementById('specialMessage').textContent = "Com amor! \u2764";

function calculateDaysTogether(startDate) {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate; 
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

function updateDaysCounter() {
    const daysCount = calculateDaysTogether(startDate);
    document.getElementById('daysCount').textContent = daysCount;
}

function updateSpecialMessage(daysCount) {
    const messageElement = document.getElementById('specialMessage');
    if (daysCount) {
        messageElement.innerHTML = `Fiz este contador de dias para sabermos quantos dias estamos juntos, e também para ver quais foram meus dias mais felizes da minha vida. Sou muito grato por tudo que você faz por mim, te amo agora e para sempre \u2764 <br><br> Te amo muito Dede pdf \u2764`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const daysCount = calculateDaysTogether(startDate);
    updateDaysCounter();
    updateSpecialMessage(daysCount);
});
// DATA FINAL

// RELOGIO INICIO

const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

    const relogio = setInterval (function time(){
        let dateToday = new Date();
        let hr = dateToday.getHours()
        let min = dateToday.getMinutes()
        let seg = dateToday.getSeconds()

        if (hr < 10) hr = '0' + hr;

        if (min < 10) min = '0' + min;

        if (seg < 10) seg = '0' + seg;

        horas.textContent = hr;
        minutos.textContent = min;
        segundos.textContent = seg;

        
    })

// RELOGIO FINAL