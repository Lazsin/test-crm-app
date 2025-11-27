import icon_table from "/icon_table.png"
import { tableData } from '../mock/tableData'
import { useState } from 'react'
import { icons } from '../assets/icons'

export default function TableProduct(){
  const [filter, setFilter] = useState("Wszystkie");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  // Подсчёты
  const allCount = tableData.length;
  const activeCount = tableData.filter(item => item.status === "Aktywne").length;
  const unpublishedCount = tableData.filter(item => item.status === "Nieopublikowane").length;

  // Фильтрация
  const filteredData =
    filter === "Wszystkie"
      ? tableData
      : tableData.filter(item => item.status === filter);

  // Пагинация
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  // Обработчики кнопок
  const goPrev = () => {
    if (page > 1) setPage(page - 1);
  }
  const goNext = () => {
    if (page < totalPages) setPage(page + 1);
  }
  const goToPage = (p) => {
    setPage(p);
  }

  return(
    <div className='main bg-[#FFFFFF] rounded-[10px] h-full'>
      <div className='navbar flex justify-between items-center px-4 py-6'>
        <div className='togglebutton flex justify-center gap-4'>
          {[
            { label: 'Wszystkie', count: allCount },
            { label: 'Aktywne', count: activeCount },
            { label: 'Nieopublikowane', count: unpublishedCount },
          ].map(({ label, count }) => (
            <div
              key={label}
              className={`font-normal text-[16px] leading-[100%] cursor-pointer px-2 py-1 rounded ${
                filter === label
                  ? 'rounded-[30px] border border-[#22FEFF] text-white'
                  : 'text-black'
              }`}
              style={{
                fontFamily: '"Days One", sans-serif',
                letterSpacing: '0.3px',
                ...(filter === label
                  ? {
                      background: 'radial-gradient(83.55% 73.47% at 50.21% 26.53%, #08293A 0%, #05212E 99.48%)',
                    }
                  : {}),
              }}
              onClick={() => {
                setFilter(label);
                setPage(1); // сбрасываем на первую страницу при смене фильтра
              }}
            >
              <button>{label}</button> ({count})
            </div>
          ))}
        </div>
      </div>

      <div className='searchbar flex justify-between max-w-1/2 items-center px-4 py-6'>
        <input className=' w-full mr-4 px-4 py-2 border border-[#c2cee2] text-[#c2cee2]' type="text" placeholder='Szukaj' />
        <div className=" font-normal text-[12px] leading-[100%]" style={{ fontFamily: '"Days One", sans-serif', letterSpacing: '0' }}>
          <button className='addproduct flex items-center gap-1 px-6 py-2 rounded-[30px] border border-[#22FEFF] text-white'
                  style={{background: 'radial-gradient(83.55% 73.47% at 50.21% 26.53%, #08293A 0%, #05212E 99.48%)',}}>
            {icons.search} Szukaj
          </button>
        </div>
      </div>

      <div className='table_sec px-4'>
        <table className="min-w-full border-collapse border-0" >
          <thead>
            <tr className='bg-[#D8D8D8] text-left'>
              <th className='min-w-[50px] px-4 py-2 border-0'><img className='w-6 h-[21px]' src={icon_table} alt='icon-table'/></th>
              <th className="font-semibold px-2 text-nowrap text-[12px] leading-[18px] align-middle tracking-normal">Nazwa produktu</th>
              <th className="font-semibold px-2 text-nowrap text-[12px] leading-[18px] align-middle tracking-normal">Status</th>
              <th className="font-semibold px-2 text-nowrap text-[12px] leading-[18px] align-middle tracking-normal">Cena</th>
              <th className="font-semibold px-2 text-nowrap text-[12px] leading-[18px] align-middle tracking-normal">Łączna liczba kupionych</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map(({ id, icon, productName, status, price, totalBought }, index) => (
              <tr
                key={id}
                className={`border-t border-black/10 shadow-[inset_0px_-1px_0px_0px_#E8E8E8] ${
                  index % 2 === 0 ? 'bg-[#f6f6f6]' : 'bg-[#ffffff]'
                }`}
              >
                <td className='w-[50px] px-4 py-2 border-0'>
                  <img className="w-6 h-[21px]" src={icon} alt={`${productName} icon`} />
                </td>
                <td className="font-semibold px-2 text-nowrap text-[12px] leading-[18px] align-middle tracking-normal">
                  {productName}
                </td>
                <td
                  className={`font-semibold px-2 text-nowrap text-[12px] leading-[18px] align-middle tracking-normal ${
                    status === 'Aktywne' ? 'text-[#34C759]' : 'text-[#FF383C]'
                  }`}
                >
                  {status}
                </td>
                <td className="font-semibold px-2 text-nowrap text-[12px] leading-[18px] align-middle tracking-normal">
                  {price}
                </td>
                <td className="font-semibold px-2 text-nowrap text-[12px] leading-[18px] align-middle tracking-normal">
                  {totalBought}
                </td>
                <td>
                  <div className="flex items-center justify-center gap-2">
                    <button>{icons.delete}</button>
                    <button>{icons.accept}</button>
                    <button>{icons.edit}</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='pagination flex items-center justify-between mx-4 my-4'>
        <div className="font-normal text-[12px] leading-5 tracking-[0.2px]" style={{ fontFamily: '"Open Sans", sans-serif' }}>
          Ilość produktów: {filteredData.length}
        </div>
        <div className="flex items-center ">
          <button
            onClick={goPrev}
            disabled={page === 1}
            className="flex justify-center items-center w-8 h-8 rounded border-0 bg-[#858585]/20 disabled:opacity-50"
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.83337 8.91667L0.75004 4.83333L4.83337 0.75" stroke="#5F656C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Номера страниц */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`flex justify-center items-center w-8 h-8 border border-black/20 ${
                p === page ? ' text-[#42E1E8]' : ''
              }`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={goNext}
            disabled={page === totalPages}
            className="flex justify-center items-center w-8 h-8 rounded border-0 bg-[#858585]/20 disabled:opacity-50"
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.75 0.75002L4.83333 4.83335L0.75 8.91669" stroke="#A2A4A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
