import React, { useState } from "react";
import "./booking.css";
import Form from "react-bootstrap/Form";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

function Booking() {
    const [ticketCount, setTicketCount] = useState(0);

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

    const totalTicketPrice = ticketCount * 1800;

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
                            <Form.Control id="formPromoCode" type="text" placeholder="Enter promo code" className="p-3 mt-2" />
                        </Form.Group>

                        <hr className="hr" />

                        <h3 className="text-center txt mt-4">Proceed to the provided form to complete your reservation</h3>
                        <h5 className="text-center txt mb-0">Note: Below mentioned amount will be the total. Enter the promo code in Google form</h5>

                        <div className="d-flex justify-content-between fg">
                            <h3 className="total">Total: </h3>
                            <h3 className="total">LKR{totalTicketPrice}</h3>
                        </div>

                        <div className="d-flex justify-content-center fg fg-dwn">
                            <Link to={"/checkout"}>
                            <button className="checkout-btn">Checkout</button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </React.StrictMode>
    );
}

export default Booking