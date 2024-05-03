import EmptyCart from '../components/products/empt-cart';
import data from '../data.json';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { clearCartItems, removeFromCart } from '../redux/slices/cart-slice';

const CartPage = () => {
  const { cartProductIds } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const cartProductData = data.products.filter((product) => cartProductIds.includes(product.id));
  // const totalPrice = cartProductData.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)
  return (
    <>
      {cartProductIds.length > 0 && (
        <div className='grid grid-cols-12'>
          <div className='col-span-8'>
            {cartProductData.map((product) => (
              <div key={product.id}>
                <div className='flex items-center border-b border-b-gray-500 py-6'>
                  <div className='w-[100px]'>
                    <img
                      src={product.imageUrl}
                      alt=''
                      className='w-[63px] h-[62px]'
                    />
                  </div>
                  <div className='flex-1'>
                    <h3>{product.name}</h3>
                    <strong>${product.price}</strong>
                  </div>
                  <div
                    className='cursor-pointer'
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    Remove
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='col-span-4'>
            <div className='flex flex-col gap-5 pl-10 my-10'>
              <h1>
                Total Price: <strong className='text-3xl pl-10'>$1200</strong>
              </h1>
              <button className='btn btn-primary'>Checkout</button>
              <button
                className='btn btn-primary'
                onClick={() => dispatch(clearCartItems())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
      {cartProductIds.length < 1 && (
        <div className='flex justify-center items-center my-10'>
          <EmptyCart />
        </div>
      )}
    </>
  );
};

export default CartPage;
