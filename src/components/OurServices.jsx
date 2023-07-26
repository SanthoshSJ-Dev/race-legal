import React from 'react'
import AccountingAuditAssurance from './AccountingAuditAssurance'
import Advisory from './Advisory'
import Legal from './Legal'
import Tax from './Tax'

const OurServices = () => {
  return (
    <>
      <div className="our_services section" id='services'>
            <h1>Our Services</h1>
            <AccountingAuditAssurance/>
            <Advisory/>
            <Legal/>
            <Tax/>
      </div>
    </>
  )
}

export default OurServices
