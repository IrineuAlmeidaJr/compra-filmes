
import TwitterIcon from '@mui/icons-material/Twitter';
import { YouTube } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';


export function Footer() {
  return(
    <footer className="
      static
      bottom-0
      left-0
      w-full
      bg-netflix-black-600
      bg-opacity-95   
      pt-2
      pb-4 
      px-12
      md:px-20
      lg:px-36
      2xl:px-52"
    >
      <div>
        <div className="grid grid-flow-col gap-3 justify-between px-[25vw]">
          <a><TwitterIcon color="primary"/></a> 
          <a><YouTube color="primary"/></a> 
          <a><Facebook color="primary" /></a>
        </div>
      </div> 
      <div className='flex flex-1 justify-center items-center pt-2'>
        <p className='text-white text-xs'>Copyright © 2022 - Todos direitos reservados a <span className='text-sm font-bold'>FIPFLIX Ltd </span></p>
      </div>
    </footer>
  )
}