import React from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import {
  useButtonStore,
  useInputFieldStore,
  useLayoutStore,
  useLoginTypesStore,
  useLogoStore,
  useThemeStore,
  useTypographyStore,
} from "../../store";
import { useBrandAssetStore } from "../../store/BrandAssetStore";

export const Header = () => {
  const { theme } = useThemeStore();
  const { socialButton, submitButton } = useButtonStore();
  const { getInputFieldData } = useInputFieldStore();
  const { getTypographyStyles } = useTypographyStore();
  const { getAllLoginTypes } = useLoginTypesStore();
  const { getLayoutData } = useLayoutStore();
  const {getBrandAssets}=useBrandAssetStore()

  const saveConfig = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "themeConfig"), {
        themeConfig: {
          theme,
          socialButton,
          submitButton,
          inputField: getInputFieldData(),
          typography: getTypographyStyles(),
          loginTypes: getAllLoginTypes(),
          layout: getLayoutData(),
          brandAssests:getBrandAssets()
        },
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="px-5 py-4 flex justify-start border-b border-customBorderColor-100">
      <h3
        tabIndex={0}
        aria-label="Sign Up Builder"
        className="text-2xl text-customBlack-600 font-medium"
      >
        Sign Up Builder
      </h3>
      <button
        onClick={saveConfig}
        className="text-white px-2 py-1 border rounded-md bg-geekblue-600 ml-auto"
      >
        Save
      </button>
    </div>
  );
};
