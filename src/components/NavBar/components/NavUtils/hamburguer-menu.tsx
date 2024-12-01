import React, { useState } from 'react';
import './hamburger-menu.styles.scss';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <button className="hamburger-icon" onClick={toggleMenu}>
                ☰ 
                {/* Este será el icono del menú hamburguesa */}
            </button>

            {/* Mostrar el menú solo si está abierto */}
            {isOpen && (
                <div className="menu">
                    <ul>
                        <li><a href="/hombre">Hombre</a></li>
                        <li><a href="/mujer">Mujer</a></li>
                        <li><a href="/ninos">Niños</a></li>
                        <li><a href="/joyeria">joyeria</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;

export {}
