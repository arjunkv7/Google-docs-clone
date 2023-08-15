import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router";
import { callSingUpApi } from "../services/signUp";

function SignUp() {
  const [signUpPayload, setsignUpPayload] = useState({});
  const [somethingWentWrong, setsomethingWentWrong] = useState(true);

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setsignUpPayload({ ...signUpPayload, [name]: value });
  };
  let navigate = useNavigate();

  async function doSignUp() {
    let data = await callSingUpApi(signUpPayload);
    if (data?.data?.status == true || data?.data?.status == 200) {
      return navigate("/login");
    }
    setsomethingWentWrong(false);
  }

  return (
    <MDBContainer fluid className="p-4">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <MDBRow>
                <h6
                  className="text-danger mb-2 text-center"
                  hidden={somethingWentWrong}
                >
                  Something went wrong
                </h6>
                <MDBCol col="6">
                  <MDBInput
                    onChange={handleChnage}
                    wrapperClass="mb-4"
                    label="First name"
                    id="form1"
                    name="firstName"
                    type="text"
                    required
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    onChange={handleChnage}
                    wrapperClass="mb-4"
                    label="Last name"
                    name="lastName"
                    id="form1"
                    type="text"
                    required
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                onChange={handleChnage}
                wrapperClass="mb-4"
                label="User Name"
                name="userName"
                id="form1"
                type="text"
                required
              />
              <MDBInput
                onChange={handleChnage}
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                name="password"
                type="password"
                required
              />

              <MDBBtn onClick={doSignUp} className="w-100 mb-4" size="md">
                sign up
              </MDBBtn>

              <div className="text-center"></div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUp;
