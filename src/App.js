import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';

function App() {
  const nayoks=['Razzak','Alamgir','SalmanShah','Manna','Riyaz','Sakib']

  const products=[
    {name:'photoshop',price:'90.60$'},
    {name:'Illustrator',price:'60.60$'},
    {name:'AutoCad',price:'40.50$'}
  ]
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter></Counter>

        <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
        </ul>

        <Users></Users>
        <Products product= {products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products>
        <Person name='Yeasin' job="Student"></Person>
        <Person name='Arafat' job="Student"></Person>
        <Person name='Fahad' job="Student"></Person>
      </header>
    </div>
  );

  function Counter(){
    const [count, setCount] =useState(0);
   


    return(
      <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> setCount(count + 1)}>Increase</button>
        <button onClick={()=> setCount(count - 1)}>Decrease</button>
      </div>
    )
  }

  function Users(){
    const[users, setUsers] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>res.json())
      .then(data=>setUsers(data));
    }, [])
    return(
      <div>
        <h3>Dynamic Users:{users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.email}</li>)
          }
        </ul>
      </div>
    )
  }
  function Person(props){
    const style={
      color:'black',
      backgroundColor:'cyan',
      borderRadius:'20px',
      width:'500px',
      margin:'15px'
    }

    return(
      <div style={style}>
        <h1 >Name:{props.name}</h1>
        <p>Profession:{props.job}</p>
      </div>
    )
  }
  function Products(props){
    const button={
      color:'white',
      backgroundColor:'black',
      borderRadius:'10px',
      height:'40px'
    }
    const productStyle={
      color:'black',
      backgroundColor:'skyblue',
      border:'10px solid red',
      borderRadius:'10px',
      width:'400px',
      margin:'15px',
      padding:'10px'
    }
    const {name, price}=props.product;
    return(
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button style={button}>Buy Now</button>
      </div>
    )
  }

  
  
 
}

export default App;
