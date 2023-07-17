import TemplateItems from "./TemplateItems";

const Template = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="p-5 w-auto border-2 border-[#DDECF2]-200 rounded-sm">
        <div className="border-2 border-green-100">
          <TemplateItems />
        </div>
      </div>
    </div>
  );
};

export default Template;
