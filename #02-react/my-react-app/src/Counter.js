import React from 'react';

function Counter() {
    const [count, setCount] = React.useState(0);

    function handleClick() {
        setCount(count + 1);
    }
  return (
    <div>
        <h1>
            Hitungan: {count}
        </h1>
        <button onClick={handleClick}>Tambah</button>
    </div>
  )
}

export default Counter;