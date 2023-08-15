import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { callLoginApi } from "../services/doLogin";
import { Navigate, useNavigate } from "react-router";

function Login() {
  const [loginPayload, setLoginPayload] = useState({});
  const [invalidCredentials, setInvalidCredentials] = useState(true);

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setLoginPayload({ ...loginPayload, [name]: value });
  };

  let navigate = useNavigate()

  async function doLogin() {
    let data = await callLoginApi(loginPayload);
    if (data?.data?.status == true || data?.data?.status == 200) {
      let userData = data?.data?.data;
      let token = data?.data?.token;

      setInvalidCredentials(true);

      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("token", token);
        

      return navigate('/');
      
    }
    setInvalidCredentials(false);
  }

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>

              <h6
                className="text-danger mb-2 text-center"
                hidden={invalidCredentials}
              >
                Invalid Credentials
              </h6>

              <MDBInput
                wrapperClass="mb-4 w-100"
                label="User Name"
                name="userName"
                id="formControlLg"
                type="text"
                size="lg"
                onChange={handleChnage}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                name="password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={handleChnage}
              />

              <MDBBtn size="lg" onClick={doLogin}>
                Login
              </MDBBtn>

              <a href="/signUp"><MDBBtn className='w-100 mb-4 mt-3' size='lg'>sign up</MDBBtn></a>

              <hr className="my-4" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
