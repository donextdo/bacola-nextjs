import CheckBoxRow from "../CheckBox/CheckBox";

const Brands = () => {
  return (
    <div className="box-border max-h-[97px] max-w-[270px] p-4 m-8">
      <h4 className="max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem]">
        brands
      </h4>
      <CheckBoxRow inputId="brand1" htmlForId="brand1" name="frito lay" />
      <CheckBoxRow inputId="brand2" htmlForId="brand2" name="nespresso" />
      <CheckBoxRow inputId="brand3" htmlForId="brand3" name="oreo" />
      <CheckBoxRow inputId="brand4" htmlForId="brand4" name="quaker" />
      <CheckBoxRow inputId="brand5" htmlForId="brand5" name="welch's" />
    </div>
  );
};

export default Brands;
