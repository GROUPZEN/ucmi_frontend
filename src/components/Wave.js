import React from "react";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <motion.div className="menu__line">
      <svg
        width="100%"
        viewBox="0 0 1444 359"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M1443 25.4774C1355.73 17.8184 1125.41 47.0556 902.331 225.276C623.48 448.052 357.282 353.647 173.328 183.318C26.165 47.0556 -1.21721 6.32998 3.48708 3"
          stroke="blue"
          strokeOpacity="0.1"
          strokeWidth="5"
        />
      </svg>
    </motion.div>
  );
};

export default Wave;
