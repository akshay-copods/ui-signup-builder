import React, { useEffect, useState } from "react";
import { Header, SignupBuilderWrapper } from "../../components";
import "../../index.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useFirebaseConfigStore } from "../../store/FirebaseConfigStore";
import {
  useButtonStore,
  useInputFieldStore,
  useLayoutStore,
  useLoginTypesStore,
  useThemeStore,
  useTypographyStore,
} from "../../store";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useBrandAssetStore } from "../../store/BrandAssetStore";
export const SignupBuilder = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { firebseConfig, setConfig }: any = useFirebaseConfigStore();

  const { theme, setTheme } = useThemeStore();
  const {
    setSocialButtonLayout,
    setSocialButtonPosition,
    setSocialButtonStyles,
    setSubmitButtonStyles,
  } = useButtonStore();
  const { getInputFieldData } = useInputFieldStore();
  const { setFontFamily, setLinks, setSubTitle, setTitle, setTitleText } =
    useTypographyStore();
  const {
    setApprovals,
    setLoginMethods,
    setUserApprovalLink,
    setSocialLoginTypes,
  } = useLoginTypesStore();
  const { setGrid, setGridContentWidth, setContentBackground } =
    useLayoutStore();
  const {
    setLogoImage,
    setLogoAlignment,
    setStatementsTitle,
    setStatementsSubtitle,
    setWelcomeMessage,
    setTestimonial,
    setTestiMonialStyling,
  } = useBrandAssetStore();

  const fetchConfig = async () => {
    const dbConfig = await getDocs(collection(db, "themeConfig"));

    const [newData] = dbConfig.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    //@ts-ignore
    setConfig(newData.themeConfig);
    //@ts-ignore
    setTheme(newData.themeConfig.theme);
    //@ts-ignore
    setSocialButtonLayout(newData.themeConfig.socialButton.layout);
    //@ts-ignore
    setSocialButtonPosition(newData.themeConfig.socialButton.position);
    //@ts-ignore
    setSocialButtonStyles(newData.themeConfig.socialButton.styles);
    //@ts-ignore
    setSubmitButtonStyles(newData.themeConfig.submitButton.styles);
    //@ts-ignore
    setGrid(newData.themeConfig.layout.gridLayout);
    //@ts-ignore
    setGridContentWidth(newData.themeConfig.layout.gridContentWidth);
    //@ts-ignore
    setContentBackground(newData.themeConfig.layout.contentBackground);
    //@ts-ignore
    setFontFamily(newData.themeConfig.typography.fontFamily);
    //@ts-ignore
    setLinks(newData.themeConfig.typography.links);
    //@ts-ignore
    setSubTitle(newData.themeConfig.typography.subTitle);
    //@ts-ignore
    setTitle(newData.themeConfig.typography.title);
    //@ts-ignore
    setTitleText(newData.themeConfig.typography.titleText);
    //@ts-ignore
    setLoginMethods(newData.themeConfig.loginTypes.loginMethods);
    //@ts-ignore
console.log(newData.themeConfig.loginTypes.approvals,'newData.themeConfig.loginTypes.socialLoginTypes')
    //@ts-ignore
   newData.themeConfig.loginTypes.socialLoginTypes.map((data)=>{
    return setSocialLoginTypes(data)
   })
     //@ts-ignore
   newData.themeConfig.loginTypes.approvals.map((data)=>{
    return setApprovals(data)
   })
    //@ts-ignore
    setLogoImage(newData.themeConfig.brandAssests?.logoImage?.imageUrl);
    //@ts-ignore
    setLogoAlignment(newData.themeConfig.brandAssests?.logoImage?.alignment);
    //@ts-ignore
    setStatementsTitle(newData.themeConfig.brandAssests?.statements?.title);
    //@ts-ignore
    setStatementsSubtitle( newData.themeConfig.brandAssests?.statements?.subtitle);
    //@ts-ignore
    setWelcomeMessage(newData.themeConfig.brandAssests?.welcomeMessage);
    //@ts-ignore
    setTestiMonialStyling( newData.themeConfig.brandAssests?.testimonials?.styling );
    // setLogos(newData.themeConfig.brandAssests?.logos);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchConfig();
  }, []);
  console.log(firebseConfig.loginTypes, "cong");
  const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;

  return (
    <div>
      <Header />
      {!isLoading ? (
        <SignupBuilderWrapper />
      ) : (
        <div
          style={{ height: "calc(100vh - 60px)" }}
          className="w-full flex justify-center items-center"
        >
          <Spin indicator={antIcon} size="large" />
        </div>
      )}
    </div>
  );
};
