import { Card, Button } from 'react-bootstrap';
import imageWebDesk from '../assets/images/image-web-3-desktop.jpg';
function Content() {
  return (
    <>
      <header className="mt-3">
        <span>
          <img
            src={imageWebDesk}
            alt="isssmage"
            width="60%"
            className="header-img"
          />
          <section className="header-text d-flex">
            <h1>The Bright Future of Web 3.0?</h1>
          </section>
        </span>
      </header>
    </>
  );
}

export default Content;
