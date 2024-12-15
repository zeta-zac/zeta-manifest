export default function Manifesto() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto z-10 bg-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic font-didot text-[#2F4CE3] text-center">
        Manifesto
      </h1>
      <div className="bg-white border-2 border-blue-50 shadow-flat rounded-lg space-y-12 py-10 px-8">
        <section>
          <h2 className="text-2xl font-semibold text-[#2F4CE3] mb-3">Vision</h2>
          <p className="text-gray-700">
            To preserve the core values of Cardano while driving innovation
            forward, ensuring that the blockchain ecosystem remains secure,
            decentralized, and open-source for the future.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#2F4CE3] mb-3">
            Core Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Determinism in all operations, ensuring predictability and trust
            </li>
            <li>
              EUTXO model for a secure and scalable transaction environment
            </li>
            <li>
              Max Supply discipline to maintain Cardano’s economic integrity
            </li>
            <li>Security as the foundation of every development</li>
            <li>
              Decentralization to empower individuals and eliminate central
              authority corruption and failure
            </li>
            <li>
              Open Source development to foster innovation and collaboration
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#2F4CE3] mb-3">
            Key Initiatives
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Advocate for decentralized finance (DeFi) solutions</li>
            <li>
              Push for innovative user applications that prioritize user needs
              and experience
            </li>
            <li>Identify and expose bad actors to safeguard the community</li>
            <li>
              Position Cardano as the base for a new, decentralized World Order
            </li>
          </ol>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-[#2F4CE3] mb-3">
            Our Commitment
          </h2>
          <p className="text-gray-700">
            Committed to preserving the true essence of Cardano while pushing
            the boundaries of innovation. Me will sniff out bad actors, contrast
            their evil plans, and ensure Cardano remains the foundation for a
            new era of decentralized applications and financial systems.
          </p>
        </section>
      </div>
    </div>
  );
}
