// Home.js
"use client";

import React, { useEffect } from 'react';
import './styles.css';

export default function Home() {
  useEffect(() => {
    const title = document.querySelector('.title');
    if (title) {
      title.classList.add('animate__animated', 'animate__fadeInDown');
      return () => {
        title.classList.remove('animate__animated', 'animate__fadeInDown');
      };
    }
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Welcome to Game Store</h1>
        <p className="description">Explore the best collection of games!</p>
      </header>
      <main className="games">
        <div className="game">
          <img src="https://image.api.playstation.com/vulcan/ap/rnd/202207/0615/eicVspHDlt11H1xtnsw5dgkz.png" alt="Horizon: Call of the mountain" />
          <h2>Horizon: Call of the mountain</h2>
        </div>
        <div className="game">
          <img src="https://korobok.store/upload/iblock/902/qu3kk6tmdzga3ai6vkr4wt13y8tqu3d1.jpg" alt="Battlefield 1" />
          <h2>Battlefield 1</h2>
        </div>
        <div className="game">
          <img src="https://image.api.playstation.com/vulcan/ap/rnd/202112/0618/DvgI2YCsRCEXWw3zkBkjO1wD.png" alt="CoD: Black ops cold war" />
          <h2>CoD: Black ops cold war</h2>
        </div>
        <div className="game">
          <img src="https://i.redd.it/i976aq70v6zb1.jpg" alt="GTA VI" />
          <h2>GTA VI</h2>
        </div>
        <div className="game">
          <img src="https://masterpiecer-images.s3.yandex.net/8fc11ca6ac6011ee8b2cd6f07e64960d:upscaled" alt="Cyberpunk 2077" />
          <h2>Cyberpunk 2077</h2>
        </div>
        {/* Add more games here */}
      </main>
    </div>
  );
}
