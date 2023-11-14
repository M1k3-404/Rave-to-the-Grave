function CalculateTotal(ticketCount, promoCode) {
    var ticketPrice = 2000;

    if (promoCode === 'R2KICSC' && ticketCount == 6) {
        ticketPrice = 1700;
    } else if (promoCode === 'FLEXLK' && ticketCount >= 2) {
        ticketPrice = 1600;
    } else if (promoCode === 'R2G2022' && ticketCount >= 3) {
        ticketPrice = 1600;
    } else if (promoCode === 'RACKR23' && new Date() < new Date('2023-11-10T00:00:00')) {
        ticketPrice = 1600;
    } else if (promoCode === 'RTRATR2G' && ticketCount >= 4) {
        ticketPrice = 1600;
    } else if (promoCode === 'R2GFLEX' && ticketCount >= 4) {
        ticketPrice = 1600;
    }

    const totalTicketPrice = ticketCount * ticketPrice;

    return totalTicketPrice;
}

export default CalculateTotal;