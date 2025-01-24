import Footer from "./Footer";
import Header from "./Header";


const MainLayout = ({ children }) => {
    return (
        <>
            <Header/>
            <main className='bg-[#111A28] text-[#FFFFFF] min-h-screen relative'>{children}</main>
            <Footer/>
        </>
    );
};

export default MainLayout;
