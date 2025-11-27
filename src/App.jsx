import './App.css'
import Header from './components/Header'
import SideBar from "./components/SideBar"
import TableProduct from './components/TableProduct'



export default function App() {

  return (
    <div className='flex bg-[#F2F1F6]'>
      <SideBar/>
      <div className="flex flex-col mx-8 my-4 w-full">
        <Header/>
        <TableProduct/>
      </div>
    </div>
  )
}

