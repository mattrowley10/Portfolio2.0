import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0 });
  return (
    <div
      id="about"
      className="about-div pt-12 md:pt-60 lg:pt-52 xl:pt-56 2xl:pt-80"
      ref={ref}
    >
      <motion.p
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 200 }}
        transition={{ duration: 2 }}
        className="about-header text-2xl lg:text-3xl 2xl:text-5xl ml-10 relative top-6 md:top-4 lg:top-14 2xl:top-16"
      >
        About Me
      </motion.p>
      <div className="about-body-div flex">
        <motion.p
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 200 }}
          transition={{ duration: 2 }}
          className="about-body xl:text-2xl ml-10 mr-8 mt-10 md:mr-16 md:mt-8 lg:mt-20  2xl:mt-28"
        >
          Detail-oriented Full Stack Developer with a proven track record in
          JavaScript, HTML, CSS, React, Node.js, and more. Dedicated to
          leveraging technical expertise to excel in problem-solving,
          cross-functional collaboration, integrating diverse data sources, and
          ensuring seamless cross-browser compatibility. Committed to utilizing
          analytical thinking, effective communication, customer-centric
          approaches, decisive decision-making, and fostering positive
          interpersonal relationships to meet and exceed company goals and
          expectations.
        </motion.p>
        <motion.div
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }}
          transition={{ duration: 1.5 }}
          className="tech-img-div"
        >
          <img className="tech-img" src="techimage.jpeg" />
        </motion.div>
      </div>
    </div>
  );
}
