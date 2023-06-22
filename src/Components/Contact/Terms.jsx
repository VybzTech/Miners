import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

const Terms = ({ showTerms, setShowTerms }) => {
  const companyLink = "platinumvillemines.com";
  const serviceName = "Platinum Miners Service";
  const companyName = "Platinum Ville Miners";
  // const portal =
  //   document?.getElementById("portal") ?? document?.getElementById("app");
  if (showTerms) {
    return (
      // ReactDOM.createPortal(
      <div
        className={`Terms ${showTerms ? "show" : "noshow"}`}
        // className={`Terms`}
        // className={`Terms&Cond`}
        // onClick={() => setShowTerms(!showTerms)}
      >
        <main
        // onClick={() => {
        //   console.log("I am Main");
        // }}
        >
          <header>
            <h1>Terms & Conditions</h1>
            <aside>
              {/* <button> */}
              {/* <button onClick={() => setShowTerms(!showTerms)}> */}
              <button
                onClick={() => {
                  setShowTerms((s) => (s = !s));
                }}
              >
                <MdClose />
              </button>
            </aside>
          </header>
          <hr />
          <div className="wrapper">
            <div className="container">
              <h2>Introduction</h2>
              <p>{`
  This page tells you the terms on which you may use our website ${companyLink},
  whether as registered user or guest. Please read carefully before use.
  We describe the terms and conditions (the “Terms”) that govern your use of ${companyLink} and the content or related services and products available on/or through ${companyLink} (including mobile applications and newsletters) and (also) any updates, new versions or new releases of those services and products. Individually and collectively, we’ll refer to these services and products as the “${serviceName}”.
  `}</p>
              <p>{`
  The ${serviceName} is provided by Platinum Ville Mines, Ltd. and its groups/affiliates, which we’ll refer to individually and collectively as “Ville affiliates,” “we”, “us”, or “our”.
  `}</p>

              <p>{`
These Terms are for the benefit of each Ville affiliate and each Ville group affiliate may enforce these Terms.
Certain features or components of the ${serviceName} may be subject to additional terms and conditions, including user guidelines or other rules, which will be posted on the applicable ${serviceName}. Those additional terms and conditions are part of these Terms.
  `}</p>

              <p>{`
Please read this page carefully. You agree that by accessing, using and/or downloading the ${serviceName}, you agree to be legally bound and consent to these Terms. If any of these Terms are unacceptable to you, you must stop using the ${serviceName}. For those users who do not complete the registration process, your access to the ${serviceName} may be limited.
  `}</p>

              <p>{`
If you access the ${serviceName} under a group subscription agreement (e.g. Corporations, Organizations, institutions, etc.), then your access and use are also governed by that particular agreement between Ville individuals and your group. You agree that you are bound by and consent to all of these Terms; however if there is any inconsistency or dispute between these Terms and the group subscription agreement, then the terms of the relevant group subscription agreement will prevail to the extent of the inconsistency or dispute.
If you access (or download) the ${serviceName} through any third party platform or ${companyLink}, the applicable terms and conditions for such third party platform or service may apply in addition to these Terms and you agree that you are subject to such application or platforms terms in addition to these Terms.
`}</p>
            </div>
            <div className="container">
              <h2>Age Requirement</h2>
              <p>
                By using the Service, you agree that you are at least 16 years
                old.
              </p>
            </div>
            <div className="container">
              <h2>Changes to Terms</h2>
              <p>{`
               From time to time, we may revise these Terms without giving prior
              notice. If we do make such revisions, we will post an updated
              version on this site (and update the “Last updated on --date--”
              reference below). By continuing to use the ${serviceName} after
              the updated version has been posted, you agree that you accept any
              changes to these Terms. If you do not accept these changes, please
              stop using the ${serviceName}.
              `}</p>
            </div>
            <div className="container">
              <h2>Changes to Digital Products</h2>
              <p>{`
              From time to time, we may make changes to the ${serviceName} without prior notice, which could include modifying,
              discontinuing, or disabling features in the service, or modifying
              the registration options available to users. For example, we may
              automatically update or upgrade the version of the Service you may
              be using on your mobile device. You agree to any such changes and
              agree that these Terms will apply to all such changes.
              `}</p>
            </div>
            <div className="container">
              <h2>Registration</h2>
              <p>{`
              As part of the registration process, you will be required to
              create a user account (including creating a login name and
              password). If you do not complete the registration process, you
              will not be able to access those parts of the Service available to
              registered users.                            You agree and promise that the information
              provided by you to us, including during the registration process,
              is complete and accurate to the best of your knowledge. You will
              promptly inform us of any changes to your information. You are
              not allowed to share your login details or give your login details
              to anyone else. Your registration is for your single use only. You
              are responsible for the use or misuse of any login details you
              create as part of the registration process and for maintaining its
              confidentiality. You must promptly notify us of any actual or
              suspected confidentiality breach or unauthorized use of your login
              details or account by notifying us at the following link:
              https://${companyLink}/#contact. If you fail to comply
              with this Section 6, we may immediately suspend or terminate your
              access and/or registration to the Service.
              `}</p>
            </div>
            <div className="container">
              <h2>Intellectual Property (Copyright)</h2>
              <p>{`
              All the materials on the ${serviceName} — the text, photographs, video,
              audio, graphics, metadata, quotes, data, information, the overall
              “look and feel,” and all protectable intellectual property
              (collectively, the “Content”) - may/may not be the property of ${companyName} or, in
              some cases, its licensors. The Service and Content are protected
              by copyrights, trademarks, design rights, patents, trade secrets,
              database rights, sui generis rights, and other intellectual or
              proprietary rights under U.S. and international laws. You agree
              that all intellectual property rights in the Service and the
              Content (in whole and in part) are and shall remain the property
              of ${companyName} and the ${companyName} group affiliates and/or our licensors.
              No intellectual property rights in the Content or in the Service
              are transferred to you. Except for the limited license described
              herein, you are not conferred any right in the Content or in the
              Service, by implication, estoppel or otherwise, under copyright or
              other intellectual property laws, either now or in the future.
              For further information, including about purchasing re-prints of
              certain Content through our third-party providers, please refer to
              the ${companyName} Copyright page, which is part of these Terms.
              `}</p>
            </div>
            <div className="container">
              <h2>Restrictions on Use</h2>
              <p>
                a.{" "}
                <b>{`
              THE SERVICE AND THE CONTENT IS PROVIDED BY PLATINUM VILLE MINES LIMITED AND ITS
              LICENSORS TO YOU FOR YOUR PERSONAL USE AND INFORMATION ONLY. YOU
              MAY NOT USE THE SERVICE OR THE CONTENT FOR ANY COMMERCIAL PURPOSE.
              `}</b>
              </p>
              <p>{`
              b. You promise that you are accessing, using, and/or registering to
              the ${serviceName} in your personal, individual capacity (except, if
              applicable, where your access falls under a group subscription
              agreement in accordance with Section 1(f)). You agree not to use,
              transfer, distribute, and/or dispose of the Service or Content in
              any manner that could compete with the business of ${companyName} or any
              of its partners. You may not use the Content or Service, including
              without limitation, any Content made available through an RSS
              feed, in any commercial product or service, without our prior
              written consent.
              `}</p>
              <p>{`
               c. Without our prior written consent: You may not
               remove, alter, forward, scrape, frame, in-line link, copy, sell,
              distribute, retransmit, create derivative works or otherwise make
              available (to third parties and/or on another website, app, blog,
              product, or service) the Content, except as occasionally permitted
              by certain sharing features in the Service that explicitly allow
              you to share Content or links to Content with a few other
              individuals. You may not use any robots, spiders, scripts,
              service, software or manual or automatic device, tool, or process
              designed to data mine or scrape the Content, data or information
              from the Service, or otherwise access or collect the Content, data
              or information from the Service using automated means. You may not
              reverse engineer, circumvent, decrypt, decompile, disassemble,
              modify, or otherwise attempt (using services, software, or any
              manual or automatic device, tool, or process) to alter or
              interfere with the Service, any feature or component of the
              Service, any restriction, condition, or technological measure that
              controls access to the Service in any way, or any content in the
              Service; or make any unauthorized use thereof. You may not cache
              or archive the Content (except for a public search engine’s use of
              spiders for creating search indices). You may not access any part
              of the Service or Content that you do not have permission or
              authorization to access or for which we have suspended or
              terminated your access. You may not do anything that imposes an
              unreasonable or disproportionately large load on our network or
              infrastructure. You may not do anything that could disable,
              damage, or otherwise alter or change the functioning,
              transmission, or appearance of the Service or Content, including
              content created by third parties such as advertisers, sponsors, or
              other users.
              `}</p>
              <p>{`
               d. You promise to abide by exclusionary protocols
              (such as Robots.txt, Automated Content Access Protocol (ACAP),
              etc.) that may be used in connection with the Service.
              `}</p>
              <p>{`
               e. Engaging
              in a prohibited use of the Service or Content, or assisting in
              such use, may result in civil liability, criminal prosecution,
              sanctions, or some combination therein, under applicable federal,
              state, or local laws and regulations, or applicable foreign laws,
              rules, regulations, and treaties. Without prejudice to the other
              provisions under these Terms, we also reserve the right to suspend
              or terminate your access and/or use if you breach any of the
              provisions under this Section.
              `}</p>
            </div>
            <div className="container">
              <h2>User-Generated Material</h2>
              <p>{`
              a. The Service may have certain features that allow you or other
              users to comment on, discuss, upload, submit, link to, or
              otherwise provide content (e.g., information, graphics, videos,
              images). We’ll refer to that material collectively as “User
              Material”. User Material is subject to these Terms as well as any
              additional guidelines or rules that are posted on the parts of the
              Service where you can provide User Material. 
              `}</p>
              <p>{`
              b. You agree that you
              will not provide any User Material that: violates anyone’s
              copyright, trademark or other proprietary right; contains any form
              of advertising or promotion for goods and services, or any spam or
              other form of unsolicited communication; is abusive, illegal,
              defamatory, indecent, obscene, pornographic, offensive,
              discriminatory (e.g., on the basis of race, nationality, religion,
              nationality, sex, gender, sexual orientation, age, region, or
              disability), or threatening in any way; encourages anyone to break
              the law; interferes with the privacy of another user; contains
              malware, viruses, spyware, or other software, files, or code
              designed that could interrupt, destroy, limit, or otherwise harm
              the Service; misrepresents your identity, affiliation, or status,
              or otherwise contains false or misleading statements with an
              intent to defraud; collects or stores other users’ personal data;
              uses automated means to upload, submit, or post content; gives
              rise to any liability or violates any applicable local, state,
              federal, national or international law or regulation. 
              `}</p>
              <p>{`
              c. By posting
              User Material, you agree that you are legally permitted to upload,
              submit, or post that User Material. You also agree that you are
              legally and financially responsible for any claims against us by
              any third party relating to your User Material or your posting of
              it.
              `}</p>
              <p>{`
               d. You agree that by uploading, submitting, or posting User
              Material, we have a right unlimited in time to publish, re-use,
              archive, edit, display, modify, delete, or commercially exploit
              that User Material in whole or in part as we see fit, whether on
              the Service or otherwise, without any requirement to pay you or to
              credit you. In other words, by posting User Material you are
              granting us a non-exclusive, transferable, worldwide, fully
              paid-up, royalty-free, perpetual, irrevocable right and license to
              use your User Material in any manner and for any purpose
              whatsoever. You also irrevocably waive any “moral rights” or other
              attribution or authorship rights you may have in the User
              Material. We do not have an obligation to store User Material for
              any period of time, and we may remove or delete any User Material
              for any reason, at any time and without giving you notice.
              `}</p>
            </div>
            <div className="container">
              <h2>Third Party Sites and Services</h2>
              <p>{`
              The Service may include content created by third parties,
              including advertisers, sponsors, or other users. We may also link
              to, reference, or promote websites, applications and/or services
              from third parties. We do not guarantee the accuracy of or
              endorse the views or opinions given by such third parties. We are
              not responsible for, and do not control such non-Platinum websites,
              applications, products, or services. Any dealings you have with
              any third party—including advertisers or sponsors—are solely
              between you and that third party.
              `}</p>
            </div>
            <div className="container">
              <h2>Limitations of Our Service and Content</h2>
              <p>{`
              The Service and Content are provided for informational purposes
              only. You understand that the Content on the Service does not
              constitute any form of tax, legal, or investment advice or opinion
              regarding the suitability, value or profitability of any
              particular security, portfolio or investment strategy. The mention
              of a particular security on the Service does not constitute a
              recommendation for you to buy, sell, refrain from buying, or hold
              that or any other security, financial product, or investment. We
              and our licensors are not liable for any errors, inaccuracies, or
              delays in the Service or any Content, or for any actions taken by
              you in reliance on the Service or Content. You agree that your use
              of the Service or the Content is at your sole risk. We do not
              provide any promises or warranties about the Service or the
              Content, which are provided to you on an “as is” and “as
              available” basis. We do not make any promises about the Service or
              the Content, or of the quality, completeness, or accuracy of the
              Content available on or linked to from the Service. In other
              words, we disclaim all responsibility for any loss, injury claim,
              liability, or damage of any kind resulting or related to your
              access, use, or the unavailability of the Service (or any part
              thereof).
              `}</p>
            </div>
            <div className="container">
              <h2>Export Controls</h2>
              <p>{`
              By using the Services contained herein, you: (a) agree to abide by
              the export and sanctions regulations of Canada, the European
              Union, the United Kingdom and of the United States, including the
              US Export Administration Regulations and the US Office of Foreign
              Assets Control Regulations (collectively, “Trade Regulations”);
              and (b) represent and warrant that you are not a specially
              designated, denied or unverified party as described in such Trade
              Regulations.
              `}</p>
            </div>
            <div className="container">
              <h2>Choice of Law and Jurisdiction</h2>
              <p>{`
              These Terms shall (to the fullest extent permitted under
              applicable law) be governed by and construed in accordance with
              the laws of the State of New York in the United States, without
              giving effect to any principles of conflicts of law. To the
              fullest extent permitted under applicable law, you hereby agree
              that any disputes arising under or in connection with these Terms
              or the Service shall be submitted for resolution to federal and
              state courts in New York County in the State of New York, and you
              hereby waive any jurisdictional, venue or inconvenient forum
              objections to such courts. Any claim or cause of action arising
              out of or related to your use of the Service or these Terms must
              be filed within one year after such claim or cause of action arose
              or be forever barred. Any claim by you that may arise in
              connection with these Terms will be compensable by monetary
              damages and you will in no event be entitled to injunctive or
              other equitable relief. You also hereby expressly waive any right
              to resort to any form of class action.
              `}</p>
            </div>
            <div className="container">
              <h2>General</h2>
              <p>{`
              These Terms contain the entire agreement between us regarding
              your use of the Service and supersedes all previous agreements (if
              any). If a court or other valid authority determines that any
              provision of the Terms is void, invalid, unenforceable, or
              illegal, such provision(s) will be ineffective only to the extent
              of such invalidity or unenforceability and the validity and
              enforceability of the other provisions will remain and not
              otherwise be affected. If we do not enforce any provision of the
              Terms, that will not constitute or be construed as a waiver of
              such a provision or our right to enforce it. d.The United National
              Convention on the International Sale of Goods shall not apply to
              the Terms, the Service, or any Content.
              `}</p>
            </div>
          </div>
          <span>Last updated on June 17, 2023.</span>
        </main>
      </div>
      // ,
      // portal,
      // "Terms"
    );
  }
  // );
  //   //: (
  //   // );
  // }
  return <></>;
};

export default Terms;
