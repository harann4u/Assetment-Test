import { FaCog, FaFire } from "react-icons/fa";
import { NavBarStyled, NavIconStyled, NavItemStyled } from "./navBar.styled";
import type { NavBarType } from "./navI";


const NavBar = () => {
    const navBarList = [{ label: "Trending", icon: <FaFire />, active: true }, { label: 'Setting', icon: <FaCog />, active: false }]
    return (<NavBarStyled>
        {navBarList.map((link: NavBarType) => {
            return (
                <NavItemStyled active={link.active}>
                    <NavIconStyled>
                        {link.icon}
                    </NavIconStyled>
                    {link.label}
                </NavItemStyled>
            )
        })}
    </NavBarStyled>);
}

export default NavBar