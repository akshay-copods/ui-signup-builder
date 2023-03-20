import React, { useState } from "react";
import { BuilderSidebarWrapper, SignupFormContainer } from "../index";
// import { BuilderSidebar } from "./BuilderSidebar/BuilderSidebar"
export const SignupBuilderContainer = () => {
  const [editMenuOpen, setEditMenuOpen] = useState(false);

  return (
    <div className="flex">
      <div className="flex flex-1" id="builder-container">
        <SignupFormContainer />
      </div>
      <div className="w-355 border-natural-5 border">
        <BuilderSidebarWrapper editMenuOpen={editMenuOpen} setEditMenuOpen={setEditMenuOpen} />
      </div>
    </div>
  );
};
