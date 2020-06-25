import React from 'react'
import './ImportantInfo.css'

export default function ImportantInfo() {
    return (
        <div className="ImportantInfo">
            <p className="InfoHeader">Important Information</p>
            <p className="Text">
                Carsnip Ltd is authorised and regulated by the Financial Conduct
                Authority (FRN 711949). As a broker, Carsnip does not contract
                directly with consumers on any finance application. Carsnip
                works exclusively with Oodle Car Finance as a lender.
            </p>
            <p className="Text">
                Oodle Car Finance is a trading name of Oodle Financial Services
                Limited whose registered office is at One Callaghan Square,
                Cardiff, CF10 5BT. Finance is subject to status and available to
                UK residents ages over 18 only. Terms and conditions apply. In
                order to be eligible to apply for finance you will need to have
                a gross monthly income in excess of £1,000. Visit{' '}
                <a
                    href="https://oodlecarfinance.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                    title="Oodle Car Finance"
                >
                    https://oodlecarfinance.com/
                </a>{' '}
                for full details.
            </p>
            <p className="Text">
                Please note, if you click on a vehicle picture, you may be
                redirected to the dealer's website. It is possible that each
                dealer has its own panel of lenders and different finance
                options may be available through them.
            </p>
        </div>
    )
}
