import { addDoc, collection, getDocs } from "firebase/firestore";
import React from "react";
import { SignupComponent } from "react-wrapper";
import { db } from "../../../../firebase";

import {
  useButtonStore,
  useInputFieldStore,
  useLoginTypesStore,
  useThemeStore,
  useTypographyStore,
} from "../../../../store";

const fetchPost = async () => {
  await getDocs(collection(db, "todos")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    console.log(newData);
  });
};

export const SignupFormTemplate = () => {
  const { theme } = useThemeStore();
  const { socialButton, submitButton } = useButtonStore();
  const { getInputFieldData } = useInputFieldStore();
  const { getTypographyStyles } = useTypographyStore();
  const { getAllLoginTypes } = useLoginTypesStore();
  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        themeConfig: {
          theme,
          socialButton,
          submitButton,
          inputField: getInputFieldData(),
          typography: getTypographyStyles(),
          loginTypes: getAllLoginTypes(),
        },
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <button onClick={addTodo}>save</button>
      <SignupComponent
        data={{
          theme,
          socialButton,
          submitButton,
          inputField: getInputFieldData(),
          typography: getTypographyStyles(),
          loginTypes: getAllLoginTypes(),
        }}
      />
    </div>
  );
};
