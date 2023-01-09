import Link from "next/link";

export default function NavLink({href, pathname, mobile = false, children}) {

  let className = '';
  if (pathname && mobile){
    className = pathname == href ? 'relative font-semibold pl-10 py-4 bg-slate-50 w-full'
      : 'relative font-semibold pl-10 py-4 w-full text-white'
  } else if (pathname) {
    className = pathname == href ? 'hidden font-semibold text-coach-green sm:inline relative after:absolute after:ml-[-0.5rem] after:left-1/2 after:top-7 after:h-0.5 after:w-4 after:rounded-full after:bg-rainforest'
      : 'hidden font-semibold text-up-forest-green sm:inline relative after:absolute after:top-7 after:ml-[-0.5rem] after:left-1/2 after:h-0.5 after:w-4 after:left after:rounded-full after:bg-rainforest after:scale-x-0 after:transition-all hover:after:scale-x-100'
  } else {
    className = 'hidden font-semibold text-coach-green sm:inline relative py-2 after:h-0.5 after:shrink-0 after:absolute after:top-9 after:left-0 after:w-5 after:left after:bg-sky-900 after:scale-x-0 after:transition-all hover:after:scale-x-100'
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}