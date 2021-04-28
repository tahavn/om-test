import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="page__footer footer">
            <div className="container">
                <div className="footer__inner">© {new Date().getFullYear()} Copyright</div>
            </div>
        </div>
    )
}

export default Footer;
