import React, { useEffect, useState } from "react";
import { useBrandAssetStore } from "../../../../../store/BrandAssetStore";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { EditTestimonals } from "./EditTestimonals";
import { AddTestimonal } from "./AddTestimonal";
export const EditTestimonalWrapper = () => {
  const { getTestimonial, deleteTestimonal, testimonials, setTestimonial } =
    useBrandAssetStore();
  const [currentAccordion, setCurrentAccordion] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [openAddTestimonal, setAddTestimonal] = useState(false);
  const [id, setId] = useState("");
  useEffect(() => {
    testimonials.users;
  }, [testimonials.users]);
  console.log(testimonials.users);
  return (
    <div className="flex flex-col gap-3 ">
      {getTestimonial().map((data) => {
        console.log(data.personImage, "data.personImage");
        return (
          <div
            key={data.id}
            className="flex flex-col gap-1 border-b-[#0000000f]"
          >
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
      <div
        onClick={() => {
          setAddTestimonal(!openAddTestimonal),
            setTestimonial({
              ...testimonials,
              ...testimonials.users,
              id: (testimonials.users.length + 1).toString(),
              personImage:
                "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256",
              personDetails: "your name",
              personDesignation: "designation",
              personQuote: "enter quote",
            });
        }}
        tabIndex={0}
        aria-label="add testimonal"
        className="flex gap-1.5 items-center pl-5 text-xs text-geekblue-600"
      >
        <PlusOutlined style={{ fontSize: "12px" }} />
        <span>Add Testimonal</span>
      </div>
      {openAddTestimonal && <AddTestimonal />}
    </div>
  );
};
