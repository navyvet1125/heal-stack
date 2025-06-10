import CTAButton from "@/components/CTAButton";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 z-20">
    {/* <div className="absolute top-0 left-0 flex flex-col w-full bg-white items-center justify-center min-h-screen px-6 z-20"> */}

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-blue-900">
        Welcome to the healing stack.
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-8 justify-center mx-auto leading-relaxed">
        I’m Evan Washington — a holistic facilitator blending spiritual care, embodied healing, music, baking, and full-stack development.
      </p>
      <div className="flex flex-wrap gap-4 justify-center bg-white/10 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg p-6 max-w-lg mx-auto z-30">
        <CTAButton href="/services">Explore Services</CTAButton>
        <CTAButton href="/mission">Read the Mission</CTAButton>
      </div>
    </div>
  );
}
