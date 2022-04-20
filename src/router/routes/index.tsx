import { lazy } from "react";

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/admin";

// ** Merge Routes
const Routes = [
  {
    path: "/withdraw",
    component: lazy(() => import("../../views/Withdraw")),
  },
  {
    path: "/user/settings",
    component: lazy(() => import("../../views/user/settings/Settings")),
  },
  {
    path: "/admin/stores",
    component: lazy(() => import("../../views/admin/stores")),
  },
  {
    path: "/admin/payments",
    component: lazy(() => import("../../views/admin/payments")),
  },
  {
    path: "/admin",
    component: lazy(() => import("../../views/Admin")),
  },
  {
    path: "/second-page",
    component: lazy(() => import("../../views/SecondPage")),
  },
  {
    path: "/login",
    component: lazy(() => import("../../views/Login")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/error",
    component: lazy(() => import("../../views/Error")),
    layout: "BlankLayout",
  },

  {
    path: '/pages/login-basic',
    component: lazy(() => import('../../views/pages/authentication/LoginBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/login-cover',
    component: lazy(() => import('../../views/pages/authentication/LoginCover')),
    layout: 'BlankLayout'
  },

  {
    path: '/pages/register-basic',
    component: lazy(() => import('../../views/pages/authentication/RegisterBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/register-cover',
    component: lazy(() => import('../../views/pages/authentication/RegisterCover')),
    layout: 'BlankLayout'
  },
  {
    path: '/forgot-password',
    component: lazy(() => import('../../views/pages/authentication/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/forgot-password-basic',
    component: lazy(() => import('../../views/pages/authentication/ForgotPasswordBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/forgot-password-cover',
    component: lazy(() => import('../../views/pages/authentication/ForgotPasswordCover')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/reset-password-basic',
    component: lazy(() => import('../../views/pages/authentication/ResetPasswordBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/reset-password-cover',
    component: lazy(() => import('../../views/pages/authentication/ResetPasswordCover')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/verify-email-basic',
    component: lazy(() => import('../../views/pages/authentication/VerifyEmailBasic')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/verify-email-cover',
    component: lazy(() => import('../../views/pages/authentication/VerifyEmailCover')),
    layout: 'BlankLayout'
  }
];

export { DefaultRoute, TemplateTitle, Routes };
