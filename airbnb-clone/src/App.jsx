import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import katieZaferes from './images/katie-zaferes.png';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={katieZaferes}
        rating='5.0'
        reviewCount={6}
        country='USA'
        title='Life lessions with Katie Zaferes'
        price={136}
      />
    </div>
  );
}
