// ** React Imports
import { Link, Redirect } from 'react-router-dom'

// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText, Form, Label, Input, Button } from 'reactstrap'

// ** Utils
import { isUserLoggedIn } from '../../../utility/Utils'

// ** Custom Hooks
import { useSkin } from '../../../utility/hooks/useSkin'
import themeConfig from '../../../configs/themeConfig'
// ** Icons Imports
import { ChevronLeft } from 'react-feather'

// ** Styles
import '../../../@core/scss/react/pages/page-authentication.scss'

const ForgotPassword = () => {
  const { skin } = useSkin()

  const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
    source = (`../../../assets/images/${illustration}`).defualt
    if (!isUserLoggedIn()) {
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
              <CardTitle tag='h2' className='fw-bold mb-1'>
                Forgot Password? ????
              </CardTitle>
              <CardText className='mb-2'>
                Enter your email and we'll send you instructions to reset your password
              </CardText>
              <Form className='auth-forgot-password-form mt-2' onSubmit={e => e.preventDefault()}>
                <div className='mb-1'>
                  <Label className='form-label' for='login-email'>
                    Email
                  </Label>
                  <Input type='email' id='login-email' placeholder='john@example.com' autoFocus />
                </div>
                <Button color='primary' block>
                  Send reset link
                </Button>
              </Form>
              <p className='text-center mt-2'>
                <Link to='/login'>
                  <ChevronLeft className='rotate-rtl me-25' size={14} />
                  <span className='align-middle'>Back to login</span>
                </Link>
              </p>
            </Col>
          </Col>
        </Row>
      </div>
    )
  } 
}
export default ForgotPassword



