import { Card, CardContent } from "@/components/ui/card";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
      <Card className="w-full max-w-3xl mx-4 bg-black/30 backdrop-blur-sm border-none">
        <CardContent className="p-8 space-y-4">
          {/* Name with slide-in animation */}
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text slide-in">
              Neeraj Gaur
            </h1>
          </div>

          {/* Role with Typewriter effect */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 fade-in">
              <Typewriter
                words={["Frontend Developer", "", "Mern Stack Developer"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>

          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              Crafting elegant web experiences with modern technologies.
              Building responsive and user-friendly interfaces.
            </p>
            <a
              href="/Neerajgaur.pdf"
              download="Neeraj_Gaur_CV.pdf"
              className="inline-block rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 p-4 text-sm text-white mb-10 hover:bg-slate-800 transition-all hover:scale-105 duration-300"
            >
              Download CV
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hero;
