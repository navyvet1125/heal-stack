import Link from "next/link";
import Nav from "./Nav";
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white p-4 shadow-md z-30">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="hover:cursor-pointer flex flex-col items-center sm:items-start">
            <h1 className="text-2xl font-bold text-white">Evan Washington</h1>
            <p className="text-sm text-amber-400">
              Heal-stack developer & holistic facilitator
            </p>
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
}
