import React, { useEffect, useState } from "react";
import "./booking.css";
import Form from "react-bootstrap/Form";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CalculateTotal from "../../logic/calculateTotal.min.js";

function Booking() {
    const [ticketCount, setTicketCount] = useState(0);
    const [promoCode, setPromoCode] = useState('');
    const [totalTicketPrice, setTotalTicketPrice] = useState(0);

    const incrementTicketCount = (e) => {
        e.preventDefault();
        setTicketCount(ticketCount + 1);
    }

    const decrementTicketCount = (e) => {
        e.preventDefault();
        if (ticketCount > 0) {
            setTicketCount(ticketCount - 1);
        }
    }

    const applyPromoCode = (e) => {
        e.preventDefault();
        setPromoCode(e.target.value);
        console.log(e.target.value);
    }

    useEffect(() => {
        const totalTicketPrice = CalculateTotal(ticketCount, promoCode);
        setTotalTicketPrice(totalTicketPrice);
    }, [ticketCount, promoCode]);

    const openGoogleForm = (e) => {
        e.preventDefault();
        const googleFormUrl = 'https://forms.gle/jTdpty1fsmWRSDVY8';
        window.open(googleFormUrl, '_blank');
    };

    return (
        <React.StrictMode>
            <div className="home">
                <div className="bg-overlay-black col-12 d-flex justify-content-center align-items-center">
                    <Form className="booking-form col-8">
                        <Form.Group controlId="formTicketCount" className="fg">
                            <Form.Label>How many tickets would you like to purchase?</Form.Label>
                            <div className="d-flex col-12 justify-content-center align-items-center mt-3">
                                <button className="ticket-btn rounded-circle" onClick={decrementTicketCount}><AiOutlineMinus /></button>
                                <span className="ticket-count mx-5">{ticketCount}</span>
                                <button className="ticket-btn rounded-circle" onClick={incrementTicketCount}><AiOutlinePlus /></button>
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formPromoCode" className="fg">
                            <Form.Label>Enter the promo code</Form.Label>
                            <Form.Control id="formPromoCode" type="text" onChange={applyPromoCode} placeholder="Enter promo code" className="p-3 mt-2" />
                            <Form.Text>
                                Don't have a promo code? checkout <a href="https://www.instagram.com/flex.lk/">flex.lk</a> for promo codes.
                            </Form.Text>
                        </Form.Group>

                        <hr className="hr" />

                        <h4 className="text-center txt mt-4">Make the payment to the bank account below and attach the receipt in the next step.</h4>
                        <h5 className="text-center txt mt-4">Account Holder: T M P G S T Tennakoon<br />Account Number: 8150933609<br />Commercial bank - Kandy branch</h5>
                        <h5 className="text-center txt my-3">note: Please use your name as the reference. If you use any promo codes mention it in the google form as well. Add at least one ticket to proceed.</h5>

                        <h5 className="text-center txt mt-5">Total payable amount after applying the promotion is shown below</h5>
                        <div className="d-flex justify-content-between mt-5">
                            <h3 className="total">Total: </h3>
                            <h3 className="total">LKR{totalTicketPrice}</h3>
                        </div>

                        <div className="d-flex justify-content-center fg fg-dwn">
                            <button className="checkout-btn" onClick={openGoogleForm} disabled={ticketCount < 1}>Checkout</button>
                        </div>
                    </Form>
                </div>
            </div>
        </React.StrictMode>
    );
}

export default Booking