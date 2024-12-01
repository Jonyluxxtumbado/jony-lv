import React from 'react';
import { FaFacebook,  FaInstagram } from "react-icons/fa";
import './Footer.styles.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p>&copy; Creado por jonatan posadas montano.</p>
                <div className="footer__social-links">
                    <a href="https://www.facebook.com/jony.poaadas?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/jmp_mx15/profilecard/?igsh=MnRsdzYxMGk5bDdl" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
