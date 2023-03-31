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
import { User, defaultLogos } from "../../stylingConfig";
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
    setLogos,
    setTestiMonialStyling,
  } = useBrandAssetStore();

  const fetchConfig = async () => {
    const dbConfig = await getDocs(collection(db, "themeConfig"));

    const [newData] = dbConfig.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    //@ts-ignore
    setConfig(newData?.themeConfig);
  };
  useEffect(() => {
    fetchConfig();

    if (Object?.keys(firebseConfig)?.length > 0) {
      //@ts-ignore
      setTheme(firebseConfig?.theme);
      //@ts-ignore
      setSocialButtonLayout(firebseConfig?.socialButton?.layout);
      //@ts-ignore
      setSocialButtonPosition(firebseConfig?.socialButton?.position);
      //@ts-ignore
      setSocialButtonStyles(firebseConfig?.socialButton?.styles);
      //@ts-ignore
      setSubmitButtonStyles(firebseConfig?.submitButton?.styles);
      //@ts-ignore
      setGrid(firebseConfig?.layout?.gridLayout);
      //@ts-ignore
      setGridContentWidth(firebseConfig?.layout.gridContentWidth);
      //@ts-ignore
      setContentBackground(firebseConfig?.layout.contentBackground);
      //@ts-ignore
      setFontFamily(firebseConfig?.typography.fontFamily);
      //@ts-ignore
      setLinks(firebseConfig?.typography.links);
      //@ts-ignore
      setSubTitle(firebseConfig?.typography.subTitle);
      //@ts-ignore
      setTitle(firebseConfig?.typography.title);
      //@ts-ignore
      setTitleText(firebseConfig?.typography.titleText);
      //@ts-ignore
      setLoginMethods(firebseConfig?.loginTypes.loginMethods);
      //@ts-ignore
      firebseConfig?.loginTypes.socialLoginTypes.map((data) => {
        return setSocialLoginTypes(data);
      });
      //@ts-ignore
      firebseConfig?.loginTypes.approvals.map((data) => {
        return setApprovals(data);
      });
      //@ts-ignore
      setLogoImage(firebseConfig?.brandAssests?.logoImage?.imageUrl);
      //@ts-ignore
      setLogoAlignment(firebseConfig?.brandAssests?.logoImage?.alignment);
      //@ts-ignore
      setStatementsTitle(firebseConfig?.brandAssests?.statements?.title);

      setStatementsSubtitle(
        //@ts-ignore
        firebseConfig?.brandAssests?.statements?.subtitle
      );
      //@ts-ignore
      setWelcomeMessage(firebseConfig?.brandAssests?.welcomeMessage);

      setTestiMonialStyling(
        //@ts-ignore
        firebseConfig?.brandAssests?.testimonials?.styling
      );
      if (firebseConfig?.brandAssests?.testimonials?.users.length < 0) {
        User.map((data) => {
          setTestimonial(data);
        });
      } else {
        const userArr = firebseConfig?.brandAssests?.testimonials?.users.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.id === value.id)
        );
        console.log(userArr, "userArr");
        //@ts-ignore
        console.log(
          firebseConfig?.brandAssests?.testimonials?.users.length,
          ""
        );
        userArr.map((data) => {
          setTestimonial(data);
        });
      }
      if (firebseConfig?.brandAssests?.logos.length < 0) {
        defaultLogos.map((data) => {
          setLogos(data);
        });
      } else {
        const logoArr = firebseConfig?.brandAssests?.logos.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.id === value.id)
        );
        logoArr.map((data) => {
          setLogos(data);
        });
      }
      //
    }
    setIsLoading(false);
  }, [Object?.keys(firebseConfig)?.length]);
  console.log(firebseConfig, "firrebase");
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
