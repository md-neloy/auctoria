const Footer = () => {
  return (
    <div>
      <div className="text-black">
        <footer className="footer   p-10 flex justify-around">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Buy & Sell</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Auctoria Ltd .
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
