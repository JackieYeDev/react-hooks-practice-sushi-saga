import React, { useEffect, useState } from 'react';
import MoreButton from './MoreButton';
import Sushi from './Sushi';

function SushiContainer({ sushis, handleEmptyPlate, balance }) {
  const [counter, setCounter] = useState({ pos: 0 });
  const [sushiToRender, setSushiToRender] = useState([]);

  useEffect(() => {
    setSushiToRender(sushis.slice(0, 4));
    setCounter({ pos: 4 });
  }, [sushis]);

  function increaseCounter() {
    if (counter.pos >= sushis.length) {
      console.log('There are no more sushi left!');
    } else {
      setCounter({
        pos: counter.pos + 4,
      });

      setSushiToRender(sushis.slice(counter.pos, counter.pos + 4));
    }
  }
  return (
    <div className='belt'>
      {/* Render Sushi components here! */}
      {sushiToRender.map((sushi, index) => {
        return (
          <Sushi
            key={index}
            sushi={sushi}
            handleEmptyPlate={handleEmptyPlate}
            balance={balance}
          />
        );
      })}
      <MoreButton handleClick={increaseCounter} />
    </div>
  );
}

export default SushiContainer;
