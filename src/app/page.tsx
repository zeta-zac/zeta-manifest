import Head from "next/head";
import Manifesto from "@/app/components/Manifesto";
import CharacterImage from "@/app/components/CharacterImage";
import GeometricAnimations from "@/app/components/GeometricAnimations";

export default function Home() {
  return (
    <>
      <Head>
        <title>Z Manifest</title>
        <meta
          name="description"
          content="A vision for positive change and representation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="relative min-h-screen overflow-hidden bg-white">
          <div className="relative z-10 container mx-auto px-4 pt-32 lg:pt-48">
            <div className="grid lg:grid-cols-4 gap-0 items-center">
              <CharacterImage />

              <div className="col-span-3">
                <Manifesto />
              </div>
            </div>

            <GeometricAnimations />
          </div>
        </div>
      </main>
    </>
  );
}
