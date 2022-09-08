import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../app/store';
import { Provider } from 'react-redux';
import { fetchUsers } from '../app/users/usersSlice';
import { fetchCategories } from '../app/categories/categoriesSlice';
import { fetchCooperatives } from '../app/cooperatives/cooperativesSlice';
import { fetchMessages } from '../app/messages/messagesSlice';
import {fetchProducts} from '../app/products/productsSlice';
import { getCookie } from 'cookies-next';
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const progress = new ProgressBar({
  size : 4,
  color:"#0ab39c",
  className : "z-100",
  delay :100,
})

Router.events.on(`routeChangeStart` , progress.start);
Router.events.on(`routeChangeComplete` , progress.finish)
Router.events.on(`routeChangeError` , progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  store.dispatch(fetchUsers());
  store.dispatch(fetchCategories());
  store.dispatch(fetchCooperatives());
  store.dispatch(fetchMessages());
  store.dispatch(fetchProducts());
  // store.dispatch(getTotals());

  return <Provider store={store}>
          <ToastContainer />
           <Component {...pageProps} />
        </Provider>
}

export default MyApp
