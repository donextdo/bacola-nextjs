import CheckBoxRow from "../CheckBox/CheckBox";

const Status = () => {
  return (
    <div className="box-border max-h-[97px] max-w-[270px] p-4 ml-8 mb-8">
      <h4 className="max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem]">
        Product Status
      </h4>
      <CheckBoxRow inputId="status1" htmlForId="status1" name="in stock" />
      <CheckBoxRow inputId="status2" htmlForId="status2" name="on sate" />
    </div>
  );
};

export default Status;
