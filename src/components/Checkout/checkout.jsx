import React from 'react'
import './checkout.css'

function checkout() {
    return (
        <div className='checkout-bg'>
            <div className='bg-ov d-flex justify-content-center align-items-center'>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdcv4rDC3ifUCSJwBeFIDMFj84onYkQxe_l-4v2ElXxEgzNUQ/viewform?embedded=true" className="col-12 py-5 px-3 frm">Loading…</iframe>
            </div>
        </div>
    )
}

export default checkout