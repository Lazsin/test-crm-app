import './App.css'
import Header from './components/Header'
import SideBar from "./components/SideBar"
import MainBar from './components/MainBar'
import { useState } from 'react';
import SideBarMobile from './components/SideBarMobile';


export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const burger = (
    <svg
      viewBox="0 0 12 12"
      fill="#ffffff"
      stroke="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
    >
      <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="5.5"></rect>
      <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="2.5"></rect>
      <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="8.5"></rect>
    </svg>
  );

  return (
    <div className='flex bg-[#F2F1F6]'>
      {/* Кнопка бургер - видна только на маленьких экранах */}
      <div className="fixed m-5 bg-[#04141b] border border-[#20feff] rounded-full w-10 h-10 flex justify-center items-center lg:hidden z-50">
        <button
          className="flex justify-center items-center w-8 h-8"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          {burger}
        </button>
      </div>

      {/* SideBar */}
      <SideBarMobile isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="hidden lg:flex">
        <SideBar />
      </div>
      <div className="flex flex-col mx-8 my-4 w-full">
        <Header/>
        <MainBar/>
      </div>
    </div>
  )
}

