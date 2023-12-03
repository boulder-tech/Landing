import ContactForm from "../ContactForm";

const ContactSection = () => {
    return (
        <div className="h-full mb-64 flex md:flex-row flex-col items-start justify-between gap-10 relative 2xl:px-[300px] lg:px-[150px] md:px-[75px] px-[20px]">
            <span className="absolute animate-tilt z-0 right-[6rem] h-[19rem] xl:w-[82rem] md:w-[71rem] w-[30rem] rounded-[6.25rem] blur-[100px] bg-[#245bff33]" aria-hidden="true"></span>
            <div className="font-atypText flex flex-col gap-6 max-w-[30rem] min-w-[20rem] z-10">
                <h1 className="text-4xl font-medium -tracking-[0.72px] text-transparent bg-clip-text bg-gradient-to-t to-[#FAFBFF] from-[#B3B9CB]">Contact us</h1>
                <div className="text-[#B3B9CB] text-base font-normal flex flex-col gap-3 z-10">
                    <p>Curious about our products or have a query? Drop us a message, and we'll reach out to you promptly.</p>
                    <p>Feel free to connect with us by completing the form or via email at <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#00B2FF] to-[#245BFF]">sales@bouldertech.fi</span></p>
                </div>
            </div>
            <ContactForm/>
        </div>
    )
  };
export default ContactSection;