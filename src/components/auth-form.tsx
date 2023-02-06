import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
  
}
from 'mdb-react-ui-kit';

function AuthForm() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Enter Credentails</h2>
          <MDBInput wrapperClass='mb-4' label='Mac ID' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Socket Key' size='lg' id='form2' type='email'/>

          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Authentication</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default AuthForm;