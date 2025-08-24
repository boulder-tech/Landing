import FaqItem from "../cards/faq-card";

const FaqSection = () => {
  return (
    <main className="flex md:px-8 w-full h-full">
      <section className="flex flex-col w- h-full w-full items-start mx-auto max-w-5xl py-12 md:py-16">
        <h1 className="font-atyp-display text-3xl 2xl:text-5xl font-light leading-tight text-black w-[800px] mb-6">
          Frequently Asked Questions
        </h1>

        <div className=" dark:border-neutral-800 bg-background">
          {/* 1 */}
          <div className="px-4 md:px-6">
            <h2 className="sr-only">RWA Tokenization</h2>
            <FaqItem question="What is RWA asset tokenization?" defaultOpen>
              <p>
                Asset tokenization is the process of converting ownership rights in real-world assets (RWA)—such as equity,
                funds, or private companies—into digital tokens on a blockchain. This allows for secure, traceable, and more
                efficient investing.
              </p>
            </FaqItem>
          </div>

          {/* 2 */}
          <div className="px-4 md:px-6">
            <FaqItem question="Who can invest?">
              <p>
                Accredited and eligible investors according to the regulations of their jurisdiction. We perform KYC/AML and
                compliance checks before enabling investing access.
              </p>
            </FaqItem>
          </div>

          {/* 3 */}
          <div className="px-4 md:px-6">
            <FaqItem question="How are deals selected?">
              <p>
                Each opportunity goes through due‑diligence covering team, financials, legal structure, and token mechanics.
                Only deals that meet our risk and governance standards are listed.
              </p>
            </FaqItem>
          </div>

          {/* 4 */}
          <div className="px-4 md:px-6">
            <FaqItem question="What information do I get as an investor?">
              <p>
                You’ll receive offering documents, regular updates, NAV/metrics when applicable, and on‑chain transparency of
                token supply and movements.
              </p>
            </FaqItem>
          </div>

          {/* 5 */}
          <div className="px-4 md:px-6">
            <FaqItem question="I’m a founder — how can I raise with BoulderTech?">
              <p>
                Tell us about your company and funding needs. We’ll assess fit, structure the vehicle, and guide you through
                tokenization, compliance, and listing.
              </p>
            </FaqItem>
          </div>
        </div>
      </section>
    </main>
    
  );
};
export default FaqSection;
