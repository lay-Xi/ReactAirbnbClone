import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js';

export default function App() {
  let cards = data.map(item => (
    <Card
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  ));

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='card-list'>{cards}</section>
    </div>
  );
}
