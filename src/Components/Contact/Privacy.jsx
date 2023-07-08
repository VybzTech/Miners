import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

const Privacy = ({ showPrivacy, setShowPrivacy }) => {
  const companyLink = "platinumvillemines.com";
  const serviceName = "Platinum Miners Service";
  const companyName = "Platinum Ville Miners";
  const companyMail = "info@platnumvillemines.com";
  const pad = { paddingLeft: 10 };
  if (showPrivacy) {
    return (
      // showPrivacy ? (
      //   // return
      // ReactDOM.createPortal(
      <div
        className={`Privacy ${showPrivacy ? "show" : "noshow"}`}
        // onClick={() => setShowPrivacy(!showPrivacy)}
      >
        <main
        // onClick={() => {
        //   console.log("I am Main");
        // }}
        >
          <header>
            <h1>Privacy Policy and Cookie Policy </h1>
            <aside>
              {/* // onClick={() => setShowPrivacy(!showPrivacy)}> */}
              <button
                onClick={() => {
                  setShowPrivacy((s) => (s = !s));
                }}
              >
                {/* <button onClick={()={setShowPrivacy((s)=>s=!s)}}> */}
                <MdClose />
              </button>
            </aside>
          </header>
          <hr />
          <div className="wrapper">
            <div className="container">
              <h2>Introduction</h2>
              <p>{`
              This is our privacy policy. It tells you how we collect and process data received from you on our website. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.
              If you have any comments on this privacy policy, please email them to ${companyMail}.`}</p>
            </div>
            <div className="container">
              <h2>Who We Are</h2>
              <p>
                {`Here are the details that the `}
                <b>{`Regulation (EU) 2016/679 `}</b>
                {`of the `}
                <b>{`European Parliament`}</b>
                {`and of the Council of 27 April 2016 on the protection of natural persons with regards to the processing of personal data and on the free movement of such data, known as `}
                <b>{`General Data Protection Regulation (GDPR) `}</b>
                {`, which says we have to give you access as a ‘data controller’ on our platform:
              Our Site's address is ${companyLink}.
              Our company's name is ${companyName} Limited.
              Our registered address is Aguiyi Ironsi Street (Merit House) Maitama, FCT Abuja,
              Nigeria.`}
              </p>
            </div>
            {/* <p>{` */}
            <div className="container">
              <h2>What we may collect</h2>
              <p>{`
              We may collect and process the following data about you:
              
              Information you put into forms or surveys on our site at any time
              A record of any correspondence between us
              Details of transactions you carry out through our site
              Details of your visits to our site and the resources you use
              Information about your computer (e.g. your IP address, browser, operating system, etc.) for system administration and to report aggregate information to our advertisers
              Under GDPR we will ensure that your personal data is processed lawfully, fairly, and transparently, without adversely affecting your rights. We will only process your personal data if at least one of the following basis applies:
              `}</p>
              <p>{`
              a) You have given consent to the processing of your personal data for one or more specific purposes;
              `}</p>
              <p>{`
              b) Processing is necessary for the performance of a contract to which you are a party or in order to take steps at the request of you prior to entering into a contract;
              `}</p>
              <p>{`
              c) Information processing is necessary for compliance with a legal obligation to which we are subject;
              `}</p>
              <p>{`
              d) Relationship & Background processing is necessary to protect the vital interests of you or of another natural person;
              `}</p>
              <p>{`
              e) Records are necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller; and/or
              `}</p>
              <p>{`
              f) Processing is necessary for the purposes of the legitimate interests pursued by us or by a third party such as our credit card payment processing, except where such interests are overridden by the fundamental rights and freedoms of the data subject which require protection of personal data, in particular where the data subject is a child.
              `}</p>
            </div>
            <div className="container">
              <h2>Cookies</h2>
              <p>{`The site uses cookies or similar technology to collect information about your access to the site. Cookies are pieces of information that include a unique reference code that a website transfers to your device to store and sometimes track information about you.
              
              A few of the cookies we use last only for the duration of your web session and expire when you close your browser. Other cookies are used to remember you when you return to the site and will last for longer.
              
              All cookies used on our site are set by us.
              
              Most computer and some mobile web browsers automatically accept cookies but, if you prefer, you can change your browser to prevent that or to notify you each time a cookie is set. You can prevent the setting of cookies by adjusting the settings on your browser. Please note however, that by blocking or deleting cookies you may not be able to take full advantage of the site.
              
              Our cookies will be used for:
              
              Essential session management
              
              creating a specific log-in session for a user of the site in order that the site remembers that a user is logged in and that their page requests are delivered in an effective, secure and consistent manner;
              recognising when a user of the site has visited before allowing us to identify the number of unique users we receive to the site and make sure we have enough capacity for the number of users that we get;
              recognising if a visitor to the site is registered with us in any way;
              we may also log information from your computer including the existence of cookies, your IP address and information about your browser program in order to allow us to diagnose problems, administer and track your usage of our site.
              Functionality
              
              customising elements of the promotional layout and/or content of the pages of the site.
              Performance and measurement
              
              collecting statistical information about how our users use the site so that we can improve the site and learn which parts are most popular to users.]
              OR
              
              [We use cookies to distinguish users and improve our site. Please look at our Cookie Policy for more cookie information.]
              [All Cookies used by and on our website are used in accordance with current English and EU Cookie Law.]
              `}</p>
            </div>
            <div className="container">
              <h2>How we use what we collect</h2>
              <p>{`We use information about you to: Present site content effectively to you.
              Provide information, products and services that you request, or (with your consent) which we think may interest you.
              Carry out our contracts with you.
              Allow you to use our interactive services if you want to.
              Tell you our charges.
              Tell you about other goods and services that might interest you. We will also let other people do this, and we (or they) may contact you.
              If you are already our customer, we will only contact you electronically about things similar to what was previously sold to you.
              If you are a new customer, you will only be contacted if you agree to it.
              Please note: We don’t identify individuals to our advertisers, but we do give them aggregate information to help them reach their target audience, and we may use information we have collected to display advertisements to that audience.
              In addition, if you don’t want us to use your personal data for any of the other reasons set out in this section 5, you can let us know at any time by contacting us at ${companyMail}, and we will delete your data from our systems. However, you acknowledge this will limit our ability to provide the best possible services to you.
              In some cases, the collection of personal data may be a statutory or contractual requirement, and we will be limited in the services we can provide you if you don’t provide your personal data in these cases.
              `}</p>
            </div>
            <div className="container">
              <h2>Where we store your data</h2>
              <p>
                {`We may transfer your collected data to storage outside the `}
                <b>{`European Economic Area (EEA)`}</b>
                {`. It may be processed outside the EEA to fulfil your order and deal with payment.
              By giving us your personal data, you agree to this arrangement. We will do what we reasonably can to keep your data secure.
              Payment will be encrypted. If we give you a password, you must keep it confidential. Please don’t share it. Although we try to provide protection, we cannot guarantee complete security for your data, and you take the risk that any sending of that data turns out to be not secure despite our efforts.
              We only keep your personal data for as long as we need to in order to use it as described above in section 5, and/or for as long as we have your permission to keep it. In any event, we will conduct an review to ascertain whether we need to keep your personal data. Your personal data will be deleted if we no longer need it.
              
              `}
              </p>
            </div>
            <div className="container">
              <h2>Disclosing your information</h2>
              <p>
                {`
              We are allowed to disclose your information in the following cases:
              
              If we want to sell our business, or our company, we can disclose it to the potential buyer.
              We can disclose it to other businesses in our group.
              We can disclose it if we have a legal obligation to do so, or in order to protect other people’s property, safety or rights.
              We can exchange information with others to protect against fraud or credit risks.
              We may contract with third parties to supply services to you on our behalf. These may include payment processing, search engine facilities, advertising and marketing. In some cases, the third parties may require access to some or all of your data. These are the third parties that have access to your information:
              
              Yandex.ru, Google.com
              
              Where any of your data is required for such a purpose, we will take all reasonable steps to ensure that your data will be handled safely, securely, and in accordance with your rights, our obligations, and the obligations of the third party under GDPR and the law.
              `}
              </p>
            </div>
            <div className="container">
              <h2>Your rights</h2>
              <p>
                {`You can ask us not to use your data for marketing. You can do this by
               contacting us at any time through the contact section of our website
               or by email: ${companyMail}.
              Under the GDPR, you have the right to:
              request access to, deletion of or correction of, your personal data held by us at no cost to you;
              request that your personal data be transferred to another person (data portability);
              be informed of what data processing is taking place;
              restrict processing;
              to object to processing of your personal data; and
              complain to a supervisory authority.
              You also have rights with respect to automated decision-making and profiling as set out in section 11 below.
              
              To enforce any of the foregoing rights or if you have any other questions about our site or this Privacy Policy, please contact us at ${companyMail}.
              `}
              </p>
            </div>
            <div className="container">
              <h2>Links to other sites</h2>
              <p>{`Please note that our terms and conditions and our policies will not apply to other websites that you get to via a link from our site. We have no control over how your data is collected, stored or used by other websites and we advise you to check the privacy policies of any such websites before providing any data to them.`}</p>
            </div>
            <div className="container">
              <h2>Changes</h2>
              <p>
                {`If we change our Privacy Policy, we will post the changes on this page (and update the “Last updated on --date--”
                reference below). We may revise these Privacy policy without giving prior
              notice, if we decide to, we may also email you. If you do not accept these changes, please may
              stop using the ${serviceName}.             `}
              </p>
            </div>
            <div className="container">
              <h2>Automated Decision-Making and Profiling</h2>
              <p>
                {`A. In the event that we use personal data for the purposes of automated decision-making and those decisions have a legal (or similarly significant effect) on you, you have the right to challenge to such decisions under GDPR, requesting human intervention, expressing their own point of view, and obtaining an explanation of the decision from us.`}
              </p>
              <p>
                {`B. The right described in section A. does not apply in the following circumstances:`}
              </p>
              <p
                style={pad}
              >{`a) the decision is necessary for the entry into, or performance of, a contract between the you and us;`}</p>
              <p style={pad}>{`b) the decision is authorised by law; or`}</p>
              <p style={pad}>{`c) you have given you explicit consent.`}</p>
              <p>{`C. Where we use your personal data for profiling purposes, the following shall apply:`}</p>
              <p
                style={pad}
              >{`a) Clear information explaining the profiling will be provided, including its significance and the likely consequences;`}</p>
              <p
                style={pad}
              >{`b) Appropriate mathematical or statistical procedures will be used;`}</p>
              <p
                style={pad}
              >{`c) Technical and organisational measures necessary to minimise the risk of errors and to enable such errors to be easily corrected shall be implemented; and`}</p>
              <p style={pad}>
                {`d) All personal data processed for profiling purposes shall be secured in order to prevent discriminatory effects arising out of profiling.`}
              </p>
            </div>
            <div className="container">
              <h2>Dispute Resolution</h2>
              <p>{`~ The Parties will use their best efforts to negotiate in good faith and settle any dispute that may arise out of or relate to this Privacy Policy or any breach of it.              `}</p>
              <p>{`~ If any such dispute cannot be settled amicably through ordinary negotiations between the parties, or either or both is or are unwilling to engage in this process, either party may propose to the other in writing that structured negotiations be entered into with the assistance of a fully accredited mediator before resorting to litigation.              `}</p>
              <p>{`~ If the parties are unable to agree upon a mediator, or if the mediator agreed upon is unable or unwilling to act and an alternative mediator cannot be agreed, any party may within 14 days of the date of knowledge of either event apply to LawBite to appoint a mediator under the LawBite Mediation Procedure.              `}</p>
              <p>{`~ Within 14 days of the appointment of the mediator (either by mutual agreement of the parties or by LawBite in accordance with their mediation procedure), the parties will meet with the mediator to agree the procedure to be adopted for the mediation, unless otherwise agreed between the parties and the mediator.              `}</p>
              <p>{`~ All negotiations connected with the relevant dispute(s) will be conducted in confidence and without prejudice to the rights of the parties in any further proceedings.              `}</p>
              <p>{`~ If the parties agree on a resolution of the dispute at mediation, the agreement shall be reduced to writing and, once signed by the duly authorised representatives of both parties, shall be final and binding on them.              `}</p>
              <p>{`~ If the parties fail to resolve the dispute(s) within 60 days (or such longer term as may be agreed between the parties) of the mediator being appointed, or if either party withdraws from the mediation procedure, then either party may exercise any right to seek a remedy through arbitration by an arbitrator to be appointed by LawBite under the Rules of the LawBite Arbitration Scheme.              `}</p>
              <p>{`~ Any dispute shall not affect the parties’ ongoing obligations under this Privacy Policy.              `}</p>
            </div>
          </div>
          <span>Last updated on June 21, 2023.</span>
        </main>
      </div>
    );
  }
  return <></>;
};

export default Privacy;
