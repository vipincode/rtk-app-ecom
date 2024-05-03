import data from '../data.json';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addToCart, removeFromCart } from '../redux/slices/cart-slice';

const ProductPage = () => {
  const { cartProductIds } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
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
          <div className='card-body p-3'>
            <h2 className='card-title'>{product.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <strong>${product.price}</strong>
            <div className='card-actions justify-start'>
              {!cartProductIds.includes(product.id) && (
                <button
                  className='btn btn-primary btn-sm'
                  onClick={() => dispatch(addToCart(product.id))}
                >
                  Add to cart
                </button>
              )}
              {cartProductIds.includes(product.id) && (
                <button
                  className='btn btn-primary btn-sm'
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove from cart
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
