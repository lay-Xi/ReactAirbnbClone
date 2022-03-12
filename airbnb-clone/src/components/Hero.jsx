import photoGrid from '../images/photo-grid.png';

export default function Hero() {
  return (
    <section className='hero'>
      <img
      className='hero--photo'
        src={photoGrid}
        alt='Collection of photos layed out in a diamond shape'
      />
      <h1 className='hero--header'>Online Experiences</h1>
      <p className='hero--text'>
        Join unique interactive activies led by one-of-a-kind hosts-all without
        leaving your home.
      </p>
    </section>
  );
}
