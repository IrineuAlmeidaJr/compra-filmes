import { Link } from "react-router-dom";


export function Header(props) {

    return (
        <header
            className="
            fixed 
            font-bold
            bg-netflix-black-600
            bg-opacity-95
            border-b-2
            border-gray-800
            max-h-[90px]
            min-h-[90px]
            w-full
            h-full
            z-40
            pt-4
            px-10
            md:px-16
            lg:px-32
            2xl:px-48                
            grid
            gap-1
            grid-cols-[1fr,3fr,4fr,0fr,1fr]
            items-center
            justify-center"
        >
            <div className="text-white">
                <Link  id="logo" to="/home">
                    <img src="/src/public/assets/logo.png" alt="Logo Image" 
                    className='max-h-[80px] min-h-[80px]'/>
                </Link>
            </div>      
            <nav className="
                text-white
                flex
                flex-1
                ml-6
                justify-between
                items-center
            ">                
                {/* <Link  to="/home">Início</Link> */}
                <Link to="/assinaturas">Assinatura</Link>  
                <Link to="/meusfilmes">Meus Filmes</Link>      
            </nav>
            <nav 
                className="
                ml-14
                mr-2
                text-white
                justify-center
                items-center"
            >
                <form>   
                    <label 
                        htmlFor="search" 
                        className="
                        flex-1
                        mb-2 
                        text-sm 
                        font-medium 
                        text-gray-900 
                        sr-only 
                        dark:text-gray-300"
                    >
                            Digite filme
                    </label>
                    <div className="relative">
                        <div className="
                            flex 
                            flex-1
                            absolute 
                            inset-y-0 
                            left-0 
                            items-center 
                            pl-3 
                            pointer-events-none"
                        >
                            <svg 
                                aria-hidden="true" 
                                className="
                                w-5 
                                h-5 
                                text-gray-500 
                                dark:text-gray-400" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input 
                            type="search" 
                            id="search" 
                            className="
                                block 
                                p-4
                                pl-10
                                w-full 
                                text-sm
                                text-gray-900 
                                bg-gray-50 
                                rounded-lg 
                                border 
                                border-gray-300 
                                focus:ring-blue-500 
                                focus:border-blue-500 
                                dark:bg-gray-700 
                                dark:border-gray-600 
                                dark:placeholder-gray-400 
                                dark:text-white 
                                dark:focus:ring-blue-500 
                                dark:focus:border-blue-500" 
                            placeholder="Filme ou série..." 
                            required 
                        />
                        <button 
                            type="submit" 
                            className="
                                text-white 
                                absolute 
                                right-2.5 
                                bottom-2.5 
                                bg-netflix-red-300
                                hover:bg-netflix-red-500
                                focus:ring-4 
                                focus:outline-none 
                                focus:ring-red-300
                                font-medium 
                                rounded-lg 
                                text-sm 
                                px-4 
                                py-2 
                                dark:bg-netflix-red-300
                                dark:hover:bg-netflix-red-500
                                dark:focus:bg-netflix-red-700">
                                    Buscar
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                    </div>
                </form>
            </nav> 
            <img
                className="
                    col-start-5 col-end-5
                    h-[54px]
                    rounded-md"
                src={props.usuario.url}
            />     
        </header>
    )
}