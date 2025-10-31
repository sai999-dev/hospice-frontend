import React, { useState } from 'react'
import TextModal from './TextModal'

const Footer = () => {
  const [modalType, setModalType] = useState(null)
  const [modalTitle, setModalTitle] = useState('')

  const openDocument = (e, title, type) => {
    e.preventDefault()
    setModalTitle(title)
    setModalType(type)
  }

  const closeModal = () => {
    setModalType(null)
    setModalTitle('')
  }

  return (
    <footer className="bg-[#13323b] text-[#fcfcfa] pt-8 pb-4 mt-auto">
      <div className="w-full mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'32px', marginBottom:'32px'}}>
          <div>
            <h4 className="text-[#fcfcfa] text-[16px] mb-4 font-semibold">Family Hospice Support Network</h4>
            <p style={{color:'rgba(252, 252, 250, 0.8)', lineHeight:'1.5', marginBottom:'8px'}}>Independent resource center helping Dallas families navigate hospice care decisions</p>
            <p className="text-[16px] font-semibold">Support Line: <a className="text-[#fcfcfa]" href="tel:+12145552273">(972)784-4066</a></p>
          </div>
          <div>
            <h5 className="text-[#fcfcfa] text-[14px] mb-3 font-[550]">Our Services</h5>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">Hospice care guidance</li>
              <li className="mb-2">Medicare navigation</li>
              <li className="mb-2">Agency matching</li>
              <li className="mb-2">Crisis support</li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#fcfcfa] text-[14px] mb-3 font-[550]">Privacy & Compliance</h5>
            <ul className="list-none p-0 m-0">
              <li className="mb-2"><a className="no-underline" style={{color:'rgba(252,252,250,0.8)', transition:'color 150ms cubic-bezier(0.16,1,0.3,1)'}} href="#" onClick={(e)=>openDocument(e,'Privacy Policy', 'privacy')}>Privacy Policy</a></li>
              <li className="mb-2"><a className="no-underline" style={{color:'rgba(252,252,250,0.8)', transition:'color 150ms cubic-bezier(0.16,1,0.3,1)'}} href="#" onClick={(e)=>openDocument(e,'Terms of Service', 'terms')}>Terms of Service</a></li>
              <li className="mb-2">Licensed Healthcare Professionals</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[rgba(252,252,250,0.2)] pt-4 text-center">
          <p className="text-[12px] m-0" style={{color:'rgba(252,252,250,0.6)'}}>&copy; All rights reserved. | Serving Dallas-Fort Worth Area</p>
        </div>
      </div>
      {modalType && (
        <TextModal type={modalType} title={modalTitle} onClose={closeModal} />
      )}
    </footer>
  )
}

export default Footer
