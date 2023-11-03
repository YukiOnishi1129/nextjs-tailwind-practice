import Link from 'next/link'

export const Header = () => (
  <div className="flex h-[80px] w-full items-center justify-between border-b-[1px] border-gray-200 bg-white px-10">
    <h1 className="text-3xl">
      <Link href="/">Sample</Link>
    </h1>
    <nav className="flex w-1/4 list-none justify-center">
      <li className="text-xl">
        <Link href="/login">login</Link>
      </li>
      <li className="pl-5 text-xl">
        <Link href="/">Top</Link>
      </li>
    </nav>
  </div>
)
