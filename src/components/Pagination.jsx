

// export default function Pagination({ page, totalPages, goPrev, goNext, goToPage }) {
//   return (
//     <div className='pagination flex items-center justify-between mx-4 my-4'>
//       <div className="font-normal text-[12px] leading-5 tracking-[0.2px]" style={{ fontFamily: '"Open Sans", sans-serif' }}>
//         Ilość produktów: {totalPages * 5 /* приблизительно, можно передать реальное число */}
//       </div>
//       <div className="flex items-center ">
//         <button
//           onClick={goPrev}
//           disabled={page === 1}
//           className="flex justify-center items-center w-8 h-8 rounded border-0 bg-[#858585]/20 disabled:opacity-50"
//         >
//           <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M4.83337 8.91667L0.75004 4.83333L4.83337 0.75" stroke="#5F656C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>

//         {/* Номера страниц */}
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
//           <button
//             key={p}
//             onClick={() => goToPage(p)}
//             className={`flex justify-center items-center w-8 h-8 border border-black/20 ${
//               p === page ? ' text-[#42E1E8]' : ''
//             }`}
//           >
//             {p}
//           </button>
//         ))}

//         <button
//           onClick={goNext}
//           disabled={page === totalPages}
//           className="flex justify-center items-center w-8 h-8 rounded border-0 bg-[#858585]/20 disabled:opacity-50"
//         >
//           <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0.75 0.75002L4.83333 4.83335L0.75 8.91669" stroke="#A2A4A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   )
// }



import { useState } from 'react'
import CustomSelect from './CustomSelect'

export default function Pagination({ page, totalPages, goPrev, goNext, goToPage, pageSize, setPageSize }) {
  const options = [
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' },
  ]
  
  return (
    <div className='pagination flex items-center justify-between mx-4 my-4'>
      <div className=" flex gap-1 items-center font-normal text-[12px] leading-5 tracking-[0.2px]" style={{ fontFamily: '"Open Sans", sans-serif' }}>
        Ilość produktów: 
        {/* <select
          className="ml-2 rounded border-0 px-1 py-1 font-black text-[#0E5C60] focus:outline-none focus:focus:border-0"
          style={{ MozAppearance: 'none', msAppearance: 'none', WebkitAppearance: 'none' }}
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
            goToPage(1) // сброс на первую страницу при смене pageSize
          }}
        >
          {[5, 10, 20, 50].map(size => (
            <option className='border-0' key={size} value={size}>{size}</option>
          ))}
        </select> */}
        <CustomSelect
          options={options}
          value={pageSize}
          onChange={(val) => setPageSize(val)}
        />

      </div>

      <div className="flex items-center ">
        <button
          onClick={goPrev}
          disabled={page === 1}
          className="flex justify-center items-center w-8 h-8 rounded border-0 bg-[#858585]/20 disabled:opacity-50"
        >
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.83337 8.91667L0.75004 4.83333L4.83337 0.75" stroke="#5F656C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
            <path d="M0.75 0.75002L4.83333 4.83335L0.75 8.91669" stroke="#A2A4A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
