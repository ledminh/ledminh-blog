import '../css/Footer.css';

const Footer = () => {
    return (
        <section className="footer">
            <span className="copyright">&copy; Minh Le {new Date().getFullYear()}</span>
        </section>
    );
}

export default Footer;