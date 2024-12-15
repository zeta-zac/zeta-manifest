import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-4xl font-bold font-didot text-[#2F4CE3]"
          >
            ZAC
          </Link>
          {/* <ul className="flex space-x-8">
            <li>
              <Link
                href="#manifesto"
                className="text-sm font-medium text-[#2F4CE3] hover:opacity-80 transition-opacity"
              >
                Manifesto
              </Link>
            </li>
            <li>
              <Link
                href="#values"
                className="text-sm font-medium text-[#2F4CE3] hover:opacity-80 transition-opacity"
              >
                Values
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-sm font-medium text-[#2F4CE3] hover:opacity-80 transition-opacity"
              >
                Contact
              </Link>
            </li>
          </ul> */}
        </nav>
      </div>
    </header>
  );
}
