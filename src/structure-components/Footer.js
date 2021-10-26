import './css/Footer.css';

const Footer = ({children}) => {
    return (
        <section className="footer">
            <div className="footer-content">
                {children}
            </div>            
        </section>
    );
}

export default Footer;