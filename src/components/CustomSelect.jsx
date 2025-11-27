import { useState, useEffect, useRef } from 'react'

export default function CustomSelect({ options, value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Закрыть dropdown по клику вне компонента
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const selectedLabel = options.find(opt => opt.value === value)?.label || 'Выберите'

  return (
    <div ref={ref} className="relative w-fit select-none">
      {/* Главное поле */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-white  flex justify-center items-center w-8 h-8 border-0 border-black/20  text-[#0E5C60] font-bold rounded px-3 py-2 focus:outline-none"
      >
<span>{selectedLabel}</span></button>

      {/* Выпадающий список */}
      {open && (
        <ul className="absolute items-center justify-center z-10 mt-1 w-full bg-white border-0  rounded shadow overflow-auto">
          {options.map(opt => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
              className={` flex cursor-pointer items-center justify-center px-3 py-2 hover:bg-[#04141b] hover:text-[#20feff] ${
                opt.value === value ? 'bg-[#04141b] text-white' : 'text-[#0E5C60]'
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
