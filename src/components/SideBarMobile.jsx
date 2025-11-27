import SideBar from "./SideBar";

export default function SideBarMobile({ isOpen, onClose }) {
  return (
    <>
      {/* Фон затемнения */}
      <div
        className={`fixed z- inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } lg:hidden`}
        onClick={onClose}
      />

      {/* Сам сайдбар */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-[#04141b] border-r border-[#20feff] transform transition-transform duration-300 ease-in-out lg:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Кнопка закрытия */}
        <button
          className="m-4 p-2 text-white"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ✕
        </button>

        {/* Контент сайдбара */}
        <div className="p-4  text-white">
          <SideBar/>
        </div>
      </aside>
    </>
  );
}
