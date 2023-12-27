import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "example 1",
    img: "https://images.pexels.com/photos/19596017/pexels-photo-19596017/free-photo-of-cahaya-pria-orang-orang-wanita.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores distinctio exercitationem quae totam, eaque quasi quis soluta laudantium, nemo est, harum nulla unde. Repellat aperiam perferendis quos necessitatibus inventore.",
  },
  {
    id: 2,
    title: "example 2",
    img: "https://images.pexels.com/photos/19588427/pexels-photo-19588427/free-photo-of-laut-pemandangan-matahari-terbenam-pantai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores distinctio exercitationem quae totam, eaque quasi quis soluta laudantium, nemo est, harum nulla unde. Repellat aperiam perferendis quos necessitatibus inventore.",
  },
  {
    id: 3,
    title: "example 3",
    img: "https://images.pexels.com/photos/19639369/pexels-photo-19639369/free-photo-of-laut-pemandangan-matahari-terbenam-pantai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores distinctio exercitationem quae totam, eaque quasi quis soluta laudantium, nemo est, harum nulla unde. Repellat aperiam perferendis quos necessitatibus inventore.",
  },
  {
    id: 4,
    title: "example 4",
    img: "https://images.pexels.com/photos/19639245/pexels-photo-19639245/free-photo-of-laut-fajar-pemandangan-matahari-terbenam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores distinctio exercitationem quae totam, eaque quasi quis soluta laudantium, nemo est, harum nulla unde. Repellat aperiam perferendis quos necessitatibus inventore.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="image" />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
