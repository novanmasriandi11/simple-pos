const Navbar = ({ titleNav }) => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          {titleNav}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
