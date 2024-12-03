

export const HelpDropDown = ({ data }: { data: HelpDropDown[] }) => {
  return (
    <div className="flex flex-col gap-4 w-[340px] p-3">
      {data.map((e, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="border rounded-lg p-[10px]">
           {e.icon}
          </div>
      <div className="flex flex-col">
      <p className="text-lg">{e.title}</p>
      <p className="text-sm text-gray-500">{e.desc}</p>
      </div>

        </div>
      ))}
    </div>
  );
};
type HelpDropDown = {
  icon: JSX.Element;
  title: string;
  desc?:string
};
