import { FC, useState } from "react";

interface ComponentProps {
  inputId: String;
  htmlForId: String;
  name: String;
}

const CheckBoxRow: FC<ComponentProps> = ({ inputId, htmlForId, name }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="relative max-h-[59px] max-w-[270px] flex items-center hover:cursor-pointer">
      <div className="flex flex-row">
        <input
          type="checkbox"
          id={inputId as string}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="mr-2 min-h-[14px] min-w-[14px] hover:cursor-pointer accent-blue-900 hover:bg-blue-900"
        />
        <label
          htmlFor={htmlForId as string}
          className={`select-none text-[.8125rem]  font-medium hover:cursor-pointer capitalize ${
            isChecked ? "text-blue-900" : "text-gray-500"
          }`}
        >
          {name}
        </label>
      </div>
    </div>
  );
};

export default CheckBoxRow;
