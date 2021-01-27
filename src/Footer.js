import { FacebookOpenSourceImage } from "./resources/FacebookOpenSourceImage";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <section>
        <a href="/">
          <FacebookOpenSourceImage />
        </a>
        <p>Copyright © 2021 Facebook Inc.</p>
      </section>
      <section>
        <div>
          <h1>Docs</h1>
          <a href="/">Installation</a>
          <a href="/">Main Concepts</a>
          <a href="/">Advanced Guides</a>
          <a href="/">API Reference</a>
        </div>
        <div>
          <h1>Channels</h1>
          <a href="/">GitHub</a>
          <a href="/">Stack Overflow</a>
        </div>
        <div>
          <h1>Community</h1>
          <a href="/">Code Of Conduct</a>
          <a href="/">Community Resources</a>
        </div>
      </section>
    </footer>
  );
};
