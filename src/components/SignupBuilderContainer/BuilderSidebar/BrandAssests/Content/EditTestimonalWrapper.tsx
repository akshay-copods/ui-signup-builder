import React, { useEffect, useState } from "react";
import { useBrandAssetStore } from "../../../../../store/BrandAssetStore";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { EditTestimonals } from "./EditTestimonals";
export const EditTestimonalWrapper = () => {
  const { getTestimonial, deleteTestimonal, testimonials } =
    useBrandAssetStore();
  const [currentAccordion, setCurrentAccordion] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [id, setId] = useState("");
  useEffect(() => {
    testimonials.users;
  }, [testimonials.users]);
  return (
    <div className=" ">
      {getTestimonial().map((data) => {
        return (
          <div key={data.id} className="flex flex-col gap-1">
            <div
              className={`flex  px-11 justify-between items-center hover:bg-gray-100 py-3`}
              onMouseEnter={() => setOpenAction(true)}
              onMouseLeave={() => setOpenAction(false)}
            >
              <div className="flex gap-3 items-center">
                <img
                  style={{ borderRadius: "50%" }}
                  className="w-10"
                  src={data.personImage}
                  alt=""
                />
                <span>{data.personDetails}</span>
              </div>
              {openAction && (
                <div className={`flex gap-2.5 items-center`}>
                  <DeleteOutlined
                    onClick={() => deleteTestimonal(data.id)}
                    className="text-customBlack-400"
                  />
                  <hr className="h-5 w-px bg-gray-400" />
                  <EditOutlined
                    onKeyUp={(e) => {
                      if (e.key === "Enter")
                        setCurrentAccordion(!currentAccordion);
                    }}
                    onClick={() => {
                      setCurrentAccordion(!currentAccordion);
                      setId(data.id);
                    }}
                    className="text-customBlack-400"
                  />
                </div>
              )}
            </div>

            {data.id === id && currentAccordion && (
              <EditTestimonals
                data={data}
                setCurrentAccordion={setCurrentAccordion}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
