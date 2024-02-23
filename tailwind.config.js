/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').plugin} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xxs: "420px", // => $media min(min-width: 420px) { ... }
      "xs-mobile": "460px",
      xs: "576px",
      md: "768px",
      md2: "850px",
      lg: "992px",
      lg2: "1100px",
      xl: "1200px",
      xll: "1360px",
      "2pxxl": "1440",
      "3xl": "1660px",
      "max-xxs": { raw: "(max-width: 419px)" },
      "max-xs-mobile": { raw: "(max-width: 459px)" },
      "max-xs": { raw: "(max-width: 575px)" },
      "max-md": { raw: "(max-width: 767px)" },
      "max-md2": { raw: "(max-width: 850px)" },
      "max-lg": { raw: "(max-width: 992px)" },
      "max-lg2": { raw: "(max-width: 1099px)" },
      "max-xl": { raw: "(max-width: 1199px)" },
      "max-2xl": { raw: "(max-width: 1440px)" },
      "max-3xl": { raw: "(max-width: 1660px)" },
      "big-mobile": { raw: "(min-width: 461px) and (max-width: 575px)" },
      "xs-md": { raw: "(min-width: 576px) and (max-width: 768px)" },
      "xs-lg": { raw: "(min-width: 577px) and (max-width: 992px)" },
      "xs-xl": { raw: "(min-width: 577px) and (max-width: 1200px)" },
      "md-lg": { raw: "(min-width: 768px) and (max-width: 991px)" },
      "md-md2": { raw: "(min-width: 768px) and (max-width: 850px)" },
      "md-xl": { raw: "(min-width: 768px) and (max-width: 1200px)" },
      "lg-lg2": { raw: "(min-width: 992px) and (max-width: 1099px)" },
      "lg-xl": { raw: "(min-width: 992px) and (max-width: 1200px)" },
      "lg-2xl": { raw: "(min-width: 992px) and (max-width: 1439px)" },
      "lg-big": { raw: "(min-width: 992px) and (max-width: 1660px)" },
      "lg2-xl": { raw: "(min-width: 1100px) and (max-width: 1199px)" },
      "lg2-lg3": { raw: "(min-width: 1200px) and (max-width: 1299px)" },
      "lg2-2xl": { raw: "(min-width: 1100px) and (max-width: 1439px)" },
      "xl-2xl": { raw: "(min-width: 1200px) and (max-width: 1439px)" },
      "xl-big": { raw: "(min-width: 1200px) and (max-width: 1660px)" },
      "2xl-3xl": { raw: "(min-width: 1440px) and (max-width: 1660px)" },
      "only-big": { raw: "(min-width: 1661px)" },
    },
    boxShadow: {
      dropdown: "0 3px 12px 1px rgba(44, 55, 130, 0.15)",
      navbar: "0 0 16px 0 rgb(0 0 0 / 20%)",
      active: "0 0 0 2px #018657",
      primary: "0 0 0 1px #018657",
      "grey-light": "0 0 0 1px #E5E5E5",
      "card-vehicle": "0px 0px 10px rgba(0, 0, 0, 0.11)",
      reservation: "2px 4px 0px #196047",
      unavailable: "0px 1.13636px 0px rgba(0, 0, 0, 0.25)",
      "cta-hover": "2px 6px 0 #196047",
      "cta-active": "2px 4px 0 #196047",
      "white-box": "0px 0px 11px rgba(0, 0, 0, 0.11)",
      "social-connect":
        "0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.24)",
      "see-reservation": "2px 4px 0px #F1E6D3",
      "whats-next": "0px 0px 16px rgba(0, 0, 0, 0.11)",
      none: "none",
      card: "0 0 16px rgba(0, 0, 0, .12)",
      "document-card": "0 0 10px rgba(0, 0, 0, 0.11)",
      crowdfunding: "2px 4px 0px #F1E6D3",
    },

    extend: {
      fontSize: {
        xxs: ["10px", "12px"],
        xsm: ["11px", "12px"],
      },
      colors: {
        gray: "#fafafa",
        "neutral-80": "#333",
        "light-200": "#e5e9f2",
        lighter: "#f5f6fa",
        "pop-blue": "#74bed2",
        "green-primary": "#196047",
        green: "#018657",
        orange: "#ff5812",
        primary: "#018657",
        // A duplicate of primary, as the 'primary' nameclashes with bootstrap
        "primary-green": "#018657",
        secondary: "#ff5812",
        field: "#f7f7f7",
        grey: "#999",
        "grey-lighter": "#DDDDDD",
        "grey-light": "#e5e5e5",
        "grey-dark": "#333",
        "grey-medium": "#999",
        darker: "#1B1B1B",
        danger: "#f44336",
        error: "#e85347",
      },
      minHeight: {
        "72px": "4.5rem",
        18: "4.5rem",
      },
      maxHeight: {
        "70px": "4.375rem",
        "72px": "4.5rem",
      },
      height: {
        17: "4.375rem",
        35: "8.75rem",
        "97vh": "97vh",
        "100vh": "100vh",
      },
      zIndex: {
        9: "9",
        19: "19",
        800: "800",
      },
      content: {
        stub: "",
      },
      flexDirection: {
        unset: "unset",
      },
      spacing: {
        "6px": "6px",
        2.5: "0.625rem",
        15: "3.75rem",
        "18.5px": "18.5px",
        "45%": "45%",
        85: "85%",
        unset: "unset",
      },
      backgroundSize: {
        "100%": "100% 100%",
      },
      letterSpacing: {
        "002em": "0.002em",
      },
      fontFamily: {
        brice: ["Brice, sans-serif"],
        montserrat: ["Montserrat, sans-serif"],
      },
      transitionDuration: {
        400: "0.4s",
      },
      transform: {
        center: "-50%",
      },
      gridTemplateColumns: {
        "3/1": "0.3fr 1fr",
        "1/3": "1fr 0.3fr",
        "4/1": "0.4fr 1fr",
        "1/4": "1fr 0.4fr",
        fifty: "0.5fr 0.5fr",
        "6/1": "0.6fr 1fr",
        "1/6": "1fr 0.6fr",
        "confirm-recap": "0.7fr 0.3fr",
        "2/1/1": "2fr 1fr 1fr",
        "1/1/2": "1fr 1fr 2fr",
        footer: "200px minmax(900px, 1fr) 100px",
        "footer-section": "1.25fr 0.75fr 1.25fr 1fr 1fr",
        "footer-section-responsive":
          "1fr minmax(100px, 1fr) minmax(180px, 1fr) minmax(120px, 1fr) minmax(160px, 1fr)",
        "vehicle-list-item": "1fr 2fr 0.6fr",
        "vehicle-list-item-md": "1fr minmax(200px, 2fr) 175px",
        "vehicle-list-item-sidebar": "1fr minmax(275px, 2fr) 190px",
        "characteristics-modal": "repeat(4, minmax(0,auto))",
      },
      maxWidth: {
        "1/6": "16.6666666667%",
        "1/4": "25%",
        "1/3": "33.3333333333%",
        "2/3": "66.666667%",
        "3/4": "75%",
        "5/6": "83.33%",
        unset: "unset",
      },
      width: {
        18: "4.5rem",
      },
      borderRadius: {
        "10px": "10px",
      },
      backgroundImage: {
        checkbox:
          "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\")",
        "lp-tesla": "url('~assets/img/lp/tesla.png')",
      },
      transformOrigin: {
        "top-center": "top center",
      },
      transitionDelay: {
        50: "50ms",
      },
      scale: {
        25: "0.25",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities }) {
      addComponents({
        ".container": {
          width: "100%",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "14px",
          paddingRight: "14px",
        },
        ".bs-col": {
          position: "relative",
          width: "100%",
          paddingLeft: "14px",
          paddingRight: "14px",
        },
        ".bs-row": {
          display: "flex",
          flexWrap: "wrap",
          marginRight: "-14px",
          marginLeft: "-14px",
        },
      });
      addUtilities({
        ".carlili-input": {
          width: "100%",
          height: "54px",
          padding: "16px 6px 16px 36px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "12px",
          lineHeight: "20px",
          color: "#333",
          background: "#fff",
        },
        ".carlili-input::placeholder": {
          color: "#aaa",
        },
      });
    }),
  ],
};
