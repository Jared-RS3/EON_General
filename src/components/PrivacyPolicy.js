import React from 'react';

// Fields marked with <Tbc> must be replaced with the company's verified
// details before this page goes live.
const Tbc = ({ children }) => <span className="legal-tbc">{children}</span>;

function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="container">
        <header className="legal-header">
          <p className="legal-eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="legal-lede">
            How EON General Supply Company collects, uses and protects your personal
            information, under the Protection of Personal Information Act 4 of 2013
            (POPIA).
          </p>
          <dl className="legal-meta">
            <div>
              <dt>Effective date</dt>
              <dd><Tbc>[DATE POLICY GOES LIVE]</Tbc></dd>
            </div>
            <div>
              <dt>Last updated</dt>
              <dd>23 September 2026</dd>
            </div>
            <div>
              <dt>Version</dt>
              <dd>1.0</dd>
            </div>
          </dl>
        </header>

        <nav className="legal-toc" aria-label="Contents">
          <h2>Contents</h2>
          <ol>
            <li><a href="#s1">Who we are</a></li>
            <li><a href="#s2">What this policy covers</a></li>
            <li><a href="#s3">What we collect</a></li>
            <li><a href="#s4">Why we use it, and our legal basis</a></li>
            <li><a href="#s5">Who we share it with</a></li>
            <li><a href="#s6">Sending information outside South Africa</a></li>
            <li><a href="#s7">Cookies and embedded content</a></li>
            <li><a href="#s8">How we protect your information</a></li>
            <li><a href="#s9">How long we keep it</a></li>
            <li><a href="#s10">Your rights</a></li>
            <li><a href="#s11">Complaints</a></li>
            <li><a href="#s12">Changes and contact details</a></li>
          </ol>
        </nav>

        <article className="legal-body">

          <section id="s1">
            <h2>1. Who we are</h2>
            <p>
              EON General Supply Company (<strong>EON</strong>, <strong>we</strong>,{' '}
              <strong>us</strong>) supplies vehicle and equipment parts and related
              services. We are the <strong>responsible party</strong> for the personal
              information described here, and we are committed to protecting it.
            </p>
            <table className="legal-table">
              <tbody>
                <tr>
                  <th scope="row">Registered name</th>
                  <td>Eon General Supply Company (Pty) Ltd</td>
                </tr>
                <tr>
                  <th scope="row">Registration number</th>
                  <td>2023/868724/07</td>
                </tr>
                <tr>
                  <th scope="row">Address</th>
                  <td>41 Fieldside Avenue, Centenary Park, Durban, KwaZulu-Natal, South Africa</td>
                </tr>
                <tr>
                  <th scope="row">Telephone</th>
                  <td>+27 82 891 2818</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>eongeneral01@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">Information Officer</th>
                  <td>Natania Naidoo &mdash; eongeneral01@gmail.com</td>
                </tr>
              </tbody>
            </table>
            <p>
              Our Information Officer is accountable for our compliance with POPIA. Please
              send all privacy questions, requests and complaints to the address above.
            </p>
            <p className="legal-note">
              These details are also published to meet section 43 of the Electronic
              Communications and Transactions Act 25 of 2002.
            </p>
          </section>

          <section id="s2">
            <h2>2. What this policy covers</h2>
            <p>
              This policy applies to visitors to eongeneral.co.za, customers and people
              who request a quotation, suppliers and their representatives, anyone who
              contacts us by email, phone, WhatsApp or in person, and job applicants.
            </p>
            <p>
              It does not cover websites or services run by other people that we link to
              or embed &mdash; those are governed by their own privacy policies.
            </p>
          </section>

          <section id="s3">
            <h2>3. What we collect</h2>

            <h3>3.1 Information you give us</h3>
            <ul>
              <li><strong>Contact details</strong> &mdash; your name, job title, company name, email address, phone number and delivery or postal address.</li>
              <li><strong>Enquiry details</strong> &mdash; the parts, quantities and specifications you ask about, vehicle or equipment details, delivery requirements, and any documents, parts lists or photographs you send us.</li>
              <li><strong>Correspondence</strong> &mdash; your messages to us and our notes of calls or meetings.</li>
              <li><strong>Account details</strong> &mdash; where we trade with you, company registration and VAT numbers, banking details, credit application and trade references, B-BBEE and tax documents, and the details of your authorised representatives.</li>
              <li><strong>Job applications</strong> &mdash; your CV and anything you include with it.</li>
            </ul>

            <h3>3.2 Information collected automatically</h3>
            <p>
              Ours is a mostly static, informational website. We do not run advertising or
              behavioural tracking on it, and we do not currently use Google Analytics or
              similar tools. Some technical data is still generated in the normal course:
            </p>
            <ul>
              <li><strong>Server logs</strong> &mdash; your IP address, browser, device, operating system and the time of your request, recorded by our hosting provider.</li>
              <li><strong>Airtable</strong> &mdash; our contact and quotation form is provided by Airtable. It receives your technical data when the form loads and your answers when you submit it.</li>
              <li><strong>Google Maps</strong> &mdash; the map on our Contact page sends your IP address to Google and may set cookies.</li>
              <li><strong>Cloudflare</strong> &mdash; we load fonts and stylesheets from Cloudflare&rsquo;s network, which receives your IP address and browser data.</li>
            </ul>
            <p className="legal-note">
              If we introduce analytics or advertising tools in future, we will update this
              policy and, where the law requires it, ask for your consent first.
            </p>

            <h3>3.3 Information from other sources</h3>
            <p>
              We may receive your work contact details from the organisation you represent,
              information from suppliers and couriers involved in your order, and business
              information from public sources such as the CIPC register, trade references or
              &mdash; with your consent &mdash; credit bureaux.
            </p>
            <p>
              We collect information directly from you wherever we can, as POPIA requires,
              and from another source only where POPIA allows it.
            </p>

            <h3>3.4 Do you have to give it to us?</h3>
            <p>
              Giving us your information is voluntary, but the fields marked required on our
              form are the minimum we need to reply or quote. Account, financial and
              verification information is required by law or our internal controls before we
              can open a trading account, extend credit or take payment. If you do not give
              it to us, we cannot deal with you on those terms. We will always tell you at
              the time which information is required.
            </p>

            <h3>3.5 Sensitive information and children</h3>
            <p>
              We do not ask for special personal information such as health, race, religion,
              biometric or criminal records. Where it is unavoidable &mdash; for example race
              recorded in B-BBEE ownership documents &mdash; we process it only where POPIA
              allows and with stricter access controls. Please do not send us identity
              numbers, medical details or similar unless we have specifically asked.
            </p>
            <p>
              Our website and services are aimed at businesses and adults. We do not
              knowingly collect information about children under 18 without a competent
              person&rsquo;s consent. Tell our Information Officer if you believe we have,
              and we will delete it unless the law requires us to keep it.
            </p>
          </section>

          <section id="s4">
            <h2>4. Why we use it, and our legal basis</h2>
            <p>
              POPIA requires a lawful ground for every use of your information. Ours are set
              out below.
            </p>
            <div className="legal-table-scroll">
              <table className="legal-table legal-table-grid">
                <thead>
                  <tr>
                    <th scope="col">What we do</th>
                    <th scope="col">Our lawful basis under POPIA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Answer your enquiry and prepare a quotation</td>
                    <td>Steps taken at your request before a contract, and our legitimate interest in responding to you</td>
                  </tr>
                  <tr>
                    <td>Source, supply, refurbish and deliver parts and services</td>
                    <td>Performance of our contract with you or your organisation</td>
                  </tr>
                  <tr>
                    <td>Open and run accounts, invoice and collect payment</td>
                    <td>Performance of a contract, and compliance with the law</td>
                  </tr>
                  <tr>
                    <td>Assess creditworthiness where you ask for credit terms</td>
                    <td>Your consent, and our legitimate interest in managing credit risk</td>
                  </tr>
                  <tr>
                    <td>Keep accounting, tax and company records</td>
                    <td>Legal obligations under the Companies Act, Tax Administration Act and VAT Act</td>
                  </tr>
                  <tr>
                    <td>Handle warranties, returns, complaints and disputes</td>
                    <td>Performance of a contract, the Consumer Protection Act 68 of 2008, and defending or pursuing legal claims</td>
                  </tr>
                  <tr>
                    <td>Run and secure our website, systems and premises</td>
                    <td>Our legitimate interest in keeping the business secure and working</td>
                  </tr>
                  <tr>
                    <td>Meet B-BBEE, procurement and audit requirements</td>
                    <td>Legal obligations, and our legitimate interest in meeting customer procurement rules</td>
                  </tr>
                  <tr>
                    <td>Consider job applications</td>
                    <td>Steps taken at your request before a contract, and your consent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Where we rely on a legitimate interest, we have weighed it against your rights
              and use only what is necessary. Where we rely on consent, you can withdraw it
              at any time. We will not use your information for an unrelated new purpose
              unless POPIA allows it or you agree.
            </p>
            <p>
              We do not make decisions about you by automated processing alone. Quotations,
              pricing and credit decisions always involve a person.
            </p>
            <p>
              <strong>Marketing:</strong> we do not send marketing emails or newsletters. We
              contact you to answer your enquiry or progress your order. If that changes, we
              will comply with section 69 of POPIA and the Consumer Protection Act, and every
              message will carry a free and easy way to opt out.
            </p>
          </section>

          <section id="s5">
            <h2>5. Who we share it with</h2>
            <p>
              We do not sell, rent or trade your personal information. We share only what is
              necessary, with:
            </p>
            <ul>
              <li><strong>Our people</strong> &mdash; staff and contractors who need it, under confidentiality obligations.</li>
              <li><strong>Our service providers</strong> &mdash; Airtable (our contact form), Google (maps and email), and our website hosting provider and Cloudflare.</li>
              <li><strong>Suppliers, manufacturers, refurbishment partners and couriers</strong> &mdash; to price, source, repair, warranty or deliver your order.</li>
              <li><strong>Banks, payment providers and credit bureaux</strong> &mdash; to take payment and, if you apply for credit, to assess and record it.</li>
              <li><strong>Professional advisors</strong> &mdash; our accountants, auditors, insurers, attorneys and IT providers.</li>
              <li><strong>Regulators, authorities and courts</strong> &mdash; including SARS, the CIPC and the Information Regulator, where the law or a valid order requires it.</li>
              <li><strong>A buyer or successor</strong> &mdash; if our business is sold or restructured, on condition that they protect your information to the same standard.</li>
            </ul>
            <p>
              Where a third party processes information on our behalf as an{' '}
              <strong>operator</strong>, we put a written agreement in place requiring them
              to act only on our instructions, keep it confidential, secure it as POPIA
              requires, and tell us immediately of any breach.
            </p>
          </section>

          <section id="s6">
            <h2>6. Sending information outside South Africa</h2>
            <p>
              Some of our providers &mdash; including Airtable, Google and Cloudflare &mdash;
              store or process information in the United States and elsewhere. Where we trade
              with customers or suppliers in other countries, order information may go there
              too.
            </p>
            <p>
              Section 72 of POPIA only allows this in defined circumstances, and we rely on
              one of them each time: the recipient is bound by a law or agreement giving
              protection substantially similar to POPIA; you have consented; the transfer is
              necessary to perform or conclude a contract with you or in your interest; or it
              is for your benefit and it is not practicable to get your consent. Our
              agreements with these providers include data protection terms, and standard
              contractual clauses where relevant. You can ask our Information Officer about
              the safeguards for any specific transfer.
            </p>
          </section>

          <section id="s7">
            <h2>7. Cookies and embedded content</h2>
            <p>
              A cookie is a small file a website stores on your device. We do not set
              advertising or analytics cookies of our own, but the content we embed may set
              its own:
            </p>
            <div className="legal-table-scroll">
              <table className="legal-table legal-table-grid">
                <thead>
                  <tr>
                    <th scope="col">Source</th>
                    <th scope="col">Where</th>
                    <th scope="col">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Airtable</td>
                    <td>Contact and quotation form</td>
                    <td>Running the form and preventing spam and abuse</td>
                  </tr>
                  <tr>
                    <td>Google Maps</td>
                    <td>Map on the Contact page</td>
                    <td>Delivering the map, plus Google&rsquo;s own security and preference functions</td>
                  </tr>
                  <tr>
                    <td>Cloudflare</td>
                    <td>Site-wide, for fonts and stylesheets</td>
                    <td>Content delivery, performance and security</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              You can block or delete cookies in your browser settings. Blocking these may
              stop the form or map from working, but the rest of the site will still work.
              These providers are responsible for the cookies they set, under their own
              privacy policies.
            </p>
          </section>

          <section id="s8">
            <h2>8. How we protect your information</h2>
            <p>
              Section 19 of POPIA requires us to take appropriate, reasonable technical and
              organisational steps to keep your information safe. We:
            </p>
            <ul>
              <li>serve our website over an encrypted HTTPS connection;</li>
              <li>limit access to staff who need it, using individual accounts, strong passwords and multi-factor authentication where available;</li>
              <li>use reputable providers and bind them to written security and confidentiality terms;</li>
              <li>keep systems, software and antivirus protection up to date;</li>
              <li>back up records and store physical documents securely; and</li>
              <li>review our safeguards and risks periodically.</li>
            </ul>
            <p>
              No method of transmission or storage is completely secure, so we cannot
              guarantee absolute security, and sending information to us over the internet is
              at your own risk.
            </p>
            <p>
              If we have reasonable grounds to believe your information has been accessed or
              taken by an unauthorised person, we will notify you and the Information
              Regulator as soon as reasonably possible, as section 22 of POPIA requires,
              telling you what happened, what we are doing about it and what you can do to
              limit the effects.
            </p>
          </section>

          <section id="s9">
            <h2>9. How long we keep it</h2>
            <p>
              We keep personal information only as long as we need it for the purpose we
              collected it, unless the law requires or allows us to keep it longer.
            </p>
            <div className="legal-table-scroll">
              <table className="legal-table legal-table-grid">
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">How long</th>
                    <th scope="col">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Enquiries and quotations with no order</td>
                    <td>Up to 3 years from last contact</td>
                    <td>Follow-ups, repeat business and evidence of the quote</td>
                  </tr>
                  <tr>
                    <td>Contracts, orders and correspondence</td>
                    <td>5 years from the end of the relationship, longer if a claim is pending</td>
                    <td>Warranties and prescription periods under the Prescription Act 68 of 1969</td>
                  </tr>
                  <tr>
                    <td>Invoices, accounting and tax records</td>
                    <td>At least 5 years</td>
                    <td>Tax Administration Act 28 of 2011 and VAT Act 89 of 1991</td>
                  </tr>
                  <tr>
                    <td>Company records and registers</td>
                    <td>7 years</td>
                    <td>Companies Act 71 of 2008</td>
                  </tr>
                  <tr>
                    <td>Unsuccessful job applications</td>
                    <td>12 months, unless you ask us to keep you on file</td>
                    <td>Recruitment and employment equity records</td>
                  </tr>
                  <tr>
                    <td>Website and server logs</td>
                    <td>Short-term, as set by our hosting and CDN providers</td>
                    <td>Security and diagnostics</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              When a period ends, we delete, destroy or de-identify the information so that it
              cannot be reconstructed.
            </p>
          </section>

          <section id="s10">
            <h2>10. Your rights</h2>
            <p>Under POPIA you have the right to:</p>
            <ul>
              <li><strong>Be told</strong> that we are collecting your information, and if it has been compromised.</li>
              <li><strong>Ask what we hold</strong> about you, free of charge, and request a copy (a prescribed fee may apply to the copy, and we will tell you the amount first).</li>
              <li><strong>Have it corrected or deleted</strong> if it is wrong, out of date, excessive, misleading or unlawfully obtained, or if we are no longer allowed to keep it.</li>
              <li><strong>Object</strong> to processing we base on legitimate interests, on reasonable grounds relating to your situation.</li>
              <li><strong>Withdraw consent</strong> at any time, without affecting what we lawfully did before you withdrew it.</li>
              <li><strong>Object to direct marketing</strong> at any time, at no cost.</li>
              <li><strong>Not be subject</strong> to a decision made solely by automated processing that significantly affects you.</li>
              <li><strong>Complain</strong> to the Information Regulator and take the matter to court.</li>
            </ul>
            <h3>How to use these rights</h3>
            <p>
              Write to our Information Officer at eongeneral01@gmail.com. Tell us which right
              you want to use, what information it relates to, and include proof of identity
              so we know the request is really from you. Objections and correction or deletion
              requests may be made on the POPIA forms (Form 1 and Form 2), available from the
              Information Regulator, and requests for access to a record are made under the
              Promotion of Access to Information Act 2 of 2000 (PAIA) using the form in our{' '}
              <strong>PAIA Manual</strong>, which is available{' '}
              <Tbc>[STATE WHERE: e.g. at eongeneral.co.za/paia-manual]</Tbc> and from our
              Information Officer on request. We will not turn a request down just because it
              was not on the right form, and we will help you put it in the right form if you
              ask.
            </p>
            <p>
              We will respond within the time the law allows and as soon as we reasonably can.
              If we cannot do what you ask, we will tell you why and how to challenge that.
            </p>
            <p className="legal-note">
              Action required: every private body in South Africa must have a PAIA Manual and,
              if it has a website, publish it there. If EON does not yet have one, it should be
              prepared and published alongside this policy.
            </p>
          </section>

          <section id="s11">
            <h2>11. Complaints</h2>
            <p>
              Please give us the chance to put things right first by contacting our
              Information Officer. You can also complain to the Information Regulator at any
              time, using its prescribed Form 5:
            </p>
            <table className="legal-table">
              <tbody>
                <tr>
                  <th scope="row">Information Regulator (South Africa)</th>
                  <td>JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001</td>
                </tr>
                <tr>
                  <th scope="row">Telephone</th>
                  <td>+27 10 023 5200</td>
                </tr>
                <tr>
                  <th scope="row">POPIA complaints</th>
                  <td>POPIAComplaints@inforegulator.org.za</td>
                </tr>
                <tr>
                  <th scope="row">PAIA complaints</th>
                  <td>PAIAComplaints@inforegulator.org.za</td>
                </tr>
                <tr>
                  <th scope="row">Website</th>
                  <td>inforegulator.org.za</td>
                </tr>
              </tbody>
            </table>
            <p className="legal-note">
              Please check these details against the Information Regulator&rsquo;s website
              before publication, as they have changed in the past.
            </p>
          </section>

          <section id="s12">
            <h2>12. Changes and contact details</h2>
            <p>
              We may update this policy as our practices, services or the law change. The
              current version is always on this page, with the version number and date at the
              top. If a change materially affects how we use your information, we will take
              reasonable steps to bring it to your attention.
            </p>
            <table className="legal-table">
              <tbody>
                <tr>
                  <th scope="row">Attention</th>
                  <td>The Information Officer, EON General Supply Company</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>eongeneral01@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">Telephone</th>
                  <td>+27 82 891 2818</td>
                </tr>
                <tr>
                  <th scope="row">Address</th>
                  <td>41 Fieldside Avenue, Centenary Park, Durban, KwaZulu-Natal, South Africa</td>
                </tr>
                <tr>
                  <th scope="row">Business hours</th>
                  <td>Monday to Friday, 08:00 to 17:00 (SAST)</td>
                </tr>
              </tbody>
            </table>
          </section>

          <p className="legal-footer-note">
            This policy is provided for transparency and is not legal advice. It should be
            reviewed by a qualified legal practitioner before publication, and again whenever
            our processing activities change.
          </p>

          <p className="legal-back">
            <a href="#/" className="btn btn-secondary">Back to home</a>
          </p>
        </article>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
