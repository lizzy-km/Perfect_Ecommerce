import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import { useMediaQuery } from 'react-responsive';
import NavBar from './Common/NavBar';
import NavBarM from './Common/NavBarM';
import HomeM from './Pages/HomeM';
import { useProductsQuery } from './services/ProductsApi';
import HomeLoading from './Pages/HomeLoading';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import LogIn from './Pages/Auth/LogIn';
import SignUp from './Pages/Auth/SignUp';
import Cart from './Pages/Cart';
import CartM from './Pages/CartM';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })

  const[menu,setMenu] = useState(' flex flex-col gap-4 absolute buttonBlur  top-[0%] right-[-15rem] z-[9999999] h-auto p-[1rem] w-[10rem] ')

  const showMenu =()=>{
    setMenu(' flex flex-col gap-4 absolute menuBlur  top-[0%] right-[0rem] z-[9999999] h-auto p-[1rem] w-[10rem] ')
  }
  const hideMenu =()=>{
    setMenu(' flex flex-col gap-4 absolute buttonBlur  top-[0%] right-[-15rem] z-[9999999] h-auto p-[1rem] w-[10rem] ')

  }

  
  const data = useProductsQuery()
  const loading = data?.isLoading
  console.log(data?.isLoading);

  const token = Cookies.get('token')
  
  return (
 <BrowserRouter>
 <div className=' overflow-x-hidden z-[999] ' >
  {
    loading===false && token &&   <>
    {
    isDesktop && <NavBar hideMenu={hideMenu} showMenu={showMenu}/>
   }{
    isTablet && <NavBar hideMenu={hideMenu} showMenu={showMenu} />
   }{
    isMobile && <NavBarM/>
   }
    </>
  }

 
 
    <Routes className='z-[-1]' >
    <Route exact path={'/login'} element={<LogIn/>}  />
    <Route exact path={'/signup'} element={<SignUp/>}  />
    {/* <div  > */}
    {
      loading===true && <Route exact path={'/'} element={<HomeLoading/>}  />
    }
    {/* {
      !token && <Route exact path={'/'} element={<LogIn/>}  />
    } */}
    {
      isDesktop &&       <>
      <Route exact path={'/'} element={<Home hideMenu={hideMenu} showMenu={showMenu} menu={menu} />}  />
                        <Route exact path={'/cart'} element={<Cart hideMenu={hideMenu} showMenu={showMenu} menu={menu} />}  />

      </>
      
    }{
      isTablet &&      <>
      <Route exact path={'/cart'} element={<Cart hideMenu={hideMenu} showMenu={showMenu} menu={menu} />}  />
      <Route exact path={'/'} element={<Home hideMenu={hideMenu} showMenu={showMenu} menu={menu}/>}  />

      </> 

    }{
      isMobile &&     <>
       <Route exact path={'/'} element={<HomeM/>}  />
      <Route exact path={'/cart'} element={<CartM  />}  />
      </>
       

    }
    {/* </div> */}
  
    <Route exact path={'*'} element={<Home/>} />
    </Routes>
      
    </div>

 </BrowserRouter>
  )
}

export default App
