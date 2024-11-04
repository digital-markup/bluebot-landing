import { Sparkles } from "lucide-react";

function Description() {
  return (
    <div className="px-4 py-6 rounded-3xl border-2 bg-gradient-to-r from-blue-500/70 to-blue-600 max-w-screen-md md:px-4 h-fit">
      <header className="w-full flex flex-col gap-2 mb-8 pt-4 items-center text-white justify-center">
        <Sparkles className="text-white" size={28} strokeWidth={1.25} />
        <h2 className="text-3xl font-semibold text-center">Meet Bluebot.</h2>
      </header>
      <div className="pb-8 px-4">
        <p className="text-center text-lg font-normal text-white text-balance">
          Bluebot is an AI assistant designed to manage and automate repetitive
          workflows, helping you generate more leads. It specializes in
          providing customers with tailored answers about your product in an
          engaging and non-repetitive manner. <br /> <br /> Bluebot ensures a
          seamless and pleasant customer journey throughout the interaction. At
          the end of each day, you’ll receive a comprehensive report detailing
          customer interactions and analyzing engagement areas so you can
          optimize where needed. <br /> <br /> Bluebot is fully customizable and capable of
          providing essential information without compromising sensitive
          details. If Bluebot aligns with your business needs, please submit the
          form below to be notified when we launch.
        </p>
      </div>
    </div>
  );
}

export default Description;
