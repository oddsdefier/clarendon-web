import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Sparkle, Sparkles } from "lucide-react";
import BackgroundImage from "@/components/BackgroundImage";

import { clarcAssets } from "@/utils/link_images";

const bgImgUrl = clarcAssets.images["old_pic"];
const owlImgUrl = clarcAssets.mascot[3];

const ApplicationSection: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const rotateProgress = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.1]);

  return (
    <section
      className="relative bg-clarc-blue/10 px-4 py-16 lg:py-16"
      id="application-section"
    >
      <BackgroundImage url={bgImgUrl} />
      <div className="container relative z-[99] mx-auto flex flex-col items-center gap-3 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="relative mx-auto flex aspect-square max-w-6xl items-center justify-center lg:max-w-6xl">
            <motion.img
              src={owlImgUrl}
              alt="Application image"
              className="max-w-sm rounded-xl bg-white lg:max-w-lg"
              style={{ rotate: rotateProgress, scale: scaleProgress }}
            />
            <div className="absolute -z-10 h-3/4 w-3/4 -rotate-1 rounded-3xl bg-clarc-white opacity-10" />
          </div>
        </div>
        <div className="flex w-full max-w-sm flex-col items-center justify-center space-y-5 px-4 text-center text-indigo-50 lg:w-1/2 lg:max-w-xl lg:items-start lg:px-0 lg:text-left">
          <h1 className="relative font-astralaga text-xl font-semibold uppercase text-clarc-gold md:text-2xl lg:text-4xl">
            <span className="z-10">Applications Are Open</span>
            <div className="absolute left-0 right-0 top-0 -z-10 h-14 w-full -translate-y-2 bg-clarc-blue blur-lg" />
            <motion.span
              className="absolute"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Sparkles className="absolute -right-2 top-0 h-4 w-4 -translate-y-1 translate-x-2 rotate-12 scale-110 text-white transition-all duration-500" />
            </motion.span>
            <motion.span
              className="absolute -left-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Sparkle className="absolute -left-2 top-0 h-[0.5rem] w-[0.5rem] -translate-x-1 -translate-y-0 -rotate-[45deg] scale-110 text-white transition-all duration-500" />
            </motion.span>
            <motion.span
              className="absolute right-2"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Sparkle className="absolute -left-2 top-0 h-[0.55rem] w-[0.55rem] -translate-x-1 -translate-y-1 -rotate-[19deg] scale-110 text-white transition-all duration-500" />
            </motion.span>
          </h1>

          {/* <h2 className="text-base md:text-2xl font-medium text-white/90">Student Placement Admission to College Education</h2> */}

          <p className="mx-auto max-w-3xl text-base leading-loose text-white/70 md:text-xl lg:mx-0">
            SPACE is Clarendon's admissions portal. Senior high school graduates
            who wish to apply may start the admissions process by uploading
            their personal information here. Be Brave, be an OWL, and Make it
            Clarendon!
          </p>

          <button className="group mt-4 flex w-auto items-center justify-center gap-2 rounded-full border border-indigo-50/40 px-6 py-4 text-base font-semibold text-indigo-100/90 shadow-lg shadow-clarc-blue transition-colors duration-300 hover:border-white hover:bg-clarc-blue hover:text-white focus:outline-none active:bg-clarc-blue lg:text-base">
            <p>Start your CLARC journey here</p>
            <Sparkles className="h-5 w-5 transition-all duration-300 group-hover:rotate-6 group-hover:scale-125 group-hover:text-clarc-gold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
