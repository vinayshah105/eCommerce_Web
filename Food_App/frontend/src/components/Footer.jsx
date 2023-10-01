import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
      <MDBFooter className="bg-dark text-center text-white position-relative bottom-0 w-100">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              target="_blank"
              href="https://www.facebook.com/UberEatsCanada/?brand_redir=696009167187917"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              target="_blank"
              href="https://twitter.com/Uber_Canada"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              target="_blank"
              href="https://www.uber.com/ca/en/deliver/basics/before-you-start/how-to-get-support/"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              target="_blank"
              href="https://www.instagram.com/ubereats/?hl=en"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              target="_blank"
              href="https://in.pinterest.com/uber/ubereats/"
              role="button"
            >
              <MDBIcon fab icon="pinterest" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2023 Copyright:
          <a className="text-white" href="https://www.ubereats.com/ca">
            UberEats.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
