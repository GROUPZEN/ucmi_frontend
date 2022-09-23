import React from "react";
import { motion } from "framer-motion";

const Theme = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
      className="theme primary-linear-background"
    >
      <div className="theme__container">
        <div className="theme__name secondary-heading">theme</div>
        <div className="theme__title secondary-heading">
          our year of moving forward
        </div>
        <div className="theme__info">
          <div className="theme__year">2022</div>
          <div className="theme__quotation">
            Deutronomy 1:6; Philipians 3:12-14
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Theme;
