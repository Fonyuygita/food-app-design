import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';

interface Props {
    
}

const Navbar = (props: Props) => {
    const user=false;
    return (
        <div className='h-12 text-red-500 p-4 flex justify-betweeen items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 lx:px-40 xl:px-40'>

            {/* left menu */}
            <div className="hidden md:flex gap-4 flex-1">

                <Link href="/">Homepage</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/contact">Contact</Link>


            </div>
            {/* LOGO */}
            <div className='text-xl md:font-bold flex-1 md:text-center'>
                <Link href="/">Buy_Now</Link>
            </div>
            {/* MOBILE MENU */}
            
            <div className='md:hidden'>
                <Menu/>
            </div>

            {/* right menu */}
            <div className="hidden md:flex gap-4 justify-end flex-1">
                <div className='md:absolute top-3 2-2 lg:static  flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md '>
                    <Image src="/phone.png" alt='' width={20} height={20}/>
                    <span>+237 627 792 563</span>
                </div>
{!user ? (<Link href="/login">Login</Link>) :
 (<Link href="/order">Order</Link>) }
<CartIcon/>
</div>

        </div>
    )
}

export default Navbar
