import Head from "next/head";
import Manifesto from "@/app/components/Manifesto";
import { CharacterSuitImage } from "@/app/components/CharacterImages";
import Footer from "./components/Footer";
import ActionsList from "./components/ActionsList";
// import GeometricAnimations from "@/app/components/GeometricAnimations";

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
      <main className="bg-white overflow-x-hidden">
        <div className="relative min-h-screen flex flex-col gap-20  z-10 container mx-auto px-1 md:px-4 pt-14 lg:pt-12">
          <Manifesto />
          {/* <GeometricAnimations /> */}
          <ActionsList />
        </div>

        <div className="my-14"></div>
        <CharacterSuitImage />

        <Footer />
      </main>
    </>
  );
}
