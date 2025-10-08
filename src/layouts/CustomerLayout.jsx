import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryBar from '../components/CategoryBar';
import { Outlet } from 'react-router-dom';
import WhatsAppChatButton from '../components/WhatsappChatButton';

const CustomerLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
         <Navbar/>
         <CategoryBar/>
         <main className='flex-grow'>
             <Outlet/>
         </main>
         <Footer/>
         <WhatsAppChatButton phoneNumber="919336322822" message="Hi, I have a query!" />
    </div>
  )
}

export default CustomerLayout;