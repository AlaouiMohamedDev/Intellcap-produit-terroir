import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../app/store';
import { Provider } from 'react-redux';
import { fetchUsers } from '../app/users/usersSlice';
import { fetchCategories } from '../app/categories/categoriesSlice';
import { fetchCooperatives } from '../app/cooperatives/cooperativesSlice';
import { fetchMessages } from '../app/messages/messagesSlice';

function MyApp({ Component, pageProps }: AppProps) {
  store.dispatch(fetchUsers());
  store.dispatch(fetchCategories());
  store.dispatch(fetchCooperatives());
  store.dispatch(fetchMessages());
  return <Provider store={store}>
           <Component {...pageProps} />
        </Provider>
}

export default MyApp
