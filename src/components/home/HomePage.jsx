import React from 'react'
import Featured from './Featured'
import TrustValue from './TrustValue'
import PartnerSlider from './PartnerSlider'

const HomePage = () => {
    return (
        <div>
            <PartnerSlider />
            <Featured />
            <TrustValue />
            <Featured />
        </div>
    )
}

export default HomePage