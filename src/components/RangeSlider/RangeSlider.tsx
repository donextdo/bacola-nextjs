import { useRouter } from "next/router";
import { useState, useEffect, useRef, ReactElement } from "react";

export const RangeSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(50);
  const progressRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handleMin = (e: { target: { value: string } }) => {
    if (maxValue - minValue >= 0 && maxValue <= 50) {
      if (parseInt(e.target.value) > parseInt(maxValue.toString())) {
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e: { target: { value: string } }) => {
    if (maxValue - minValue >= 0 && maxValue <= 50) {
      if (parseInt(e.target.value) < parseInt(minValue.toString())) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = `${(minValue / 50) * 100}%`;
      progressRef.current.style.right = `${(1 - maxValue / 50) * 100}%`;
    }
  }, [minValue, maxValue]);

  const setPriceQuery = () => {
    console.log("minValue: ", minValue);
    console.log("maxValue: ", maxValue);
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        min_price: minValue,
        max_price: maxValue,
      },
    });
  };

  return (
    <div className="box-border max-h-[85px] max-w-[270px] lg:mt-12  ">
      <h4 className="max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem] font-ff-headings">
        filter by price
      </h4>

      <div className="mb-4 max-h-[47px] max-w-[270px]">
        <div className="slider relative h-1 rounded-md bg-gray-300">
          <div
            className="progress absolute h-1 bg-black rounded"
            ref={progressRef}
          ></div>
        </div>
        <div className="range-input relative">
          <input
            onChange={handleMin}
            type="range"
            value={minValue}
            min={0}
            step={10}
            max={50}
            className="range-min absolute
             w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none "
            placeholder="Select a minimum value"
          />

          <input
            onChange={handleMax}
            type="range"
            value={maxValue}
            min={0}
            step={10}
            max={50}
            className="range-max absolute
             w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
            placeholder="Select a maximum value"
          />
        </div>
      </div>
      <div className="max-h-[47px] max-w[270px]">
        <div className="max-h-[18px] max-w[270px] grid gap-0 grid-cols-2 ">
          <div className="text-[.75rem]  mt-1 capitalize text-gray-400">
            price:
            <span className="text-black font-semibold">
              {" "}
              ${minValue}
            </span> -{" "}
            <span className="text-black font-semibold"> ${maxValue}</span>
          </div>
          <div className=" ml-16 ">
            <button
              type="button"
              className="uppercase text-[.75rem] ml-3 font-semibold"
              onClick={setPriceQuery}
            >
              filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
