import ImageFrame from "../../../ImageFrame/ImageFrame";
import { Menu } from "../Menu/Menu";
import HamburgerMenu from "./hamburguer-menu";



import './NavBar.styles.scss';
import { NavUtils } from "./NavUtils";

const NavBar = () => {
    return <div className="nav-bar">
        <div className="nav-bar-menu">
            <HamburgerMenu />
            <a href="/">
                <ImageFrame 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGskoNoLdFtrUiw-gvUvQ3tsDYBTBsn8fqkA&s"
                    alt="logo-Louis Vuitton"
                    width="40"
                />
            </a>
        </div>
        <Menu />
        <NavUtils />
    </div>
}

export default NavBar;