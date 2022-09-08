import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SideBar from '../components/SideBar'
import AuthModal from '../components/AuthModal'
import Cart from '../components/Cart'
import SearchModal  from '../components/SearchModal'
import HomeCategory  from '../components/HomeCategory'
import NewProduct from '../components/NewProduct'
import WhyChooseUs from '../components/WhyChooseUs'
import FromOurBlog from '../components/FromOurBlog'
import Footer from '../components/Footer'
import axios from 'axios'
import {selectAllCategories} from '../app/categories/categoriesSlice'
import { useSelector } from 'react-redux'


export async function getServerSideProps(context) {

  const response = await fetch('http://127.0.0.1:5000/categories');
  const data = await response.json();
  
  const response1 = await fetch('http://127.0.0.1:5000/products');
  const data1 = await response1.json();

  const response2 = await fetch('http://127.0.0.1:5000/cooperatives');
  const data2 = await response2.json();
  return {
    props: {
      cooperatives:data2,
      products:data1,
      cats:data,
    },
  }
}

const Home=({cats,products,cooperatives}) => {
  // console.log("🚀 ~ file: index.jsx ~ line 38 ~ Home ~ products", products)
  const categories = cats
  return (
    <div className="font-poppins overflow-y-hidden overflow-y-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-main">
      <Head>
        <title>IntellCap Produit 100% Marocaine</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <main>
        <Header categories={categories}/>
        <Banner />
        <SideBar categories={categories}/>
        <AuthModal />
        <Cart />
        <SearchModal categories={categories}/>
        <HomeCategory categories={categories}/>
        <NewProduct cooperatives={cooperatives} products={products}/>
        <WhyChooseUs />
        <FromOurBlog />
        <Footer />
      </main>
    </div>
  )
}

export default Home
