import React, { useState } from "react";

const NavItems = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

const NavLinks = ({ className = "", onLinkClick }) => (
    <nav className={className}>
        {NavItems.map ((item) => (
            <a key={item.href} href={item.href} onClick={onLinkClick}>
                {item.label}
            </a>
        ))}
    </nav>
);

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen ((prev) => !prev);

    const handleNavClick = () => { setIsOpen(false); }


    return (
        <header className="navbar">
            <div className="nav-inner">
                <a href="#top" className="nav-logo"> {"<Micaela Leiva />"} </a>

                <NavLinks className="nav-links" />

                <button className="nav-toggle" onClick={handleToggle} aria-label="Toggle navigation">
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>
            </div>

            {isOpen && (
                <NavLinks className="nav-links-mobile" onLinkClick={handleNavClick} />
            )}
        </header>
    );
};

export default Navbar;
