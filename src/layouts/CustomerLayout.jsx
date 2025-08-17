import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryBar from '../components/CategoryBar';
import { Outlet } from 'react-router-dom';

const CustomerLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
         <Navbar/>
         <CategoryBar/>
         <main className='flex-grow'>
             <Outlet/>
         </main>
         <Footer/>
    </div>
  )
}

export default CustomerLayout;