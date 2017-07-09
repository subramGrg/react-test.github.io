import React from 'react';
import style from '../stylesheets/Footer.scss';

class Footer extends React.Component {
  render() {
    return(
      <footer className={style.footer}>
        <nav>
          <p>
            <span>HI and welcome.</span>
            My name is Subram. I have been developing applications commercially for three years. I have worked with various programming languages including Ruby, Python, Java and Javascript.
          </p>
        </nav>
      </footer>
    );
  }
}

export default Footer;
