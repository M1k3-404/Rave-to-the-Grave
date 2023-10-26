function CalculateTotal(ticketCount, promoCode) {
    var ticketPrice = 2500;

    if (new Date() < new Date('2023-11-04T00:00:00Z')) {
        ticketPrice = 1800;
    }

    const totalTicketPrice = ticketCount * ticketPrice;

    return totalTicketPrice;
}

export default CalculateTotal;