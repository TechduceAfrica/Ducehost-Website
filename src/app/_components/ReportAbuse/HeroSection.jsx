import { heroDataCopy } from "@/copyContents/ReportAbuseCopy";
import Image from "next/image";
import React from "react";
import style from "./ReportAbuse.module.css";
import ReportAbuseForm from "./Form";
import { motion } from "framer-motion";
import SectionWrapper from "@/app/hoc/SectionWrapper";
import { fadeIn } from "@/app/utils/motion";

const HeroSection = () => {
  return (
    <section className={`${style.hero__section} container__width`}>
      <div>
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: heroDataCopy.title }}></h1>
          <p>{heroDataCopy.body}</p>
        </div>
        <div>
          <Image
            src={heroDataCopy.img}
            alt={heroDataCopy.alt}
            title={heroDataCopy.alt}
            width={heroDataCopy.width}
            height={heroDataCopy.height}
          />
        </div>
      </div>
      <motion.div variants={fadeIn("left", "spring", 0.2, 0.75)}>
        <p>{heroDataCopy.formDesc}</p>
        <ReportAbuseForm />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(HeroSection, "");
