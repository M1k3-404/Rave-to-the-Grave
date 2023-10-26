import React from "react";
import "./home.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
    return (
        <React.StrictMode>
            <div className="home">
                <div className="bg-overlay d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="title-text text-center">Rave to the Grave</h1>
                        <div className="bg-black col-7 p-3 mx-auto">
                            <h1 className="title-sub-text text-center m-0">Chapter II</h1>
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <Link to={"/booking"}>
                                <button className="book-btn">Book Now <span><BsArrowRight size={40} className="btn-icon-arrow mx-2" /></span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    );
}

export default Home