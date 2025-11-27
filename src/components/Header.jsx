import { icons } from "../assets/icons"

export default function Header(){
    return(
        <div className='header '>
          <div className='flex flex-nowrap justify-between items-center bg-[#FCFBFB] px-4 py-2  rounded-[10px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.12)]'>
            <div className="ml-4 lg:ml-0 font-['Days_One'] font-normal text-[22px] leading-[100%] tracking-[0.3px] text-[#252733]">Zamówienia</div>
            <div className='login flex justify-between items-center'>
              <hr className="w-0 h-8 mx-8 border-[#DFE0EB] border" />
              <div className='icon text-amber-200'>{icons.login}</div>
              <div className="font-normal text-[12px] leading-5 text-right ml-2 mr-4" style={{ letterSpacing: '0.2px', fontFamily: '"Open Sans", sans-serif' }}>
                Jones Ferdinand
              </div>
            </div>
          </div>
          <p className="mx-4 my-2 font-normal text-[12px] leading-5" style={{ fontFamily: '"Open Sans", sans-serif', letterSpacing: '0.2px' }}>
            Zamówienia {`>`}
          </p>
        </div>
    )
}