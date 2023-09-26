import { Card, Button } from 'react-bootstrap';
import imageWebDesk from '../assets/images/image-web-3-desktop.jpg';
function Content() {
  return (
    <>
      <header className="mt-3">
        <img
          src={imageWebDesk}
          alt="isssmage"
          width="65%"
          className="header-img"
        />
      </header>
    </>
  );
}

export default Content;
