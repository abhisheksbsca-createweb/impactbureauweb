import { Link } from "react-router-dom";
import "./Footer.scss";

// Links with `to` are pages inside the site; links with `href` open in a new tab.
// Replace the social URLs with your real profiles and create the routes you don't have yet.
const COLUMNS = [
    {
        heading: "Our work",
        links: [
            { label: "Impact Originals", to: "/impact-tv" },
            { label: "Impact Magazine", to: "/stories" },
            { label: "Creators Impact Summit", to: "/summit" },
        ],
    },
    {
        heading: "About",
        links: [
            { label: "Mission", to: "/ourmission" },
            { label: "How we verify", to: "/ourmission#how-we-verify" },
            { label: "Team", to: "/ourmission#team" },
        ],
    },
    {
        heading: "Get involved",
        links: [
            { label: "Nominate", to: "/nominate" },
            { label: "Partner with us", to: "/partner" },
            { label: "Contact", to: "/contact" },
        ],
    },
    {
        heading: "Follow",
        links: [
            { label: "YouTube", href: "https://youtube.com/@impactbureau?si=ywzcNMiDs7soU_fK/" },
            { label: "Instagram", href: "https://www.instagram.com/" },
            
        ],
    },
];

const LEGAL = [
    { label: "Privacy", to: "/" },
    { label: "Terms", to: "/" },
];

const CONTACT_EMAIL = "info@impactbureau.org";

function FooterLink({ link }) {
    if (link.to) {
        return <Link to={link.to}>{link.label}</Link>;
    }
    return (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
        </a>
    );
}

function Footer() {
    return (
        <footer className="siteFooter">
            <div className="siteFooterInner">
                <div className="siteFooterTop">
                    <div className="siteFooterBrand">
                        <Link to="/" className="siteFooterName">Impact Bureau</Link>
                        <p className="siteFooterTagline">
                            Documenting, recognising and supporting the people who change things.
                        </p>
                    </div>

                    <nav className="siteFooterNav" aria-label="Footer">
                        {COLUMNS.map((column) => (
                            <div className="siteFooterColumn" key={column.heading}>
                                <h2 className="siteFooterHeading">{column.heading}</h2>
                                <ul>
                                    {column.links.map((link) => (
                                        <li key={link.label}>
                                            <FooterLink link={link} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="siteFooterBottom">
                    <p className="siteFooterMeta">
                        <span>© {new Date().getFullYear()} Impact Bureau</span>
                        
                    </p>
                    <p className="siteFooterMeta">
                        {LEGAL.map((item) => (
                            <Link key={item.label} to={item.to}>{item.label}</Link>
                        ))}
                        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
