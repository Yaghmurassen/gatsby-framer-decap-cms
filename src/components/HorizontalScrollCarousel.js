import React, { useRef } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const Hsc = () => {
  return (
    // <div className="bg-neutral-800">
    //   <div className="flex h-48 items-center justify-center">
    //     <span className="font-semibold uppercase text-neutral-500">
    //       Scroll down
    //     </span>
    //   </div>
    <HorizontalScrollCarousel />
    // <div className="flex h-48 items-center justify-center">
    //  <span className="font-semibold uppercase text-neutral-500">
    //  Scroll up
    // </span>
    // </div>
    // </div>
  );
};

const HorizontalScrollCarousel = ({ children, baseVelocity = 100 }) => {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
  });
  const baseX = useMotionValue(0);

  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);
  const directionFactor = useRef(1);

  // const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
  // const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1], ["1%", "-100%"]);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });

  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30,
  });

  const skewVelocityFactor = useTransform(
    skewVelocity,
    [-1000, 1000],
    [-30, 30]
  );

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -5 * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    if (velocityFactor.get() !== 0) {
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Hsc;

const cards = [
  {
    url: "/img/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/img/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/img/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/img/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/img/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/img/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/img/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
