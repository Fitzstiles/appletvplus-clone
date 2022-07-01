import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

import "./faq.css";
const Faq = ({ Data }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg">
      <motion.div className="collapse__container">
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
              <h3>{dataitem.title}</h3>
              {toggle === dataitem.id ? <MdExpandLess /> : <MdExpandMore />}
            </div>
            <AnimatePresence>
              {toggle === dataitem.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  exit={{ opacity: 0 }}
                  className="dataitem__body"
                >
                  <p>{dataitem.body} </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Faq;
