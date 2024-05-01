import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decrement, increment, incrementByAmount } from '../redux/slices/counter-slice';

const HomePage = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className='container px-4 mx-auto'>
      <h1 className='text-3xl font-bold underline text-center my-10'>Hello world!</h1>
      <div className='my-10  flex justify-center items-center flex-col'>
        <h1 className='py-10 text-center'>{counter}</h1>
        <div className='flex space-x-4 flex-1'>
          <button
            className='btn btn-primary'
            onClick={() => dispatch(increment())}
          >
            + Increment
          </button>
          <button
            className='btn btn-secondary'
            onClick={() => dispatch(decrement())}
          >
            + Decrement
          </button>
          <button
            className='btn btn-secondary'
            onClick={() => dispatch(incrementByAmount(2))}
          >
            + Increment by Amount
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
