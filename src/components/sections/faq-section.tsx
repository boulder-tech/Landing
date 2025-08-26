import FaqItem from "../cards/faq-card";

const FaqSection = () => {
  return (
    <main className="flex w-full h-full main-padding">
      <section className="flex flex-col w- h-full w-full items-start mx-auto py-12 md:py-16">
        <h1 className="font-atyp-display text-3xl 2xl:text-5xl font-light leading-tight text-black sm:w-[800px] mb-6">Frequently Asked Questions</h1>

        <div className=" dark:border-neutral-800 bg-background">
          {/* 1 */}
          <div>
            <h2 className="sr-only">RWA Tokenization</h2>
            <FaqItem question="What is RWA asset tokenization?" defaultOpen>
              <p>
                Asset tokenization is the process of converting ownership rights in real-world assets (RWA)—such as equity, funds, or private companies—into digital tokens on a blockchain. This allows for secure, traceable, and more efficient investing.
              </p>
            </FaqItem>
          </div>

          {/* 2 */}
          <div>
            <FaqItem question="Who can invest?">
              <p>
                Only accredited investors can participate. Each investor goes through a simple verification process to confirm eligibility in accordance with local regulations.
              </p>
            </FaqItem>
          </div>

          {/* 3 */}
          <div>
            <FaqItem question="How are deals selected?">
              <p>
                All opportunities listed are vetted by experienced investors and operators. We run a due diligence process to ensure alignment with our investment standards before tokenization.
              </p>
            </FaqItem>
          </div>

          {/* 4 */}
          <div>
            <FaqItem question="What information do I get as an investor?">
              <p>
                You receive access to deal documentation, legal structure, token terms, and regular investor updates—including quarterly performance reports where applicable.
              </p>
            </FaqItem>
          </div>

          {/* 5 */}
          <div>
            <FaqItem question="I’m a founder — how can I raise with BoulderTech?">
              <p>
                Submit your application through our platform. We review alignment with our investor groups and perform due diligence before structuring and listing the opportunity.
              </p>
            </FaqItem>
          </div>
        </div>
      </section>
    </main>
    
  );
};
export default FaqSection;
