import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
}

export default Layout;
