const colors = {

}

const styledBreakpoints = {
  xs: 0,
  sm: 768,
  md: 992,
  lg: 1200
}

const spacing = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  l: 24,
  xl: 32
}

export default {
  colors: {
    // primary: ,
    // primaryDark: ,
    // secondary: ,
    // info: ,
    // success: ,
    // warning: ,
    // error: ,
    // neutral: ,
    // border: ,
    // text: ,
    // lightText: ,
    // midText: ,
    // darkText: ,
    // backgroundLight: ,
    // background: ,
    // backgroundDark:
  },
  styledBreakpoints: {
    xs: styledBreakpoints.xs,
    sm: styledBreakpoints.sm,
    md: styledBreakpoints.md,
    lg: styledBreakpoints.lg
  },
  durations: {
    instantly: '0s',
    immediately: '0.05s',
    quickly: '0.1s',
    promptly: '0.2s',
    slowly: '0.4s',
    paused: '3.2s'
  },
  fonts: {
    default: 'Avenir, Nunito, Helvetica, Open Sans, sans-serif'
  },
  fontSize: {
    base: '14px'
  },
  spacing: {
    horizontal: {
      xxxs: spacing.xxxs,
      xxs: spacing.xxs,
      xs: spacing.xs,
      s: spacing.s,
      m: spacing.m,
      l: spacing.l,
      xl: spacing.xl
    },
    vertical: {
      xxxs: spacing.xxxs * 2,
      xxs: spacing.xxs * 2,
      xs: spacing.xs * 2,
      s: spacing.s * 2,
      m: spacing.m * 2,
      l: spacing.l * 2,
      xl: spacing.xl * 2
    }
  },
  padding: {
    container: '50px 30px',
    default: '30px',
    mobile: '30px 15px',
    navbar: '50px',
    sidebar: '240px'
  },
  misc: {
    borderRadius: '2px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
  },
  shadow: {
    flat: '0 0 0 0px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2)',
    raised: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  },
  zIndex: {
    toast: 10000,
    modal: 9000,
    overlay: 8000,
    dropdown: 9999,
    topbar: 6000,
    sidebar: 5000,
    dialog: 4000,
    popup: 3000,
    default: 1,
    deepdive: -99999
  }
}






