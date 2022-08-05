
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SideBar from '../components/SideBar'



const Home=() => {
  return (
    <div className="font-poppins">
      <Head>
        <title>IntellCap Produit 100% Marocaine</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Header />
      <Banner />
      <SideBar />
    </div>
  )
}

export default Home
