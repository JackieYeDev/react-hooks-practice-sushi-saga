import React, { useEffect, useState } from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';

const API = 'http://localhost:3001/sushis';

function App() {
  const [sushis, setSushis] = useState([]);
  const [emptyPlates, setEmptyPlates] = useState([]);
  const [balance, setBalance] = useState(100);
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setSushis(data));
  }, []);
  function handleEmptyPlate(sushi) {
    setEmptyPlates([...emptyPlates, sushi]);
    setBalance(balance - sushi.price);
  }
  return (
    <div className='app'>
      <SushiContainer
        sushis={sushis}
        handleEmptyPlate={handleEmptyPlate}
        balance={balance}
      />
      <Table plates={emptyPlates} balance={balance} />
    </div>
  );
}

export default App;
