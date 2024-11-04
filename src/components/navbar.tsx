function Navbar() {
  return (
    <nav className="w-full h-16 lg:px-32 flex justify-between items-center border px-6">
        <h2 className="text-2xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 inline-block">Bluebot.</h2>
      <ul className="flex items-center gap-x-4">
        <li className="px-1">
          <a href="#about" className="capitalize md:text-lg font-medium text-slate-500">about</a>
        </li>
        <li className="px-1">
          <a href="#contact" className="capitalize text-white md:text-lg font-medium bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-full">register now</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
