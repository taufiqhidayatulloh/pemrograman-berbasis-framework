import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import ToDoList from './ToDoList';

function Header() {
  return (
    <header>
      <h1>Hello World</h1>
    </header>
  )
}

function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya!</h2>
      <p>Ini adalah area konten utama</p>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Aplikasi React Saya</p>
    </footer>
  )
}

function Example() {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(0);
  const [email, setEmail] = React.useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <div>
      <input type='text' placeholder='nama' value={name} onChange={handleNameChange} />
      <input type='number' placeholder='umur' value={age} onChange={handleAgeChange} />
      <input type='email' placeholder='email' value={email} onChange={handleEmailChange} />
      <p>{name} berumur {age} tahun dan emailnya adalah {email}</p>
    </div>
  )
}


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="Ahmad" />
      <Counter />
      <Example />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;