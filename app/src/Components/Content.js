import { Card, Button } from 'react-bootstrap';
import imageWebDesk from '../assets/images/image-web-3-desktop.jpg';
function Content() {
  return (
    <>
      <div className="d-flex main">
        {' '}
        <header className="p-0">
          <img
            src={imageWebDesk}
            alt="isssmage"
            width="100%"
            className="header-img"
          />
          <section className="header-text d-flex ">
            <span className="">
              {' '}
              <h1>The Bright Future of Web 3.0?</h1>
            </span>

            <article className="">
              <p>
                We dive into the next evelution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <div className="button-div mt-5">
                <Button className="">READ MORE</Button>
              </div>
            </article>
          </section>
        </header>
        <section className=" new">
          <h1 className="m-4">New</h1>
          <article className="">
            <h5>Hydrogen VS Electric Cars</h5>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>

            <hr></hr>
          </article>
          <article className="">
            <h5>The Downsides of AI Artistry</h5>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
            <hr></hr>
          </article>
          <article className="">
            <h5>Is VC Funding Drying up?</h5>
            <p>
              Private funding by VC firms is dowwn 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
export default Content;
