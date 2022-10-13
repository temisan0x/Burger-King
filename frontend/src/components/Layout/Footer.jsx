import React from "react";
import { GrTwitter, GrFacebook, GrLinkedin, GrGithub } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger King</h2>
        <p>We are trying to give you the best taste possible.</p>
        <em>We give attention to genuine feedback,</em>
        <p><strong>All right reserved @datemycode</strong></p>
      </div>
      <aside>
        <h4>Follow us</h4>
        <a href="#temy">
          Twitter <GrTwitter />
        </a>
        <a href="#temy">
          Facebook <GrFacebook />
        </a>
        <a href="#temy">
          Linkedin <GrLinkedin />
        </a>
        <a href="#temy">
          Github <GrGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
