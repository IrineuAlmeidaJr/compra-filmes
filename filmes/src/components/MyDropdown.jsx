import { Fragment } from 'react'
import { useNavigate } from "react-router-dom";

import { Menu, Transition } from '@headlessui/react'

export function MyDropdown(props) {

  const navigate = useNavigate();

  function formatarNome(nome) {
    return nome.split(" ")[0].substring(0, 11)
  }

  function singOut() {
    localStorage.clear();
    navigate("/");
    console.log("SAIR")
  }

  return (
    <div className="flex h-[54px] top-16 w-16 text-right items-center
              justify-center ">
      <Menu as="div" className="relative inline-block text-left">
        <div >
          <Menu.Button 
            className="
              flex
              w-full 
              rounded-lg 
              bg-netflix-red-300
              bg-opacity-10 
              p-1
              hover:bg-opacity-60 
              focus:outline-none 
              focus-visible:ring-2 
              focus-visible:ring-white 
              focus-visible:ring-opacity-90">
            <img
              className="                  
                  rounded-md"
              src={props.usuario.url}
            />  
            {/* <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> */}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-500 rounded-md bg-gray-700 opacity-95 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-white text-black-900' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <UserActiveIcon />
                    ) : (
                      <EditInactiveIcon />
                    )}
                    <p className='ml-2'>{formatarNome(props.usuario.nome)}</p>
                  </button>
                )}
              </Menu.Item>
             
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={singOut}
                    className={`${
                      active ? 'bg-white text-black-900' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <SingoutActiveIcon />
                    ) : (
                      <SingoutInactiveIcon />
                    )}
                    <p className='ml-2'>Sair</p>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function EditInactiveIcon(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#e50914" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  )
}

function UserActiveIcon(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#e50914" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  )
}

function SingoutInactiveIcon(props) {
  return (
    <svg 
    
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#e50914" 
      strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round">

      <path 
        d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"
      />
      
    </svg>
  )
}

function SingoutActiveIcon(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#e50914" 
      strokeWidth="3" 
      strokeLinecap="round" strokeLinejoin="round">

      <path 
        d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"
      />
      
    </svg>
  )
}
