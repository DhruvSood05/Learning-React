const Navigation = () => {
  return (
    <nav className=" flex justify-between items-center py-2 m-auto max-w-[1280px]">
      <div>
        <img
          className=" w-[72px] h-[72px]"
          src="/images/logo.png"
          alt="do some coding logo"
        />
      </div>

      <ul className="flex gap-6 font-medium">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
