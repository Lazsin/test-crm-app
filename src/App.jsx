import './App.css'
import Header from './components/Header'
import SideBar from "./components/SideBar"
import MainBar from './components/MainBar'



export default function App() {

  return (
    <div className='flex bg-[#F2F1F6]'>
      <SideBar/>
      <div className="flex flex-col mx-8 my-4 w-full">
        <Header/>
        <MainBar/>
      </div>
    </div>
  )
}

