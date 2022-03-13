import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js';

export default function App() {
  let cards = data.map(x => 
    <Card 
      img={x.coverImg} 
      rating={x.stats.rating}
      reviewCount={x.stats.reviewCount}
      location={x.location}
      title={x.title}
      price={x.price}
      />
    )

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}
