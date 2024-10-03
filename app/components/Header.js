import { Menu, ShoppingBag, ShoppingCart, User } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue-950 w-full py-5'>
        <div className='px-10 flex gap-2 justify-between'>
            <Menu className='text-white font-bold text-2xl cursor-pointer'/>
            <h1 className='text-white text-3xl font-bold'> Wuse Within Store</h1>
            <input type='text' placeholder='Search a product...' className='h-10 w-80 rounded-md border-gray-500 border-2' />
            <ShoppingCart  className='text-white font-bold text-2xl cursor-pointer'/>
            <ShoppingBag className='text-white font-bold text-2xl cursor-pointer'/>
            <User className='text-white font-bold text-2xl cursor-pointer'/>
            
        
        </div>
      
    </div>
  )
}

export default Header
