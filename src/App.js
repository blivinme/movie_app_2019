import React from 'react';

function Food({ name, picture }){
  return <div>
    
  </div>I like {name}</h1>;
}

const foodILike = [
  {
    name: "Kinchi",
    image: "ㅇㄹㅇㄹㅇㄹㅇㄹ"
  },
  {
    name: "Samgyeopsal",
    image: "ㅇㄹㅇㄹㅇㄹㅇㄹ"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
 }      

export default App;
