import { useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
  const [data, setData] = useState({
    name: "kp",
    age: { agee: 26 },
    surname: 'prajapati',
  });
  const { name, age: { agee }, surname } = data


  const handleChange = (event) => {
    const { name, value } = event.target
    setData({ ...data, [name]: value })
  }

  return (
    <>
      <div >
        {
          name + ' ' + agee + ' ' + surname
        }
      </div>
      <input name='name' value={name} onChange={handleChange} />
      <Child />
    </>
  );
}

export default App;
