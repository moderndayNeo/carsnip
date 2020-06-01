import React from 'react'
import './Main.css'
import MainWrapper from './MainWrapper/MainWrapper'
import Newsletter from './Newsletter/Newsletter'

export default function Main() {
    return (
        <div className="Main">
            <div className="main-container">
                <MainWrapper />
                <Newsletter />
   
                        <p className="FCAHeader-sc-1rit0kn-0 jSASAO">
                            Important Information
                        </p>
                        <p className="FCAText-y2pe7b-0 icPCyf">
                            Carsnip Ltd is authorised and regulated by the
                            Financial Conduct Authority (FRN 711949). As a
                            broker, Carsnip does not contract directly with
                            consumers on any finance application. Carsnip works
                            exclusively with Oodle Car Finance as a lender.
                        </p>
                        <p className="FCAText-y2pe7b-0 icPCyf">
                            Oodle Car Finance is a trading name of Oodle
                            Financial Services Limited whose registered office
                            is at One Callaghan Square, Cardiff, CF10 5BT.
                            Finance is subject to status and available to UK
                            residents ages over 18 only. Terms and conditions
                            apply. In order to be eligible to apply for finance
                            you will need to have a gross monthly income in
                            excess of £1,000. Visit{/* */}{' '}
                            <a
                                href="https://oodlecarfinance.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                                title="Oodle Car Finance"
                            >
                                https://oodlecarfinance.com/
                            </a>{' '}
                            {/* */}for full details.
                        </p>
                        <p className="FCAText-y2pe7b-0 icPCyf">
                            Please note, if you click on a vehicle picture, you
                            may be redirected to the dealer's website. It is
                            possible that each dealer has its own panel of
                            lenders and different finance options may be
                            available through them.
                        </p>
 


            </div>
        </div>
    )
}
