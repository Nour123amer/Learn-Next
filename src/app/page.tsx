import Navbar from "./_Components/Navbar/page"



export default function Home() {
  return (
    <div className="pt-16 relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}

{/* <div
      className={`fixed px-16 top-0 left-0 right-0 z-50 w-full ${isMobileMenuOpen ? "sm:h-[120px] "  : "sm:h-[330px]"}  md:h-[76px] transition-all duration-500 ${
        isScrolled} ? "bg-transparent" : ${backgroundColor}
       text-white`}
    >
      <div className={`px-16 mx-auto flex sm:flex-col sm:flex-wrap sm:px-10 sm:items-start sm:gap-4 md:gap-1 lg:gap-2 md:flex-row lg:flex-nowrap 
       justify-between items-center py-6 ${isMobileMenuOpen? '': ''} `}>
        <Link to='/' className="logo flex gap-2 relative">
          <img className="w-[20px] h-[20px]" src={logo} alt="" />
          <h1 className="font-bold">Elite Estates</h1>
        <button className="flex cursor-pointer absolute -right-[340px]" aria-expanded={isMobileMenuOpen} aria-label="Toggle Navigation" onClick={toggleMobileMenu}>
        <i  className={  `  text-white text-2xl fa-solid md:invisible ${isMobileMenuOpen  ? "fa-bars" : "fa-circle-xmark "} `}></i>
        </button>
        </Link>

       
 <ul className={`menu flex sm:flex-col sm:flex-wrap md:flex-row md:flex-nowrap sm:gap-0.5 md:gap-1.5 lg:gap-4 font-semibold ${isMobileMenuOpen? 'sm:hidden md:flex':'flex'} `}>
       <li className='relative'> 
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/'>Home</NavLink>
       </li>
       <li className='relative'>
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/aboutus'>  About Us</NavLink>
       </li>
       <li className='relative'>
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/products'>  Products</NavLink>
       </li>
       <li className='relative'>
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/services'>Services</NavLink>
       </li>
       <li className='relative'>
         <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/properities'>Properities</NavLink>
       </li>
    
       <li className='relative'>
       <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/agents'>Agents</NavLink>
       </li>
       <li className='relative'>
        <NavLink className={({isActive})=>` before:w-0 text-white ${isActive ? 'font-bold text-blue-200 before:absolute before:w-full hover:w-full before:transition-[width] before:duration-500 before:h-[2px] before:bg-white before:left-0 before:bottom-0  ':' hover:text-gray-200' }`} to='/login'>Login</NavLink>
       </li>
     

     </ul>
      
<div className="flex sm:gap-8 md:gap-3 items-center">
<NavLink className={ ' text-white  hover:text-gray-200' } to='/favproducts'><i className="fa-regular fa-heart text-4xl"></i></NavLink>
<button onClick={()=>navigate('/products')} className="w-fit px-3 py-2 border border-white rounded cursor-pointer">
          Find A House
        </button>
        <NavLink className={` before:w-0 text-white hover:text-gray-200`} to='/profile'>
        <img className='w-[40px]  h-[40px] rounded-full' src='https://s3-alpha-sig.figma.com/img/833b/fcf2/fbdf822af730dc5a309217c373e76ab9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fIhHhX1B~92nfteVTN~VwXvdcyoI~On7ZqEA48OiQkAJJ9wW4ni-Bly5UOYH-bkUg2MHAuLPqU2jl3fDfBhN1qKgZwB1yCOWZehF4nAI6YQY~cRufYj47GvPOr3FBCsP-kTIYNpMVjb8HNLzxiQ-GlM2XHP6nF78pXQkXsM9gfbsgcGJwBuV9Ndw078SZtyBqIqWzgpwJjbhHDQLz3r0wXT7Xwl-qAFe6i98BcDm0gmGVt5XtNbpbJ0M-2u-wTYKMjx0KTPKEHNgFI9XEyH4lbHJS~9wSbCsuftK4173Q-IgLIOFCtoK5-78Rh6R7ZEwzIHzfMf8yxP4y5dgx1xtxg__' alt="" />
           
        </NavLink>

</div>
      </div>
    </div> */}

  {/* <Navbar /> */}

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae delectus numquam dolor odit rerum ullam repellendus recusandae sint! Harum molestiae totam dignissimos quidem, porro sequi vel delectus. Sint, ipsum laboriosam!</p>
    </div>
  );
}
