import { Login, LoginSecion } from "@/components";

const Page = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex h-full items-center w-full  gap-10">
        <LoginSecion />
        <div className="border-l h-full "></div>
        <Login />
      </div>
    </div>
  );
};
export default Page;
