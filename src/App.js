import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    id: 1,
    name: '홍길동',
    image: 'https://placeimg.com/64/64/',
    age: 19,
    gender: '남',
    job: '대학생'
   },
   {
    id: 2,
    name: '홍길서',
    image: 'https://placeimg.com/64/64/',
    age: 13,
    gender: '남',
    job: '대학생'
   },
   {
    id: 3,
    name: '홍길남',
    image: 'https://placeimg.com/64/64/',
    age: 15,
    gender: '남',
    job: '대학생'
   },
   {
    id: 4,
    name: '홍길북',
    image: 'https://placeimg.com/64/64/',
    age: 15,
    gender: '남',
    job: '대학생'
   }
  ];

function App() {
  return (
    <div> 
    {
      customers.map(data => {
        return(
        <Customer
        key={data.id}
        id={data.id}
        customer={data}
          />
        );
        
      })
    }
    </div>
  );
}

export default App; 
