import React from 'react'
import Featured from './Featured'
import TrustValue from './TrustValue'
import PartnerSlider from './PartnerSlider'
import SendInvoice from './SendInvoice'
import AboutUs from './AboutUs'

const HomePage = () => {
    return (
        <div>
            <PartnerSlider />
            <AboutUs />
            <Featured />
            <TrustValue />
            <SendInvoice />
        </div>
    )
}

export default HomePage