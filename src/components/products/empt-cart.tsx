import { useNavigate } from 'react-router-dom';

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className='card w-96 bg-neutral text-neutral-content'>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>Cart is Empty!</h2>
        <p>We are using cookies for no reason.</p>
        <div className='card-actions justify-end'>
          <button
            className='btn btn-primary'
            onClick={() => navigate('/products')}
          >
            Back to Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
