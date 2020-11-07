import React from 'react';
const foodILike = [
  {
    id: 1,
    name: "Kinchi",
    image: "https://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://images.chosun.com/resizer/LqiOo-kFtKiAUawSeNYkIGIisaQ=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IZOXUQBP4QVT4ONUPAIDA6347M.jpg",
    rating: 4.7
  }
]

function Food({ name, picture }){
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>
}

function App() {
  return (
    <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} />
    ))}
    </div>
    );
 }      

export default App;
