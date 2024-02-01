const Header = () => {
  return (
    <div className="cont">
      <div className="logo">
        <img src="./src/components/footer/t.jpg" alt="logo" />
      </div>
      <ul className="nav-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#pages">Pages</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <button className="startBtn">Get Started</button>
        </li>
      </ul>
    </div>
  );
};
export default Header;
