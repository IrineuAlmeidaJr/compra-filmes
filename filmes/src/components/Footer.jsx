
import TwitterIcon from '@mui/icons-material/Twitter';
import { YouTube } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';


export function Footer() {
  return(
    <footer className="
      absolute
      bottom-0
      left-0
      w-screen
      bg-netflix-black-600
      bg-opacity-95   
      py-4
      px-12
      md:px-20
      lg:px-36
      2xl:px-52"
    >
      <div>
        <div className="grid grid-flow-col gap-3 justify-between px-[25vw]">
          <a href='https://twitter.com'><TwitterIcon sx={{ color: '#e50914' }}/></a> 
          <a href='https://youtube.com'><YouTube sx={{ color: '#e50914' }}/></a> 
          <a href='https://facebook.com'><Facebook sx={{ color: '#e50914' }} /></a>
        </div>
      </div> 
      <div className='flex flex-1 pt-4 pb-2 justify-center items-center'>
        <p className='text-white text-base'>Copyright © 2022 - Todos direitos reservados a <span className='text-sm font-bold'>FIPFLIX Ltd </span></p>
      </div>
    </footer>
  )
}
