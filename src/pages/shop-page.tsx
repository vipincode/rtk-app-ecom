import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addToCart, removeFromCart } from '../redux/slices/cart-slice';
import { fetchAllProduct } from '../redux/slices/product-slice';

const ShopPage = () => {
  const { cart, products } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchAllProduct('http://localhost:3000/products'));
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (products.fetchStatus === 'loading') {
    return <div>Pending...</div>;
  }
  if (products.fetchStatus === 'error') {
    return <div>Error...</div>;
  }

  return (
    <div className='grid grid-cols-4 gap-4'>
      {products.fetchStatus === 'success' &&
        products.data?.map((product) => (
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
                {!cart.cartProductIds.includes(product.id) && (
                  <button
                    className='btn btn-primary btn-sm'
                    onClick={() => dispatch(addToCart(product.id))}
                  >
                    Add to cart
                  </button>
                )}
                {cart.cartProductIds.includes(product.id) && (
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

export default ShopPage;
