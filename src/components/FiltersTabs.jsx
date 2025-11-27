

export default function FilterTabs({ filter, setFilter, counts }) {
  const tabs = [
    { label: 'Wszystkie', count: counts.all },
    { label: 'Aktywne', count: counts.active },
    { label: 'Nieopublikowane', count: counts.unpublished },
  ];

  return (
    <div className='togglebutton flex justify-center gap-4'>
      {tabs.map(({ label, count }) => (
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
          onClick={() => setFilter(label)}
        >
          <button>{label}</button> ({count})
        </div>
      ))}
    </div>
  )
}