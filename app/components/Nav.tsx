'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Nav() {
  const routeMap = [
    {
      name: 'Charts',
      path: '/',
    },
    {
      name: 'Tables/Cards',
      path: '/tables-n-cards',
    },
  ];
  const pathname = usePathname();

  return (
    <nav className="py-10 border-b sticky top-0 z-30 text-white bg-[#0b081bf6] w-full border-gray-800 dark:border-cyan-800">
      <div className="flex justify-center space-x-6">
        {routeMap.map((route) => {
          const { name, path } = route;
          const isActivePath = pathname === path;

          return (
            <Link key={path} href={path} className={`z-0 transition-transform transform ${isActivePath ? 'cursor-default' : 'hover:scale-95'} ease-in-out duration-150 ${isActivePath && 'text-cyan-400'}`}>
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
