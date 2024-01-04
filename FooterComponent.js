const FooterComponent = () => {
    return (
        <div className="footer">
            {/* <nav className="navbar navbar-expand ">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#">Footer - Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Footer - AboutUS</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Footer -ContactUS</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Footer - Cart</a></li>
                </ul>
            </nav> */}
             <div class="footer">
    <div class="footer-logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZEsQeznZtS2L7JxVxj6CDl-xZglFbIh-6lQ&usqp=CAU" style={{height:'40px',width:'30px'}}></img> Swiggy</div>
    <div class="footer-links">
      <a href="#">About Us</a>
      <a href="#">Terms and Conditions</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Contact Us</a>
    </div>

    <div class="social-icons">
      <a href="#" target="_blank">Facebook</a>
      <a href="#" target="_blank">Twitter</a>
      <a href="#" target="_blank">Instagram</a>
    </div>

    <p>&copy; 2023 Swiggy. All rights reserved.</p>
  </div>
        </div>
    )
 };
 export default FooterComponent ;