function Navbar({ onCvClick }) {
  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="Header">
      <div className="Header-Tile">Jordan S</div>
      <div className="Navbar">
        <div className="Navbar-Item" onClick={() => scrollToComponent('competences')}>Home</div>
        <div className="Navbar-Item" onClick={onCvClick}>Cv</div>
        <div className="Navbar-Item" onClick={() => scrollToComponent('portfoglio')}>Portfoglio</div>
        <div className="Navbar-Item" onClick={() => scrollToComponent('contact')}>Contact</div>
      </div>
    </header>
  )
}

export default Navbar;
