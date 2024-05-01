import EmptyCart from '../components/products/empt-cart';
import data from '../data.json';

const CartPage = () => {
  return (
    <>
      <div className='max-w-[1000px] mx-auto'>
        {data.products.map((product) => (
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
              <div className='cursor-pointer'>Remove</div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-5 items-center my-10'>
        <button className='btn btn-primary'>Clear Cart</button>
        <button className='btn btn-primary'>Checkout</button>
      </div>
      <div className='flex justify-center items-center my-10'>
        <EmptyCart />
      </div>
    </>
  );
};

export default CartPage;
