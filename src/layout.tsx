import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/navbar';

function Layout() {
  return (
    <Provider store={store}>
      <Navbar />
      <main>
        <div className='container px-4 mx-auto py-10'>
          <Outlet />
        </div>
      </main>
    </Provider>
  );
}

export default Layout;
