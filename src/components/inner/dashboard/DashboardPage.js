import Footer from 'components/common/Footer'
import Data from 'components/common/Data.json'
import { MetaDecorator } from 'components/common/MetaDecorator'
import NavBar from 'components/common/NavBar'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import ImageData from 'components/common/ImageData'
import Slider from 'components/common/Slider'
import LoadingIndicator from 'components/common/LoadingIndicator'

export const DashboardPage = ({ ...props }) => {
  let content = (
    <section className="dashboard-container">
      <MetaDecorator
        title={Data.DashboardTitle}
        description={Data.DashboardDescription}
      />
      <NavBar />

      {ImageData && ImageData.length > 0 ? (
        <>
          <Slider slides={ImageData} />
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <section>
                  <h2>Welcome</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum
                  </p>
                </section>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <LoadingIndicator />
      )}
      <Footer />
    </section>
  )

  return content
}
const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
