import React from "react";
import EqualSplitLayout from "./assests/EqualSplitLayout";
import PrimaryLayout from "./assests/PrimaryLayout";
import { AddInputFields } from "./types/InputStoreTypes";
import { Alignment } from "./types/LogoStoreTypes";

export const themeConfig = [
  {
    light: {
      backgroundColor: "#ffffff",
      primaryColor: "#2f54eb",
      secondaryColor: "red",
      textColor: "#000000",
      labelColor: "#000000",
    },
    dark: {
      backgroundColor: "#000000",
      primaryColor: "#2f54eb",
      secondaryColor: "red",
      textColor: "#000000",
      labelColor: "#ffffff",
    },
    texture: {
      backgroundColor: "#ffffff",
      primaryColor: "#2f54eb",
      secondaryColor: "red",
      textColor: "#ffffff",
      labelColor: "#ffffff",
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
export const logoAlignments = [
  {
    label: "Left",
    value: Alignment.LEFT,
  },
  {
    label: "Center",
    value: Alignment.CENTER,
  },
  {
    label: "Right",
    value: Alignment.RIGHT,
  },
];
export const layoutType = [
  {
    layout: "EQUAL_SPLIT",
    text: "Equally Split",
    image: <EqualSplitLayout /> 
  },
  {
    layout: "ONE_PRIMARY",
    text: "One Primary",
    image: <PrimaryLayout />,
  },
];
export const buttonStates = [
  {
    label: "Default State",
    value: "DEFAULT",
  },
  {
    label: "Hover State",
    value: "HOVER",
  },
  {
    label: "Active State",
    value: "ACTIVE",
  },
  {
    label: "Disabled State",
    value: "DISABLED",
  },
];

export const inputStates = [
  {
    label: "Default State",
    value: "DEFAULT",
  },

  {
    label: "Active State",
    value: "ACTIVE",
  },
  {
    label: "Disabled State",
    value: "DISABLED",
  },
  {
    label: "Error State",
    value: "ERROR",
  },
];
export const imageShape =[
  { value: "CIRCLE", label: "Circular" },
  { value: "SQUARE", label: "Square" },
]
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
    type: "STATEMENTS",
    name: "Statements",
    checked: true,
  },
  {
    type: "TESTIMONALS",
    name: "Testimonals",
    checked: true,
  },
  {
    type: "LOGO",
    name: "logo",
    checked: false,
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
export const socialLogin= [
  {
    icon: "logos:google-icon",
    name: "Google",
  },
  {
    icon: "logos:github-icon",
    name: "Git",
  },
]
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
export const User= [
  {
    id: "1",
    personImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdsDXrAmRBMBpVvGrc6PBYYb9UBP5Q7ltfA&usqp=CAU",
    personDetails: "John Doe",
    personDesignation: "Engineer",
    personQuote:
      "This SAAS product has made my life so much easier! It's intuitive, efficient, and has all the features I need to run my business smoothly.",
  },
  {
    id: "2",
    personImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdsDXrAmRBMBpVvGrc6PBYYb9UBP5Q7ltfA&usqp=CAU",
    personDetails: "john Dow",
    personDesignation: "Engineer",
    personQuote:
      "This SAAS product has made my life so much easier! It's intuitive, efficient, and has all the features I need to run my business smoothly.",
  },
]
export const defaultLogos=[    {
  id: "1",
  imageUrl:
    "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256",
},
{
  id: "2",
  imageUrl:
    "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256",
},
{
  id: "3",
  imageUrl:
    "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256",
},
{
  id: "4",
  imageUrl:
    "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256",
},
{
  id: "5",
  imageUrl:
    "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256",
},
{
  id: "6",
  imageUrl:
    "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256",
},]
export const userApprovalOptions = [
  {
    name: "Terms of Use",
    link: "",
  },
  {
    name: "Privacy Policy",
    link: "",
  },
];
export const addInputFieldsData = [
  {
    label: "Name",
    name: AddInputFields.NAME,
    placeholder: "Enter Name",
  },
  {
    label: "Company Name",
    name: AddInputFields.COMPANY_NAME,
    placeholder: "Enter Company Name",
  },
  {
    label: "Phone Number",
    name: AddInputFields.PHONE_NUMBER,
    placeholder: "Please Enter Phone Number",
  },
];
