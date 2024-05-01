import { useNavigate } from 'react-router-dom';
import data from '../data.json';

const ProductPage = () => {
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-4 gap-4'>
      {data.products.map((product) => (
        <div
          className='card w-full bg-base-100 shadow-xl'
          key={product.id}
        >
          <figure>
            <img
              src={product.imageUrl}
              alt='Shoes'
              className='w-full h-[150px] object-contain'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{product.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <strong>${product.price}</strong>
            <div className='card-actions justify-end'>
              <button
                className='btn btn-primary btn-sm'
                onClick={() => navigate('/cart')}
              >
                Add to cart
              </button>
              <button className='btn btn-primary btn-sm'>Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
