import React, {useEffect, useState} from 'react';

import './App.css';

function App() {
  const person= {name:"Md. Dalwer Hossain",
  age:45,
  singer:"ATN"

};

const person2={
  name:"Sakh saddi",
  age:25,
  singer:"world class",
  job:"singer"
}

const style={
  color:'red',
  backgroundColor:'yellow'

}
const nayoks=['Anwar','alomgir','salman','josim','shuvo'];
const products=[{name:'photoshop', price:'$90.99'},
                {name:'illustratator', price:'$68.99'},
                {name:'PDF reader', price:'$10.56'},
                {name:'primer Elements',price:'$6.5'}
]

const friends=[ {name:'Jahid',age:'22'},
                {name:'arob' ,age:'23' },
                {name:'safik',age:'26'}
]
const nayokNames=nayoks.map(nayok=>nayok);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
        {nayoks.map(nayok => <li>{nayok}</li>)}
         {
           products.map(product=> <li>{product.name}</li>)
         }
         {
           friends.map(friend=> <li>{friend.name}</li>)
           
         }
         {
           friends.map(friend=> <li>{friend.age}</li>)
         }
        </ul>
        {/* <Products name={products[0].name} price={products[0].price}></Products> */}
        {
          products.map(pd=> <Products product={pd}></Products>)
        }
        {/* <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products> */}


        {/* <Person name={nayoks[0]} nayika='diza'></Person>
        <Person name='arob' nayika='anika'></Person> */}
        
        {
          friends.map(friend => <Friends friends={friend}></Friends>)
        }
        
      </header>
    </div>
  );
}


function Products(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgrey',
    height:'300px',
    width:'400px',
    margin:'10px',
    float:'left'
  }
  const {name,price}=props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>buy Now</button>
    </div>
  )
}

function Friends(props){
  const friendsStyle={
    backgroundColor:'goldenrod',
    color:'white',
    height:'300px',
    width:'400px',
    border:'1px solid red',
    borderRadius:'5px',
    padding:'10px',
    margin:'10px'

  }
  const {name,age} = props.friends;
  return(
    <div style={friendsStyle}>
      <h1>{name}</h1>
      <p>His age {age}</p>
    </div>

  )
}


function Counter(){
  const [count, setCount]= useState(0);
  
  const handleIncrease = () => setCount(count+1);
 
  //[result, set Result]
  return(
    <div> 
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => setUsers(data));
  },[])

  const userStyle={
    color:"white",
    backgroundColor:'goldenrod',
    margin:'10px',
    padding:'20px',
    border:'5px solid blue'

  }
  return(
    <div style={userStyle}>
      <h3>Dynamic users:{users.length}</h3>
      <ul>
        {
        users.map(user => <li>{user.name}</li>)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
//its a component
function Person(props){
  
  const personStyle={
    color:"white",
    backgroundColor:'goldenrod',
    margin:'10px',
    padding:'20px',
    border:'5px solid blue'

  }
  return(
    <div style={personStyle}>

      <h1>Hero:{props.name} </h1>
      <h1>Heroien:{props.nayika}</h1>
      <h3>Number 1 all rounder in ODI</h3>
      
      </div>
    

  )
    
}


export default App;
