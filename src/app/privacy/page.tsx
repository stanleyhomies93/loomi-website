"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#000421]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-[900px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[48px] font-semibold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-[16px] text-white/50">
              Effective Date: 9 March 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-[900px] px-6">
          <motion.div
            className="space-y-6 text-[16px] leading-[1.8] text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Welcome to Loomi Entertainment Group Limited (&ldquo;Loomi,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting the privacy of our clients, visitors, and users of our website at www.loomi.asia or any other website, mobile version of the website, or mobile application operated by Loomi Entertainment Group Limited or its affiliates (collectively, the &ldquo;Website&rdquo;). In this Policy, &ldquo;you&rdquo; refers to any user who provides information, including Personal Information (as defined below), and uses any features of the Website.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, share, and protect Personal Information, Usage Information, or any other information you provide. It also explains how you can access and update your Personal Information and make choices about how your information is used. This Policy does not apply to information collected by other means (including offline) or from other sources.
            </p>
            <p>
              The use of information collected through our Website shall be limited to the purposes outlined in this Privacy Policy.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">1. Information Collection by Loomi</h2>

            <h3 className="text-[20px] font-semibold text-white/90 pt-2">1.1 Data Controller and Data Processor</h3>
            <p>
              Loomi controls, collects, owns, and directs the use of Personal Information and Usage Information on its Website. Loomi is the data controller and data processor with respect to the information collected on the Website. For any questions regarding this Privacy Policy, please contact us via our Website.
            </p>

            <h3 className="text-[20px] font-semibold text-white/90 pt-2">1.2 Legal Basis for Collection and Processing</h3>
            <p>We collect and process information based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your consent at the time of providing Personal Information;</li>
              <li>Legitimate interests, such as fraud prevention, system security, responding to inquiries, operating our network, and improving our Website;</li>
              <li>Compliance with legal obligations or contractual necessity; or</li>
              <li>Protection of vital interests of you or others.</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-white/90 pt-2">1.3 Basic Information</h3>
            <p>
              We may ask for Personal Information that could reasonably identify you, such as your name, email address, company address, and mobile number, when you access the Website or interact with our services. This may include registration, surveys, or other online forms.
            </p>

            <h3 className="text-[20px] font-semibold text-white/90 pt-2">1.4 Additional Information</h3>

            <h4 className="text-[17px] font-semibold text-white/80 pt-1">1.4.1 Cookies</h4>
            <p>
              Loomi may use cookies to understand Website usability trends and improve your experience. Cookies store preferences and help personalize content. You may accept or decline cookies via your browser settings. Declining cookies may affect certain interactive features of the Website.
            </p>

            <h4 className="text-[17px] font-semibold text-white/80 pt-1">1.4.2 Information Collected Automatically</h4>
            <p>
              We may automatically collect Usage Information, such as your browser type, IP address, and URLs that referred you to the Website. If Usage Information is linked to your Personal Information, we treat it as Personal Information under this Privacy Policy.
            </p>

            <h4 className="text-[17px] font-semibold text-white/80 pt-1">1.4.3 Information from Third Parties</h4>
            <p>
              We may supplement information collected from you with data from third parties to improve services, tailor content, or provide opportunities relevant to your interests.
            </p>

            <h3 className="text-[20px] font-semibold text-white/90 pt-2">1.5 Processing of Data</h3>
            <p>
              Loomi processes Personal Information and Usage Information to provide the requested services and for legitimate business purposes. Technical and organizational measures are in place to protect your information, including secure storage and encryption where applicable.
            </p>

            <h3 className="text-[20px] font-semibold text-white/90 pt-2">1.6 User Rights</h3>
            <p>Users may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, correct, or delete Personal Information;</li>
              <li>Withdraw consent for processing where applicable;</li>
              <li>Opt out of promotional communications via the Website;</li>
              <li>Request transfer of Personal Information to another data controller;</li>
              <li>Lodge complaints with supervisory authorities.</li>
            </ul>
            <p>
              Requests will be acknowledged promptly and addressed within a reasonable timeframe.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">2. Use of Information Collected</h2>

            <h3 className="text-[20px] font-semibold text-white/90 pt-2">2.1 Business Purposes</h3>
            <p>
              Loomi does not share Personal Information with third parties without consent, except as required by law. We may use Personal Information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Operate and improve the Website;</li>
              <li>Create aggregated, anonymized information for analysis;</li>
              <li>Investigate violations of policies or fraud;</li>
              <li>Customize content and communications;</li>
              <li>Confirm eligibility to use services;</li>
              <li>Notify users about changes to the Website;</li>
              <li>Comply with legal obligations;</li>
              <li>Conduct market research and improve service quality;</li>
              <li>Reinforce our Terms of Use.</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-white/90 pt-2">2.2 Anonymous Information</h3>
            <p>
              Non-identifiable data such as aggregated statistics may be shared with business partners for analysis or industry insights.
            </p>

            <h3 className="text-[20px] font-semibold text-white/90 pt-2">2.3 Administrative and Legal Reasons</h3>
            <p>
              We may access, use, store, transfer, or disclose information, including Personal Information, to comply with laws, protect our rights, security, or prevent illegal activity.
            </p>

            <h3 className="text-[20px] font-semibold text-white/90 pt-2">2.4 Business Transfer</h3>
            <p>
              In the event of corporate changes (mergers, acquisitions, restructuring), your information may be transferred to a successor entity.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">3. Third-Party Content and Links</h2>
            <p>
              The Website does not include or offer third-party products or services.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">4. Data Transfer</h2>
            <p>
              Your information may be processed in any country where Loomi or its affiliates operate, which may have different data protection laws. Appropriate safeguards are in place to protect your information.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">5. Data Retention</h2>
            <p>
              Personal Information will be retained as long as necessary to provide services. You may request deletion of your information via our Website.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">6. Children</h2>
            <p>
              The Website is not intended for children under 13. We require parental consent before collecting children&apos;s Personal Information, unless otherwise allowed by law.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">7. Security</h2>
            <p>
              We implement industry-standard measures to protect your information. However, no system is completely secure, and transmission of information is at your own risk.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">8. Compromise of Personal Information</h2>
            <p>
              In case of a data breach, Loomi will notify the relevant authorities as required by law.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">9. Contact &amp; Policy Updates</h2>
            <p>
              For questions or concerns about this Privacy Policy, please contact us via our Website. Loomi may update this Privacy Policy at any time. Please check this page periodically for updates.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">10. Change of Information and Account Cancellation</h2>
            <p>
              Users are responsible for maintaining accurate information. Requests to update, rectify, or delete information can be submitted via the Website.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">11. Opt-In Communications</h2>
            <p>
              Users may opt in to receive promotional communications via the Website.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">12. Consent</h2>
            <p>
              By using the Website, you consent to the collection, use, storage, and transfer of your Personal Information as described in this Policy. You may withdraw consent via the Website.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">13. Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of the British Virgin Islands. Disputes shall be resolved exclusively in the courts of the British Virgin Islands.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">14. Amendment</h2>
            <p>
              Loomi may update this Privacy Policy. Material changes will be notified via the Website.
            </p>

            <h2 className="text-[28px] font-semibold text-white pt-6">15. Contact Information</h2>
            <p>
              For any queries or concerns, please contact us through our Website.
            </p>

            <p className="pt-8 text-white/40">
              &copy; 2026 Loomi Entertainment Group Limited
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
