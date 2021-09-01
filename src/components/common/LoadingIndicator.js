import React from 'react'
import { Container, Spinner } from 'react-bootstrap'
{
  /* 
    Footer common component 
  */
}
const LoadingIndicator = ({ ...props }) => {
  return (
    <>
      <Container style={{ textAlign: 'center', marginTop: '100px' }}>
        <Spinner animation="border" style={{ color: '#ea6560' }} />
      </Container>
      )
    </>
  )
}

export default LoadingIndicator
