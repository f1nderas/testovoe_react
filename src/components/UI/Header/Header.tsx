import "./Header.scss";
import { FC, useState } from "react";
import classNames from "classnames";
import { ChevronRight } from "lucide-react";
const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")!.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }

    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className={classNames("header-inner", { open: menuOpen })}>
            <a className="logo" href="#">
              <div className="logo-img">
                <div className="logo-img__1"></div>
                <div className="logo-img__2"></div>
              </div>
              <h5 className="h5 logo__text">testLab</h5>
            </a>
            <nav className="nav ">
              <ul className="list container">
                <li>
                  <a href="#how-work" className="h6" onClick={handleLinkClick}>
                    <span>Как это работает</span>
                    <ChevronRight />
                  </a>
                </li>
                <li>
                  <a
                    href="#third-block"
                    className="h6"
                    onClick={handleLinkClick}
                  >
                    3-й блок
                    <ChevronRight />
                  </a>
                </li>
                <li>
                  <a href="#faq" className="h6" onClick={handleLinkClick}>
                    Вопросы и ответы
                    <ChevronRight />
                  </a>
                </li>
                <li>
                  <a href="#form" className="h6" onClick={handleLinkClick}>
                    Форма
                    <ChevronRight />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
