import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TimelineEvent: React.FC<{
  event: { year: string; title: string; description: string };
  index: number;
}> = ({ event, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const animationProps = {
    initial: { opacity: 0, scale: 0.9 },
    animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
    transition: { duration: 0.2, delay: index * 0.05 },
  };

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className={`mb-4 flex w-full flex-col md:mb-16 md:flex-row md:items-center md:justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
    >
      <div className="order-2 bg-clarc-blue md:order-none md:w-5/12"></div>
      <div className="z-20 mb-4 flex items-center md:mb-0 md:flex-col">
        <div className="mr-4 flex items-center justify-center bg-white p-1 text-white/65 md:mb-2 md:mr-0">
          <p className="text-sm font-semibold text-clarc-blue md:text-base">
            {event.year}
          </p>
        </div>
        <div className="h-0.5 w-full flex-1 bg-gray-300 md:h-full md:w-0.5"></div>
      </div>
      <div className="relative order-1 rounded-lg border border-primary/20 bg-clarc-blue/10 p-4 shadow-md md:order-none md:w-5/12">
        <div
          className={`absolute top-1/2 -mt-px hidden h-px bg-gray-300 md:block ${index % 2 === 0 ? "left-full" : "right-full"}`}
          style={{ width: "15%" }}
        ></div>
        <h3 className="mb-2 text-lg font-bold text-clarc-blue">
          {event.title}
        </h3>
        <p className="text-sm text-gray-600/80">{event.description}</p>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      year: "1996",
      title: "Founding of Clarendon Montessori",
      description:
        "Clarendon Montessori was founded by Lucille T. Tesorero in Bagumbayan, Roxas to provide global quality education for preschoolers.",
    },
    {
      year: "1998",
      title: "Expansion to Primary Education",
      description:
        "Encouraged by parents, the Montessori expanded into Primary Education after Engr Juanito A. Bacay purchased a lot in Odiong.",
    },
    {
      year: "2002",
      title: "Renaming to Clarendon College",
      description:
        "Clarendon Montessori was renamed Clarendon College and began offering high school and college departments, including degrees in BEED and BSED.",
    },
    {
      year: "2003",
      title: "Introduction of BSBA Program",
      description:
        "Clarendon College began offering a BSBA program with a major in Business Management.",
    },
    {
      year: "2006",
      title: "First College Graduates",
      description:
        "The college department graduated its first batch of students and the High School Department qualified as an ESC scholarship fund recipient.",
    },
    {
      year: "2015",
      title: "Expansion of Degree Offerings",
      description:
        "Clarendon College added degrees in Elementary and Secondary Education with majors in English, Filipino, Mathematics, Information Systems, and Tourism Management.",
    },
    {
      year: "2017",
      title: "Introduction of Senior High School",
      description:
        "Clarendon College introduced Senior High School as part of the national integration with the ASEAN region.",
    },
    {
      year: "2018",
      title: "Launch of BCAED Program",
      description:
        "Clarendon College became the region's only provider of a Bachelor's in Culture and Arts Education (BCAED).",
    },
    {
      year: "2021",
      title: "Cultural Center Establishment",
      description:
        "Clarendon College opened the first private school cultural center in the region, funded by an innovation grant.",
    },
  ];

  const containerRef = useRef(null);

  const Header = (
    <div id="timeline">
      <header className="mb-5 rounded-sm bg-clarc-blue/100 p-5 text-center lg:mb-10 lg:p-8">
        <h1 className="mb-2 text-2xl font-bold text-clarc-gold sm:text-3xl md:text-4xl">
          The Timeline of Clarendon College
        </h1>
        <p className="text-sm text-clarc-gold/70 sm:text-base md:text-lg">
          A Legacy of Excellence in Education Since 1996
        </p>
      </header>
    </div>
  );
  return (
    <div className="flex-1 pb-10">
      {Header}
      <section ref={containerRef} className="relative mx-auto max-w-4xl">
        <div className="absolute bottom-0 top-0 hidden w-0.5 bg-clarc-gold md:left-1/2 md:flex md:-translate-x-1/2 md:transform" />
        <div className="py-8 md:py-16">
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Timeline;
