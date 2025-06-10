export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-blue-100 text-center text-sm p-4 border-t border-yellow-500 z-30">
      © {new Date().getFullYear()} Evan Washington. All rights reserved.
    </footer>
  );
}
