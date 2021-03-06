// @ts-nocheck
// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, Button, CardBody, CardTitle, CardHeader, FormFeedback } from 'reactstrap'

// ** Third Party Components
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Custom Components
import InputPasswordToggle from '../../../../@core/components/input-password-toggle'

// ** Demo Components
// import ApiKeysList from './ApiKeysList'
// import CreateApiKey from './CreateApikey'
// import TwoFactorAuth from './TwoFactorAuth'
import RecentDevices from './RecentDevices'

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const data = {
  accountSetting: {
    general: {
      avatar: require('../../../../assets/images/portrait/small/avatar-s-11.jpg').default,
      username: 'johndoe',
      fullName: 'John Doe',
      email: 'granger007@hogward.com',
      company: 'PIXINVENT'
    },
    info: {
      bio: '',
      dob: null,
      country: 'USA',
      website: '',
      phone: 6562542568
    },
    social: {
      socialLinks: {
        twitter: 'https://www.twitter.com',
        facebook: '',
        google: '',
        linkedIn: 'https://www.linkedin.com',
        instagram: '',
        quora: ''
      },
      connections: {
        twitter: {
          profileImg: require('../../../../assets/images/avatars/11-small.png').default,
          id: 'johndoe'
        },
        google: {
          profileImg: require('../../../../assets/images/avatars/3-small.png').default,
          id: 'luraweber'
        },
        facebook: {},
        github: {}
      }
    },
    notification: {
      commentOnArticle: true,
      answerOnForm: true,
      followMe: false,
      newAnnouncements: true,
      productUpdates: true,
      blogDigest: false
    }
  }
}


const defaultValues = {
  newPassword: '',
  currentPassword: '',
  retypeNewPassword: ''
}

const SecurityContent = () => {
  const SignupSchema = yup.object().shape({
    currentPassword: yup
      .string()
      .min(8, obj => showErrors('?????????????? ????????????', obj.value.length, obj.min))
      .required(),
    newPassword: yup
      .string()
      .min(8, obj => showErrors('?????????? ????????????', obj.value.length, obj.min))
      .required(),
    retypeNewPassword: yup
      .string()
      .min(8, obj => showErrors('?????????????????????? ????????????', obj.value.length, obj.min))
      .required()
      .oneOf([yup.ref(`newPassword`), null], '???????????? ???????????? ??????????????????')
  })
  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      return null
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>???????????????? ????????????</CardTitle>
        </CardHeader>
        <CardBody className='pt-1'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm='6' className='mb-1'>
                <Controller
                  control={control}
                  id='currentPassword'
                  name='currentPassword'
                  render={({ field }) => (
                    <InputPasswordToggle
                      label='?????????????? ????????????'
                      htmlFor='currentPassword'
                      className='input-group-merge'
                      invalid={errors.currentPassword && true}
                      {...field}
                    />
                  )}
                />
                {errors.currentPassword && (
                  <FormFeedback className='d-block'>{errors.currentPassword.message}</FormFeedback>
                )}
              </Col>
            </Row>
            <Row>
              <Col sm='6' className='mb-1'>
                <Controller
                  control={control}
                  id='newPassword'
                  name='newPassword'
                  render={({ field }) => (
                    <InputPasswordToggle
                      label='?????????? ????????????'
                      htmlFor='newPassword'
                      className='input-group-merge'
                      invalid={errors.newPassword && true}
                      {...field}
                    />
                  )}
                />
                {errors.newPassword && <FormFeedback className='d-block'>{errors.newPassword.message}</FormFeedback>}
              </Col>
              <Col sm='6' className='mb-1'>
                <Controller
                  control={control}
                  id='retypeNewPassword'
                  name='retypeNewPassword'
                  render={({ field }) => (
                    <InputPasswordToggle
                      label='?????????????????????? ????????????'
                      htmlFor='retypeNewPassword'
                      className='input-group-merge'
                      invalid={errors.newPassword && true}
                      {...field}
                    />
                  )}
                />
                {errors.retypeNewPassword && (
                  <FormFeedback className='d-block'>{errors.retypeNewPassword.message}</FormFeedback>
                )}
              </Col>
              <Col xs={12}>
                <p className='fw-bolder'>???????????????????? ?????? ????????????:</p>
                <ul className='ps-1 ms-25'>
                  <li className='mb-50'>?????????????? 8 ???????????????? ?? ????????????</li>
                  <li className='mb-50'>?????? ?????????????? ???????? ???????????? ?????????????? ????????????????</li>
                  {/* <li>At least one number, symbol, or whitespace character</li> */}
                </ul>
              </Col>
              <Col className='mt-1' sm='12'>
                <Button type='submit' className='me-1' color='primary'>
                  ?????????????????? ??????????????????
                </Button>
                <Button color='secondary' outline>
                  ????????????????
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
      {/* <TwoFactorAuth />
      <CreateApiKey />
      <ApiKeysList /> */}
      <RecentDevices />
    </Fragment>
  )
}

export default SecurityContent
