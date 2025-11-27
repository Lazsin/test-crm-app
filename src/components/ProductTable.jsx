import { icons } from '../assets/icons'
import icon_table from "/icon_table.png"

export default function ProductTable({ data, onDelete, onEdit }) {
  return (
    <div className='table_sec px-4'>
      <table className="min-w-full border-collapse border-0">
        <thead>
          <tr className='bg-[#D8D8D8] text-left'>
            <th className='min-w-[50px] px-4 py-2 border-0'>
              <img className='w-6 h-[21px]' src={icon_table} alt='icon-table' />
            </th>
            <th className="font-semibold px-2 md:text-nowrap   text-[12px] leading-[18px] align-middle tracking-normal">Nazwa produktu</th>
            <th className="font-semibold px-2 md:text-nowrap text-[12px] leading-[18px] align-middle tracking-normal">Status</th>
            <th className="font-semibold px-2 md:text-nowrap text-[12px] leading-[18px] align-middle tracking-normal">Cena</th>
            <th className="font-semibold px-2 md:text-nowrap text-[12px] leading-[18px] align-middle tracking-normal">Łączna liczba kupionych</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, icon, productName, status, price, totalBought }, index) => (
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
                  <button onClick={() => onDelete(id)}>{icons.delete}</button>
                  <button>{icons.accept}</button>
                  <button onClick={() => onEdit({ id, icon, productName, status, price, totalBought })}>{icons.edit}</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
