import { SelectProps } from "antd";

export const themeConfig = [
  {
    light: {
      backgroundColor: "white",
      primaryColor: "#2f54eb",
      secondaryColor: "red",
      textColor: "black",
    },
    dark: {
      backgroundColor: "white",
      primaryColor: "#2f54eb",
      secondaryColor: "red",
      textColor: "black",
    },
    texture: {
      backgroundColor: "white",
      primaryColor: "#2f54eb",
      secondaryColor: "red",
      textColor: "black",
    },
  },
];

export const fontSizes = [
  { value: "12px", label: "12px" },
  { value: "14px", label: "14px" },
  { value: "16px", label: "16px" },
  { value: "18px", label: "18px" },
];
export const titleFontSizes = [
  { value: "24px", label: "24px" },
  { value: "26px", label: "26px" },
  { value: "28px", label: "28px" },
  { value: "30px", label: "30px" },
];
export const fontWeight = [
  { value: "100", label: "100" },
  { value: "200", label: "200" },
  { value: "300", label: "300" },
  { value: "400", label: "400" },
  { value: "500", label: "500" },
  { value: "600", label: "600" },
  { value: "700", label: "700" },
  { value: "800", label: "800" },
  { value: "900", label: "900" },
];
export const linkStyle = [
  { value: "underline", label: "Underline" },
  { value: "none", label: "Underline None" },
];

export const fontsFamily = [
  { value: "'Open Sans', sans-serif", label: "Inter" },
  { value: "'Roboto', sans-serif", label: "Roboto" },
  { value: "cursive", label: "Cursive" },
];
export const logoAlignments: SelectProps["options"] = [
  {
    label: "Left",
    value: "left",
  },
  {
    label: "Center",
    value: "center",
  },
  {
    label: "Right",
    value: "right",
  },
];
export const layoutType = [
  {
    layout: "EQUAL_SPLIT",
    text: "Equally Split",

    // image: <EqualSplitLayout />,
  },
  {
    layout: "ONE_PRIMARY",
    text: "One Primary",
    // image: <PrimaryLayout />,
  },
];
export const buttonStates = [
  {
    label: "default State",
    value: "DEFAULT",
  },
  {
    label: "hover State",
    value: "HOVER",
  },
  {
    label: "active State",
    value: "ACTIVE",
  },
  {
    label: "disabled State",
    value: "DISABLED",
  },
];

export const inputStates = [
  {
    label: "default State",
    value: "DEFAULT",
  },

  {
    label: "active State",
    value: "ACTIVE",
  },
  {
    label: "disabled State",
    value: "DISABLED",
  },
  {
    label: "Error State",
    value: "ERROR",
  },
];

export const themeBox = [
  {
    bg: "bg-white",
    value: "light",
    text: "Light",
  },
  {
    bg: "bg-black",
    value: "dark",
    text: "Dark",
  },
  {
    bg: "bg-gray-400",
    value: "texture",
    text: "Texture",
  },
];
export const customLayoutData = [
  {
    label: "Testimonals",
    value: "testimonals ",

    // logo: <EditOutlined />,
    checked: true,
  },
  {
    label: "Logos",
    value: "logos ",

    // logo: <EditOutlined />,
    checked: false,
  },
  {
    label: "Values",
    value: "values ",

    // logo: <EditOutlined />,
    checked: false,
  },
  {
    label: "Marketing Banner",
    value: "marketingBanner ",

    // logo: <EditOutlined />,
    checked: false,
  },
  {
    label: "Statements",
    value: "statements ",

    // logo: <EditOutlined />,
    checked: true,
  },
];

// login types data config
export const emailPassData = [
  {
    label: "Magic Link ",
    value: "magic_link",
  },
  {
    label: "Magic Code",
    value: "magic_code",
  },
  {
    label: "Enable Password Login",
    value: "password",
  },
];

export const socialButtonOptions = [
  {
    icon: "logos:google-icon",
    name: "Google",
  },
  {
    icon: "logos:apple",
    name: "Apple",
  },
  {
    icon: "logos:github-icon",
    name: "Git",
  },
  {
    name: "Linkedin",
    icon: "logos:linkedin-icon",
  },
];
export const userApprovalOptions = [
  {
    name: "Terms of Use",
    link: "termsOfUse",
  },
  {
    name: "Privacy Policy",
    link: "privacyPolicy",
  },
];
