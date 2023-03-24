import CheckBoxRow from "../CheckBox/CheckBox";

const Categories = () => {
  return (
    <div className="box-border max-h-[303.5px] max-w-[270px] p-4 m-8">
      <h4 className="max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem]">
        PRODUCT CATEGORIES
      </h4>
      <CheckBoxRow inputId="category1" htmlForId="category1" name="beverages" />
      <CheckBoxRow
        inputId="category2"
        htmlForId="category2"
        name="biscuits & snacks"
      />
      <CheckBoxRow
        inputId="category3"
        htmlForId="category3"
        name="breads & bakery"
      />
      <CheckBoxRow
        inputId="category4"
        htmlForId="category4"
        name="breakfast & dairy"
      />
      <CheckBoxRow
        inputId="category5"
        htmlForId="category5"
        name="frozen foods"
      />
      <CheckBoxRow
        inputId="category6"
        htmlForId="category6"
        name="fruits & vegetables"
      />
    </div>
  );
};

export default Categories;
