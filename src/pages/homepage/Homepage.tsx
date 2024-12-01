import { Hero } from "../../components/Hero/Hero";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import './Homepage.scss';
import { useRef } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import { trendingProducts } from "../../data/trending-products";

const heroProps = {
  imageUrl: 'https://la.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/collections/lv-skate/Men_LV_Skate_WW_HP_20240927_DI3.jpg?wid=2400',
  imageText: 'Louis vuitton',
  headline: 'Apasionados por la creatividad.',
  button: {
    href: '/kids',
    label: 'Descubre mas'
  }
  };

const Homepage = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ["end end", "start start"]
    });

    const scrollYProgressSpring = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    const translationY = useTransform(
      scrollYProgressSpring,
      [0, 1],
      ["0px", "-205px"]
    );

    const color = useTransform(
      scrollYProgressSpring,
      [0, 1],
      ["#fff", "#000"]
    );    

    const scale = useTransform(
      scrollYProgressSpring,
      [0, 1],
      [1, 0.5]
    );

    const top = useTransform(
      scrollYProgressSpring,
      [0, 1],
      ["150px", "0px"]
    );

    return <>

        <motion.div className="title-wrapper" style={{ top }}>
        <motion.h1
          className="title"
          style={{
            y: translationY,
            scale,
            color,
          }}
        >Louis vuitton</motion.h1>
        </motion.div>
        <Hero {...heroProps} ref={heroRef}/>
        
        <div className='homepage-body'>
          
          <Carousel title="" items={trendingProducts}/>
          <div style={{ width: '100vw'}}>
              <video width="100%" autoPlay muted>
                  <source src="/assets/louisvuitton.mp4" type="video/mp4" />
              </video>
          </div>
        </div>
    </>   
};

export { Homepage };

