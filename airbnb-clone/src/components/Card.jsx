import star from '../images/star.png';

export default function Card(props) {
  console.log(props)
  return (
    <div className='card'>
      <img
        className='card--image'
        src={props.img}
        alt=''
      />
      <div className='card--stats'>
        <img className='card--star' src={star} alt='red star' />
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount}) • </span>
        <span className='gray'>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className='bold'>From ${props.price}</span> / person
      </p>
    </div>
  );
}
