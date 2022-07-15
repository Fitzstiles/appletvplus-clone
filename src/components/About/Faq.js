import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import "./faq.css";
const Faq = ({ Data }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg">
      <div className="collapse__container">
        <h1>Question? Answers.</h1>
        {Data.map((dataitem) => (
          <div className="dataitem">
            <div
              key={dataitem.id}
              onClick={() => {
                if (dataitem.id === toggle) {
                  setToggle(null);
                } else {
                  setToggle(dataitem.id);
                }
              }}
              className="dataitem__header"
            >
              <motion.h3>{dataitem.title}</motion.h3>
              {toggle === dataitem.id ? <MdExpandLess /> : <MdExpandMore />}
            </div>
            <AnimatePresence>
              {toggle === dataitem.id && (
                <div className="dataitem__body">
                  <motion.p
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    {dataitem.body}
                  </motion.p>
                </div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
