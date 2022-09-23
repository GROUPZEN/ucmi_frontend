export const menuAnim = {
  hidden: { opacity: 0, y: -1000 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
  exit: {
    y: -1000,
    opacity: 0,

    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
      when: "afterChildren",
    },
  },
};

export const appearList = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    delay: i * 0.3,
    transition: { duration: 0.3 },
  }),
  hidden: { opacity: 0, y: -30 },
};

export const appear = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const navAppear = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const fromBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const heroAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.3 },
  },
};
