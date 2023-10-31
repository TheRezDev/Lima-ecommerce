import React from 'react'

const Navbar = () => {
  return (
        <nav>
            <div className='h-10vh z-50 flex justify-between px-5 py-4 border-b-2 shadow-lg'>
                {/* Search bar  */}
                <div className='flex items-center max-w-sm'>
                        <span className='font-bold'>EN</span>
                        <div className='bg-gray-100 rounded-full flex items-center mx-3'>
                        <span className='mr-1 ml-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <input className='focus:outline-none bg-transparent w-full p-2 text-slate-800' type="text" placeholder='search' />
                        </div>
                </div>
                {/* Logo  */}
                <div className="flex items-center justify-center">
                        <img className='w-20 h-20' src="/public/logo.png" alt="" />
                </div>

                <div>
                    <span>Register</span>
                    <span>Sign in</span>
                    <span>

                    </span>
                </div>

            </div>
        </nav>
  );
}

export default Navbar