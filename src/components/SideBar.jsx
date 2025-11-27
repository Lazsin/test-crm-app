import { icons }from "../assets/icons"
import logo from "/logo.svg"

export default function SideBar(){
  return(
    <div className="sidebar min-w-60 flex flex-col  bg-[#04141B] text-[#D8D8D8] font-['Days_One'] font-normal text-[12px] leading-[22px] tracking-[0] align-middle">
        <div className="flex justify-center items-center mt-4"><img src={logo} alt="logo"/></div>
        <hr className="my-5" style={{ color: '#22FEFF99' }}/>
        <div className='lists'>
          <div className="flex relative items-center gap-4 mr-3 ml-4 mt-4">
            {icons.li_franchisee}
            <p>Список франчайзи</p>
            <strong className="absolute right-0">{icons.plus}</strong>
          </div>
          <div className="flex relative items-center gap-4 mr-3 ml-4 my-2">
            {icons.li_teacher}
            <p>Список учителей</p>
            <strong className="absolute right-0">{icons.plus}</strong>
          </div>

          <div className="flex relative items-center gap-4 mr-3 ml-4 my-2">
            {icons.li_qroup}
            <p>Список групп</p>
            <strong className="absolute right-0">{icons.plus}</strong>
          </div>

          <div className="flex relative items-center gap-4 mr-3 ml-4 my-2">
            {icons.li_students}
            <p>Список учеников</p>
            <strong className="absolute right-0">{icons.plus}</strong>
          </div>

          <div className="flex items-center gap-4 mr-3 ml-4 ">
            {icons.recovery}
            <p>Восстановление</p>
          </div>

        </div>
        <hr className="my-5" style={{ color: '#22FEFF99' }}/>
        <div className='calendar flex items-center gap-4 mr-3 ml-4 '>{icons.calendar}<p>Календарь</p></div>
        <hr className="my-5" style={{ color: '#22FEFF99' }}/>
        <div className='training '>
          <div className="flex items-center gap-4 mr-3 ml-4 ">          
            {icons.training}<p>Тренировка</p>
          </div>
          <div className="flex items-center gap-4 mr-3 ml-4 mt-2">  
            {icons.video_materials}<p>Видео материалы</p>
          </div>
        </div>
        <hr className="my-5" style={{ color: '#22FEFF99' }}/>
        <div className='shop flex items-center gap-4 mr-3 ml-4'>{icons.shop}<p>Магазин</p></div>
        <hr className="my-5" style={{ color: '#22FEFF99' }}/>
        <div className='money'>
          <div className="flex items-center gap-4 mr-3 ml-4 ">
            {icons.finance}<p>Финансы</p>
          </div>
          <div className="flex items-center gap-4 mr-3 ml-4 mt-2">
            {icons.pay_details}<p>Платежные данные</p>
          </div>
        </div>
        <hr className="my-5" style={{ color: '#22FEFF99' }}/>
        <div className='questions'>
          <div className="flex items-center gap-4 mr-3 ml-4 ">
            {icons.quetions}<p>Частые вопросы</p>
          </div>
          <div className="flex items-center gap-4 mr-3 ml-4 mt-2">
            {icons.connect}<p>Свяжитесь с нами</p>
          </div>
        </div>
        <hr className="my-5" style={{ color: '#22FEFF99' }}/>
        <div className='about-us'>
          <div className="flex items-center gap-4 mr-3 ml-4 ">
            {icons.doc}<p>Договор обучения</p>
          </div>
          <div className="flex items-center gap-4 mr-3 ml-4 my-2">
            {icons.doc}<p>О нас</p>
          </div>
          <div className="flex items-center gap-4 mr-3 ml-4 my-2">
            {icons.doc}<p>Политика конфид.</p>
          </div>
          <div className="flex items-center gap-4 mr-3 ml-4 my-2">
            {icons.doc}<p>Условия пользования</p>
          </div>  

        <div className='exit-button flex justify-start items-center gap-2 -ml-1 mt-10 my-2'>{icons.exit}Выйти</div>
        </div>

      </div>
  )
}