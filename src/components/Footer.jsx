function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-content__socials">
            <a style={{color: 'white'}} href="https://twitter.com/LuiceSalvato/"><i className="fa-brands fa-twitter"></i></a>
            <a style={{color: 'white'}} href="https://github.com/salvatoluice"><i className="fa-brands fa-github"></i></a>
            <a style={{color: 'white'}} href="https://linkedin.com/in/salvato-luis/"><i className="fa-brands fa-linkedin"></i></a>
            <a style={{color: 'white'}} href="https://instagram.com/salvato_luiz"><i className="fa-brands fa-instagram"></i></a>
          </div>
          <div className="footer-content__text">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
