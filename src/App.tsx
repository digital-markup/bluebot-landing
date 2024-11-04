import Badge from "./components/badge";
import ContactUsForm from "./components/contact-us-form";
import Description from "./components/description";
import Navbar from "./components/navbar";
import { ScrollArea, ScrollBar } from "./components/ui/scroll-area";
import { businessItems } from "./lib/constants";
import { Handshake } from "lucide-react";

function App() {
  return (
    <main className="w-full flex flex-col">
      {/*navigation bar  */}
      <header className="">
        <Navbar />
      </header>
      {/* body with image */}
      <div className="w-full h-screen mb-0 flex flex-col">
        <section className="px-8 flex flex-col lg:flex-row justify-center pb-32 items-center gap-14 container mx-auto">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/img/hero-lg-image.svg"
              className="w-full h-[400px] object-cover object-top"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/img/hero-md-image.svg"
              className="w-full h-full"
            />
            <img src="/img/hero-image.svg" alt="hero image" />
          </picture>
          <div className="flex flex-col md:justify-start md:items-start gap-y-8 text-center md:text-start">
            <p className="w-full text-3xl font-semibold text-slate-700 md:text-4xl">
              The <span className="text-blue-500">AI Assistant</span> for Your
              Business
            </p>
            <p className="text-slate-500 text-lg md:w-[500px]">
              Automating Workflows, Engaging Customers, and Delivering Custom
              Insights for Unmatched Business Efficiency.
            </p>
          </div>
        </section>
        <div className="w-full flex flex-grow items-end justify-center">
          <ScrollArea className="w-full h-[120px] relative overflow-hidden bottom-10">
            <div className="flex items-center justify-start gap-x-6 border-t-2 py-6 px-8">
              {businessItems.map((item) => (
                <Badge businessType={item} key={item.id} />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
      <div
        id="about"
        className="p-6 sm:h-screen w-full flex justify-center items-center mt-8 mb-36 md:mt-0 md:mb-0"
      >
        {/* about product description */}
        <Description />
      </div>
      {/* contact us */}
      <section
        id="contact"
        className="px-6 py-8 flex flex-col gap-y-4 bg-blue-100"
      >
        <div className="md:px-80 container mx-auto">
          <header className="w-full flex flex-col gap-2 mb-8 pt-8 items-center justify-center">
            <Handshake className="text-blue-500" size={32} strokeWidth={1.25} />
            <h2 className="text-4xl font-semibold text-center text-blue-600">
              Let&apos;s get in touch.
            </h2>
            <p className="md:text-lg text-slate-500 text-center">
              Subscribe to our service to get notified when we launch
            </p>
          </header>
          <ContactUsForm />
        </div>
      </section>
    </main>
  );
}

export default App;
