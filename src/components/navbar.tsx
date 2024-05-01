import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='flex px-4 py-4 border-b border-b-gray-500 justify-between items-center'>
      <Link
        to='/'
        className='text-lg font-bold'
      >
        e-Cart
      </Link>
      <nav className='flex items-center gap-8'>
        <Link to='/products'>Product</Link>
        <Link to='/cart'>Cart(0)</Link>
      </nav>
    </div>
  );
};
