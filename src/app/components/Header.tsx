import Link from "next/link";
import ActionsList from "./ActionsList"; // Import ActionsList

export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
			<div className="container mx-auto px-4 flex items-center justify-between h-20">
				<nav className="">
					<Link
						href="/"
						className="text-4xl font-bold font-didot text-[#2F4CE3]"
					>
						ZAC
					</Link>
				</nav>
				<ActionsList />
			</div>
		</header>
	);
}
