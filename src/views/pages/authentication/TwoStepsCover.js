// ** React Imports
import { Link } from 'react-router-dom'
import themeConfig from '../../../configs/themeConfig'
// ** Custom Hooks
import { useSkin } from 'utility/hooks/useSkin'
// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText, Button, Form, Input } from 'reactstrap'

// ** Styles
import '../../../@core/scss/react/pages/page-authentication.scss'

const TwoStepsCover = () => {
  // ** Hooks
  const { skin } = useSkin()

  const illustration =
      skin === 'dark' ? 'two-steps-verification-illustration-dark.svg' : 'two-steps-verification-illustration.svg',
    source =`../../../assets/images/${illustration}`

  return (
    <div className='auth-wrapper auth-cover'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
        <img src={themeConfig.app.appLogoImage} alt='logo' width='33px' />
          <h2
              className="brand-text text-primary ms-1"
              style={{
                fontSize: "18px",
                fontWeight: "700",
                fontStyle: "italic",
                marginTop: "3px"
              }}
            >
              {themeConfig.app.appName}
              <span
                style={{
                  color: "#5E5873",
                }}
              >
                {themeConfig.app.appSubName}
              </span>
            </h2>

        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login Cover' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='fw-bolder mb-1'>
              Two Step Verification 💬
            </CardTitle>
            <CardText className='mb-75'>
              We sent a verification code to your mobile. Enter the code from the mobile in the field below.
            </CardText>
            <CardText className='fw-bolder mb-2'>******0789</CardText>
            <Form className='mt-2' onSubmit={e => e.preventDefault()}>
              <h6>Type your 6 digit security code</h6>
              <div className='auth-input-wrapper d-flex align-items-center justify-content-between'>
                <Input autoFocus maxLength='1' className='auth-input height-50 text-center numeral-mask mx-25 mb-1' />
                <Input maxLength='1' className='auth-input height-50 text-center numeral-mask mx-25 mb-1' />
                <Input maxLength='1' className='auth-input height-50 text-center numeral-mask mx-25 mb-1' />
                <Input maxLength='1' className='auth-input height-50 text-center numeral-mask mx-25 mb-1' />
                <Input maxLength='1' className='auth-input height-50 text-center numeral-mask mx-25 mb-1' />
                <Input maxLength='1' className='auth-input height-50 text-center numeral-mask mx-25 mb-1' />
              </div>
            </Form>
            <Button block tag={Link} to='/' color='primary'>
              Sign in
            </Button>
            <p className='text-center mt-2'>
              <span>Didn’t get the code?</span>{' '}
              <a href='/' onClick={e => e.preventDefault()}>
                Resend
              </a>{' '}
              <span>or</span>{' '}
              <a href='/' onClick={e => e.preventDefault()}>
                Call us
              </a>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default TwoStepsCover