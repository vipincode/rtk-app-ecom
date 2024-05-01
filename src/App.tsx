import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomePage from './pages/home-page';

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
