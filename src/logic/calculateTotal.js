function CalculateTotal(ticketCount, promoCode) {
    var ticketPrice = 2500;

    if (new Date() < new Date('2023-11-04T00:00:00Z')) {
        ticketPrice = 1800;
    }

    if (promoCode === 'R2KICSC' && ticketCount == 6) {
        ticketPrice = 1500;
    }

    const totalTicketPrice = ticketCount * ticketPrice;

    return totalTicketPrice;
}

export default CalculateTotal;