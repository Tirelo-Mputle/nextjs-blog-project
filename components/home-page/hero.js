import React from 'react';
import Image from 'next/image';
import classes from './hero.module.css';
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpg"
          alt="An image of Tirelo Mputle"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Tirelo</h1>
      <p>I blog about my journey as a web developer</p>
    </section>
  );
};

export default Hero;
