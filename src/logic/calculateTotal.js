function CalculateTotal(ticketCount, promoCode) {
    var ticketPrice = 2000;

    if (new Date() < new Date('2023-11-08T00:00:00Z')) {
        ticketPrice -= 400;
    }

    if (promoCode === 'R2KICSC' && ticketCount == 6) {
        ticketPrice = 1300;
    } else if (promoCode === 'FLEXLK' && ticketCount >= 4) {
        ticketPrice = 1400;
    } else if (promoCode === 'R2G2022' && ticketCount >= 3) {
        ticketPrice = 1400;
    }

    const totalTicketPrice = ticketCount * ticketPrice;

    return totalTicketPrice;
}

export default CalculateTotal;