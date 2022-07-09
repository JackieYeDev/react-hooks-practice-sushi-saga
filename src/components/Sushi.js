import React, { useEffect, useState } from 'react';

function Sushi({ sushi, handleEmptyPlate, balance }) {
  const [empty, setEmpty] = useState(false);
  function handleClick() {
    if (empty) {
    } else if (balance < sushi.price) {
      console.log(`You cannot afford ${sushi.name}!`);
    } else {
      setEmpty(true);
      handleEmptyPlate(sushi);
    }
  }
  useEffect(() => {
    setEmpty(false);
  }, [sushi]);
  return (
    <div className='sushi'>
      <div className='plate' onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {empty ? null : (
          <img src={sushi.img_url} alt={sushi.name + 'Sushi'} width='100%' />
        )}
      </div>
      <h4 className='sushi-details'>
        {sushi.name}- ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
