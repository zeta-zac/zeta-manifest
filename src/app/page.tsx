import { CharacterSuitImage } from "@/app/components/CharacterImages";
import Manifesto from "@/app/components/Manifesto";
import Head from "next/head";
import Footer from "./components/Footer";
import RationaleCard from "./components/RationaleCard";
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
				<div className="relative min-h-screen flex flex-col gap-8 z-10 container mx-auto px-1 md:px-4 pt-14 lg:pt-12">
					<Manifesto />
					<RationaleCard />
					{/* <GeometricAnimations /> */}
				</div>

				<div className="my-32" />
				<CharacterSuitImage />

				<Footer />
			</main>
		</>
	);
}
