"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
              Terms &amp; Conditions
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
              Welcome to Loomi Entertainment Group Limited (&ldquo;Loomi,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using our services, including our website and mobile applications (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms &amp; Conditions (&ldquo;Terms&rdquo;). Please read these Terms carefully. If you do not agree, do not use our Services.
            </p>

            <h2 className="text-[24px] font-semibold text-white pt-4">1. Acceptance of Terms</h2>
            <p>
              By using our Services, you confirm that you understand and agree to these Terms, including any additional guidelines or rules posted within our Services. Loomi may update these Terms at any time, and continued use of the Services constitutes acceptance of such updates.
            </p>

            <h2 className="text-[24px] font-semibold text-white pt-4">2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use our Services. If you are under 18, you may only use our Services under the supervision of a parent or legal guardian. You must provide accurate and complete information when creating an account and are responsible for maintaining the confidentiality of your account credentials.
            </p>

            <h2 className="text-[24px] font-semibold text-white pt-4">3. Use of Services</h2>
            <p>
              Loomi grants you a limited, non-exclusive, non-transferable license to access and use the Services for personal, non-commercial purposes.
            </p>
            <p>
              You may not use the Services to infringe any third-party rights, violate applicable laws, or upload harmful, offensive, or illegal content.
            </p>
            <p>
              Loomi may suspend or terminate your access for violations of these Terms.
            </p>

            <h2 className="text-[24px] font-semibold text-white pt-4">4. User Content</h2>
            <p>
              You retain ownership of content you submit (&ldquo;User Content&rdquo;), but you grant Loomi a worldwide, royalty-free, sublicensable license to use, distribute, and display your User Content in connection with the Services.
            </p>
            <p>
              You are solely responsible for your User Content and any consequences arising from its submission. Loomi does not guarantee the accuracy, integrity, or quality of User Content.
            </p>

            <h2 className="text-[24px] font-semibold text-white pt-4">5. Restrictions</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the Services for unlawful purposes.</li>
              <li>Attempt to interfere with the Services&apos; security or functionality.</li>
              <li>Use automated systems or bots to access or collect content from the Services.</li>
              <li>Impersonate Loomi or any other person or entity.</li>
            </ul>

            <h2 className="text-[24px] font-semibold text-white pt-4">6. Disclaimers</h2>
            <p>
              The Services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; Loomi does not guarantee that the Services will be uninterrupted, error-free, or secure. To the fullest extent permitted by law, Loomi disclaims all warranties, express or implied.
            </p>

            <h2 className="text-[24px] font-semibold text-white pt-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Loomi shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Services, including any loss of data, profits, or goodwill.
            </p>

            <h2 className="text-[24px] font-semibold text-white pt-4">8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Loomi, its affiliates, officers, and employees from any claims, damages, liabilities, or expenses arising from your use of the Services, violation of these Terms, or infringement of third-party rights.
            </p>

            <h2 className="text-[24px] font-semibold text-white pt-4">9. Termination</h2>
            <p>
              Loomi may suspend or terminate your account or access to the Services at any time, without notice, for violations of these Terms or other policies. Termination does not limit any other rights or remedies available to Loomi.
            </p>

            <h2 className="text-[24px] font-semibold text-white pt-4">10. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the British Virgin Islands. Any disputes arising under or in connection with these Terms shall be resolved exclusively in the courts of the British Virgin Islands.
            </p>

            <h2 className="text-[24px] font-semibold text-white pt-4">11. Changes to Terms</h2>
            <p>
              Loomi may revise or update these Terms from time to time. The latest version will always be available on our website. Your continued use of the Services constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-[24px] font-semibold text-white pt-4">12. Contact</h2>
            <p>
              For any questions or concerns regarding these Terms, please contact us via our website at www.loomi.asia.
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
