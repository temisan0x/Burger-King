import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/Temisan.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About us</h1>
        <article>
          <h4>Burger Kings</h4>
          <p>
            We are Burger Kings. The place for most tasty burgers on the entire
            universe
          </p>
          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h1>Founder</h1>
          <article>
            <div>
              <img src={me} alt="founder" />
              <h3>Temisan Momodu</h3>
            </div>
            <p>I am Temisan Momodu, the founder of the replicated Burger Kings. I love to build websites that is pleasing to the eyes. </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
