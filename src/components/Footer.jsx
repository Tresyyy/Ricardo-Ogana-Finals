import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer>
    <ul className="footer__categories">
        <li><Link to="/posts/categories/:Agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/:Business">Business</Link></li>
        <li><Link to="/posts/categories/:Education">Education</Link></li>
        <li><Link to="/posts/categories/:Entertainment">Entertainment</Link></li>
        <li><Link to="/posts/categories/:Food">Food</Link></li>
        <li><Link to="/posts/categories/:Investment">Investment</Link></li>
        <li><Link to="/posts/categories/:Uncategorized">Uncategerized</Link></li>
        <li><Link to="/posts/categories/:Weather">Weather</Link></li>
    </ul>
     <div className="footer__copyright">
      <small>All Rights Reserved &copy; Copyright, EGATOR Tutorials.</small>
     </div>


   </footer>
  )
}

export default Footer
