import { CharacterDeskImage } from "./CharacterImages";

export default function Manifesto() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto z-10 bg-white p-6 lg:px-16 rounded-lg shadow-lg">
      <div className="flex flex-col items-center gap-0 border-b-2 border-[#8397e629]">
        <h1 className="text-[5em] md:text-[10em] lg:text-[12em] font-bold italic font-didot text-[#2F4CE3] text-center mt-4">
          Manifesto
        </h1>
        <CharacterDeskImage />
      </div>

      <div className="space-y-14 py-4 md:py-10 md:px-8 font-geist_sans tracking-wide">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#2F4CE3] mb-3 tracking-wider">
            Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To preserve the core values of Cardano while driving innovation
            forward, ensuring that the blockchain ecosystem remains secure,
            decentralized, and open for the future, ultimately becoming a real
            and tangible Network State
          </p>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#2F4CE3] mb-3 tracking-wider">
            Core Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
            <li>
              <b>Determinism</b> in all operations, ensuring predictability and
              trust
            </li>
            <li>
              <b>Scalability</b> to accommodate future growth and development
            </li>
            <li>
              <b>Max Supply</b> discipline to maintain Cardano’s economic
              integrity
            </li>
            <li>
              <b>Security</b> as the foundation of every development
            </li>
            <li>
              <b>Decentralization</b> to empower individuals and eliminate
              central authority corruption and failure
            </li>
            <li>
              <b>Open Source</b> development to foster innovation and
              collaboration
            </li>
          </ul>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#2F4CE3] mb-3 tracking-wider">
            Key Initiatives
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 leading-relaxed">
            <li>
              Advocate for decentralized finance (<b>DeFi</b>) solutions
            </li>
            <li>
              Push for innovative user applications that prioritize user needs
              and experience
            </li>
            <li>Identify and contrast bad actors to safeguard the community</li>
            <li>
              Position <b>Cardano</b> as the base for a new, decentralized{" "}
              <b>
                {" "}
                <i>World Order</i>
              </b>
            </li>
          </ol>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#2F4CE3] mb-3 tracking-wider">
            Commitment
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Committed to preserving the true essence of Cardano while pushing
            the boundaries of innovation. I will <b>sniff</b> out bad actors,
            counter their evil plans, and ensure Cardano remains the foundation
            for a new era of decentralized applications and financial systems.
          </p>
        </section>
      </div>
    </div>
  );
}
