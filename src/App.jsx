import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import { useMediaQuery } from 'react-responsive';
import NavBar from './Common/NavBar';
import NavBarM from './Common/NavBarM';
import HomeM from './Pages/HomeM';
import { useProductsQuery } from './services/ProductsApi';
import HomeLoading from './Pages/HomeLoading';
import { useState } from 'react';
import Cookies from 'js-cookie';
import LogIn from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';

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

  const token = Cookies.get('token')
  return (
 <BrowserRouter>
 <div className=' overflow-y-hidden z-[999] ' >
  {
    token &&   <>
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
    {
      isDesktop &&       <Route exact path={'/'} element={<Home hideMenu={hideMenu} showMenu={showMenu} menu={menu} />}  />

    }{
      isTablet &&       <Route exact path={'/'} element={<Home hideMenu={hideMenu} showMenu={showMenu} menu={menu}/>}  />

    }{
      isMobile &&       <Route exact path={'/'} element={<HomeM/>}  />

    }
    {/* </div> */}
  
    <Route exact path={'*'} element={<Home/>} />
    </Routes>
      
    </div>

 </BrowserRouter>
  )
}

export default App
