import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfa]">
      <Header />
      <main className="py-12">
        <div className="w-full mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
          <div className="max-w-[800px] bg-white p-12 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.04),_0_1px_2px_rgba(0,0,0,0.02)] border border-[rgba(94,82,64,0.12)] mx-auto">
            <h1 className="text-[#13323b] text-[32px] mb-2 text-center">Terms of Service</h1>
            <p className="text-[#62708d] text-[14px] mb-6 text-center">Effective Date: October 4, 2025 | Last Updated: October 4, 2025</p>

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Agreement to Terms</h2>
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  By accessing or using HospiceConnectDFW ("we," "our," "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Our Service</h2>
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  HospiceConnectDFW is a free referral service that connects individuals seeking hospice care with licensed hospice agencies in the Dallas-Fort Worth area. We are not a hospice care provider and do not provide medical services, advice, or care.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">What We Do</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">When you submit your information through our website:</p>
                <ul className="mb-6 pl-5 list-disc">
                  <li className="text-[#62708d] leading-[1.6] mb-2">We match you with 2-3 hospice agencies based on your location and needs</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">We share your contact information and inquiry details with these agencies</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">The agencies will contact you directly to discuss their services</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">We receive compensation from agencies for these referrals</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Your Responsibilities</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">By using our service, you agree to:</p>
                <ul className="mb-6 pl-5 list-disc">
                  <li className="text-[#62708d] leading-[1.6] mb-2">Provide accurate and truthful information</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Be at least 18 years of age</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Have the authority to provide information about yourself or others mentioned in your inquiry</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Respond to agencies that contact you in a respectful manner (or simply decline their services if not interested)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Our Commitment</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">We work diligently to:</p>
                <ul className="mb-6 pl-5 list-disc">
                  <li className="text-[#62708d] leading-[1.6] mb-2">Quickly connect you with qualified hospice agencies in your area</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Match you with agencies that meet your specific needs</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Ensure a smooth and respectful referral process</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Respond to your inquiries promptly</li>
                </ul>
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  However, we are a referral service and not a hospice care provider. We do not provide medical services, advice, or direct care.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">What We Don't Guarantee</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">While we make every effort to provide quality referrals, we cannot guarantee:</p>
                <ul className="mb-6 pl-5 list-disc">
                  <li className="text-[#62708d] leading-[1.6] mb-2">The availability or capacity of any specific hospice agency</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">That every agency will accept you as a client (agencies make their own determinations)</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Specific response times from agencies (though we select responsive providers)</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">The quality or outcome of care provided by agencies (each agency operates independently)</li>
                </ul>
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  You are responsible for evaluating agencies, asking questions, verifying credentials, and making your own decisions about which provider to use.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Information Sharing and Consent</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">By submitting your information, you consent to:</p>
                <ul className="mb-6 pl-5 list-disc">
                  <li className="text-[#62708d] leading-[1.6] mb-2">Having your information shared with selected hospice agencies</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Being contacted by these agencies via phone, email, text, or mail</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Our collection and use of your information as described in our Privacy Policy</li>
                </ul>
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  Once your information is shared with an agency, that agency's own privacy practices apply to how they handle your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">No Warranties</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">Our service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee:</p>
                <ul className="mb-6 pl-5 list-disc">
                  <li className="text-[#62708d] leading-[1.6] mb-2">Uninterrupted or error-free service</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">That our website will be secure or free from viruses</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">The accuracy or completeness of information on our website</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Specific results from using our service</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Limitation of Liability</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">To the maximum extent permitted by law:</p>
                <ul className="mb-6 pl-5 list-disc">
                  <li className="text-[#62708d] leading-[1.6] mb-2">We are not liable for any damages arising from your use of our service</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">We are not responsible for the actions, services, or omissions of hospice agencies</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">We are not liable for any medical outcomes, decisions, or care provided by agencies</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Our total liability to you for any claim shall not exceed $100</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Third-Party Services</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">The hospice agencies you connect with are independent third parties. We are not responsible for:</p>
                <ul className="mb-6 pl-5 list-disc">
                  <li className="text-[#62708d] leading-[1.6] mb-2">Their services, pricing, or availability</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Their compliance with laws and regulations</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Any disputes between you and the agencies</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">The quality or outcome of care provided</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Intellectual Property</h2>
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  All content on our website (text, graphics, logos, design) is owned by HospiceConnectDFW and protected by copyright and trademark laws. You may not copy, reproduce, or use our content without permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Your Use of Our Website</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">You agree not to:</p>
                <ul className="mb-6 pl-5 list-disc">
                  <li className="text-[#62708d] leading-[1.6] mb-2">Use our service for any illegal purpose</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Submit false or misleading information</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Attempt to hack, disrupt, or damage our website</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Use automated systems (bots, scrapers) to access our service</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Spam or harass other users or agencies</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">We May Terminate or Suspend Access</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion, including if you:</p>
                <ul className="mb-6 pl-5 list-disc">
                  <li className="text-[#62708d] leading-[1.6] mb-2">Violate these Terms of Service</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Provide false information</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Engage in abusive or inappropriate behavior</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Use our service in a manner that harms us or others</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Changes to These Terms</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">We may update these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our service after changes constitutes acceptance of the updated terms.</p>
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  We will update the "Last Updated" date at the top of this page when we make changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Indemnification</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">You agree to indemnify and hold harmless HospiceConnectDFW, its owners, employees, and partners from any claims, damages, losses, or expenses (including attorney fees) arising from:</p>
                <ul className="mb-6 pl-5 list-disc">
                  <li className="text-[#62708d] leading-[1.6] mb-2">Your use of our service</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Your violation of these Terms</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Your violation of any rights of another person or entity</li>
                  <li className="text-[#62708d] leading-[1.6] mb-2">Information you provide through our service</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Governing Law</h2>
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  These Terms of Service are governed by the laws of the State of Texas, without regard to conflict of law provisions. Any disputes shall be resolved in the courts located in Dallas County, Texas.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Severability</h2>
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">No Agency Relationship</h2>
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  No agency, partnership, joint venture, or employment relationship is created between you and HospiceConnectDFW as a result of these Terms or your use of our service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Entire Agreement</h2>
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and HospiceConnectDFW regarding our service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-[#13323b] text-[20px] mt-8 mb-4 font-semibold">Contact Us</h2>
                <p className="text-[#62708d] leading-[1.6] mb-3">If you have questions about these Terms of Service, please contact us:</p>
                <p className="text-[#62708d] leading-[1.6] mb-2"><strong>HospiceConnectDFW</strong></p>
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  Email: <a className="text-[#2185a1] no-underline hover:text-[#1a6b7d] underline" href="mailto:support@hospiceconnectdfw.com">support@hospiceconnectdfw.com</a>
                </p>
              </section>

              <section className="mb-8">
                <p className="text-[#62708d] leading-[1.6] mb-4">
                  By using HospiceConnectDFW, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </section>
            </div>

            <div className="text-center mt-8">
              <Link className="text-[#62708d] no-underline font-medium hover:text-[#2185a1]" to="/">← Back to Home</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Terms
