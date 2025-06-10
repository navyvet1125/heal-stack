import Image from "next/image";

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export default function Main({ children, className = "" }: MainProps) {
  return (
    <main
      className={`relative flex-1 w-full flex min-h-screen items-stretch justify-center text-center px-4 sm:px-6 md:px-8 bg-fixed bg-gradient-to-tr from-blue-900 via-blue-500 to-blue-900 text-gray-900 ${className}`}
    >
      <Image
        src="/Reiki_Kanji.png"
        alt="Reiki Kanji Watermark"
        className="fixed inset-0 mx-auto my-auto opacity-7 w-4/5 h-3/4 max-w-xl pointer-events-none select-none z-20"
        width={768}
        height={768}
        priority
      />

      <div className="flex flex-col min-h-screen px-4 w-4xl bg-gradient-to-b from-white to-gray-100 bg-opacity-90 rounded-none shadow-none py-10 z-10">
        {children}
      </div>
    </main>
  );
}
