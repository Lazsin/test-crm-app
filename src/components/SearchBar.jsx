import { icons } from '../assets/icons'

export default function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className='searchbar flex justify-between max-w-1/2 items-center px-4 py-6'>
      <input
        className='w-full mr-4 px-4 py-2 border border-[#c2cee2] text-black' 
        type="text"
        placeholder='Szukaj'
        value={searchQuery}
        onChange={e => onSearchChange(e.target.value)}
      />
      <div className="font-normal text-[12px] leading-[100%]" style={{ fontFamily: '"Days One", sans-serif', letterSpacing: '0' }}>
        <button
          className='addproduct flex items-center gap-1 px-6 py-2 rounded-[30px] border border-[#22FEFF] text-white'
          style={{ background: 'radial-gradient(83.55% 73.47% at 50.21% 26.53%, #08293A 0%, #05212E 99.48%)' }}
          onClick={() => onSearchChange(searchQuery)} // Можно оставить для кнопки — обновить фильтр
        >
          {icons.search} Szukaj
        </button>
      </div>
    </div>
  )
}
