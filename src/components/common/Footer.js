import React from 'react'
{
  /* 
    Footer common component 
  */
}
const Footer = ({ ...props }) => {
  return (
    <>
      <div className="dashboard-footer mt-4">
        <div className="text-body text-center" id="footerstyle">
          © {new Date().getFullYear()} Revium Melbourne-based Digital Agency.
          All rights reserved.
          <br />
          Revium® is a registered trademark of XXX Pty. Ltd. (ABN: 00 XXX XXX
          XXX)
        </div>
      </div>
      )
    </>
  )
}

export default Footer
