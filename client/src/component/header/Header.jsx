import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { getUser } from "../auth/Auth";
import logo from "../../assets/IB LOGO.jpg.jpeg"


import "./Header.scss";

// Main menu, grouped by category, using only the pages that exist.
// A group with `items` gets a dropdown; an entry with `to` is a plain link.
// `cta` styles it as the one action in the bar. Add a page by adding one line here.
const MENU = [
    {
        id: "about",
        label: "About",
        items: [
            { label: "Mission", desc: "Why this record needs to exist", to: "/ourmission" },
            { label: "Where we work", desc: "Eastern Uttar Pradesh, and next", to: "/where-we-work" },
            { label: "More about us", desc: "How we verify, and our story", to: "/more-about" },
        ],
    },
    {
        id: "work",
        label: "Our work",
        items: [
            { label: "Overview", desc: "Three ways we put change on the record", to: "/ourwork" },
            { label: "Impact TV", desc: "Films and long conversations", to: "/impact-tv" },
            { label: "Stories", desc: "Stories from the field", to: "/stories" },
        ],
    }
    ,
    /* ,
    { id: "account", account: true }, // becomes Login, or Dashboard when logged in */
    { id: "nominate", label: "Nominate", to: "/nominate", cta: true }, 
];

// Hover opens dropdowns only on wide screens with a mouse; touch and small screens use taps.
const canHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1001px) and (hover: hover)").matches;

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openId, setOpenId] = useState(null);
    const headerRef = useRef(null);
    const { pathname } = useLocation();

    // Login when logged out, Dashboard (admin or user) when logged in
    const user = getUser();
    const accountLink = user
        ? { id: "account", label: "Dashboard", to: user.role === "admin" ? "/admin" : "/dashboard" }
        : { id: "account", label: "Login", to: "/login" };

    const closeAll = () => {
        setOpenId(null);
        setMobileOpen(false);
    };

    // close everything after navigating
    useEffect(() => {
        setOpenId(null);
        setMobileOpen(false);
    }, [pathname]);

    // close on outside click and on Escape
    useEffect(() => {
        const onPointerDown = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setOpenId(null);
                setMobileOpen(false);
            }
        };
        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                setOpenId(null);
                setMobileOpen(false);
            }
        };
        document.addEventListener("mousedown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("mousedown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, []);

    const onGroupClick = (id, e) => {
        // mouse click on desktop keeps it open (hover already opened it);
        // keyboard presses and taps toggle
        const keyboard = e.detail === 0;
        setOpenId((prev) => (keyboard || !canHover() ? (prev === id ? null : id) : id));
    };

    const onGroupBlur = (e) => {
        if (canHover() && !e.currentTarget.contains(e.relatedTarget)) {
            setOpenId(null);
        }
    };

    const isHere = (to) => to.split("#")[0] === pathname;

    return (
        <header className="headerContainer" ref={headerRef}>
            <div className="logo">
                <Link to="/" onClick={closeAll}>
                    <img src={logo} alt="Impact Bureau" className="headerlogo" />
                    <span>impact bureau</span>
                </Link>
            </div>

            <button
                type="button"
                className="menuToggle"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mainMenu"
                onClick={() => {
                    setMobileOpen((prev) => !prev);
                    setOpenId(null);
                }}
            >
                <span className="menuToggleBar" />
            </button>

            <nav id="mainMenu" className={`menubar${mobileOpen ? " menubarOpen" : ""}`} aria-label="Main">
                <ul className="menuList">
                    {MENU.map((menuItem) => {
                        const entry = menuItem.account ? accountLink : menuItem;

                        if (!entry.items) {
                            return (
                                <li key={entry.id} className={entry.cta ? "menuCta" : "menuLink"}>
                                    <Link to={entry.to} onClick={closeAll}>
                                        <span>{entry.label}</span>
                                    </Link>
                                </li>
                            );
                        }

                        const open = openId === entry.id;
                        const active = entry.items.some((item) => isHere(item.to));
                        const classes = [
                            "menuGroup",
                            open && "menuGroupOpen",
                            active && "menuGroupActive",
                            entry.alignRight && "menuGroupRight",
                        ]
                            .filter(Boolean)
                            .join(" ");

                        return (
                            <li
                                key={entry.id}
                                className={classes}
                                onMouseEnter={() => canHover() && setOpenId(entry.id)}
                                onMouseLeave={() => canHover() && setOpenId(null)}
                                onBlur={onGroupBlur}
                            >
                                <button
                                    type="button"
                                    className="menuGroupButton"
                                    aria-expanded={open}
                                    aria-controls={`submenu-${entry.id}`}
                                    onClick={(e) => onGroupClick(entry.id, e)}
                                >
                                    <span>{entry.label}</span>
                                    <FiChevronDown className="menuChevron" aria-hidden="true" focusable="false" />
                                </button>

                                <ul id={`submenu-${entry.id}`} className="submenu">
                                    {entry.items.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                className="submenuLink"
                                                to={item.to}
                                                onClick={closeAll}
                                                aria-current={
                                                    isHere(item.to) && !item.to.includes("#") ? "page" : undefined
                                                }
                                            >
                                                <span className="submenuLabel">{item.label}</span>
                                                <span className="submenuDesc">{item.desc}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
