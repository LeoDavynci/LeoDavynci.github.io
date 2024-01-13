import "./hero.scss"
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variant={textVariants}>VINCE LIN</motion.h2>
                    <motion.h1 variant={textVariants}>Developer and Photographer</motion.h1>
                </motion.div>
            <motion.div className="sliding" variants={sliderVariants} initial="initial" animate="animate">
                    Java HTML CSS React
            </motion.div>
            <div className="imageContainer">
                <img src="/head.png" alt="photo"/>
            </div>
            </div>
        </div>
    )
}

export default Hero