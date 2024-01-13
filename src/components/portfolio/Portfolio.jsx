import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Photography Portfolio",
        img: "",
        desc: "website to display my photos",
    },
    {
        id: 2,
        title: "Hotel Website",
        img: "",
        desc: "mock hotel website created for a competition",
    },

];

const Single = ({ item }) => {
    return <section>{item.title}</section>;
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Work</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Portfolio;