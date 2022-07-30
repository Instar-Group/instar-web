import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const EventForm = () => {
  let [house, setHouse] = useState("Challengers");
  return (
    <div>
      <RadioGroup value={house} onChange={setHouse} name="house" id="house">
        <RadioGroup.Label className="text-white flex  ">
          Select House
        </RadioGroup.Label>
        <div className="mt-3 grid grid-cols-2 gap-4">
          <RadioGroup.Option className="" value="Challengers">
            {({ checked }) => (
              <div
                className={` flex  items-center justify-center  h-36 w-36 rounded-md cursor-pointer
                    ${checked ? "bg-[#FF5252]" : "bg-white"}`}
              >
                <span
                  className={`${
                    checked ? "bg-[#FF5252] text-white" : "bg-white  text-black"
                  }`}
                >
                  Challengers
                </span>
              </div>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="Gladiators">
            {({ checked }) => (
              <div
                className={` flex  items-center justify-center  h-36 w-36 rounded-md cursor-pointer
                    ${checked ? "bg-[#6BCB77]" : "bg-white"}`}
              >
                <span
                  className={`${
                    checked ? "bg-[#6BCB77] text-white" : "bg-white  text-black"
                  }`}
                >
                  Gladiators
                </span>
              </div>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="Knights">
            {({ checked }) => (
              <div
                className={` flex  items-center justify-center  h-36 w-36 rounded-md cursor-pointer
                    ${checked ? "bg-[#FFD93D]" : "bg-white"}`}
              >
                <span
                  className={`${
                    checked ? "bg-[#FFD93D] text-white" : "bg-white  text-black"
                  }`}
                >
                  Knights
                </span>
              </div>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="Warriors">
            {({ checked }) => (
              <div
                className={` flex  items-center justify-center  h-36 w-36 rounded-md cursor-pointer
                    ${checked ? "bg-[#72AAFC]" : "bg-white"}`}
              >
                <span
                  className={`${
                    checked ? "bg-[#72AAFC] text-white" : "bg-white  text-black"
                  }`}
                >
                  Warriors
                </span>
              </div>
            )}
          </RadioGroup.Option>
        </div>
      </RadioGroup>
    </div>
  );
};

export default EventForm;
