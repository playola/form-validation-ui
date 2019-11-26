/**
 * Formik theming
 */
const FORMIK_PRIMARY = '#000';
const FORMIK_SECONDARY = '#FFF';

/**
 * React Hook Form theming
 */
const REACT_HOOK_FORM_PRIMARY = '#EC5990';
const REACT_HOOK_FORM_SECONDARY = '#000';

export const theme = {
  color: {
    formikPrimary: FORMIK_PRIMARY,
    formikSecondary: FORMIK_SECONDARY,
    reactHookFormPrimary: REACT_HOOK_FORM_PRIMARY,
    reactHookFormSecondary: REACT_HOOK_FORM_SECONDARY,
  },
  breakpoint: {
    desktop: 1024,
    tablet: 768,
    mobile: 480,
  },
};
