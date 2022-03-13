import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js';

export default function App() {
  let cards = data.map(item => (
    <Card
      key={item.id}
      {...item}
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
