import { useState, useEffect, useRef, ReactElement } from "react";

export const RangeSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(50);
  const progressRef = useRef(null);

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

  return (
    <div className="flex flex-col w-96 bg-white shadow-xl rounded-lg px-6 py-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-1">Range slider</h1>
      <p className="font-semibold text-lg text-gray-700">
        Use slider or enter min max price
      </p>
      <div className="flex justify-between items-center my-6">
        <div className="rounded-md">
          <span className="p-2 font-semibold">Min</span>
          <input
            onChange={(e) => setMinValue(e.target.value)}
            type="number"
            value={minValue}
            className="w-24 rounded-md border border-gray-400"
          ></input>
        </div>
        <div className="ml-2 font-semibold text-lg"> - </div>
        <div className="rounded-md">
          <span className="p-2 font-semibold">Max</span>
          <input
            onChange={(e) => setMaxValue(e.target.value)}
            type="number"
            value={maxValue}
            className="w-20 rounded-md border border-gray-400"
          ></input>
        </div>
      </div>
      <div className="mb-4">
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
             w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
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
          />
        </div>
      </div>
    </div>
  );
};
