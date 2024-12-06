
import { Login, LoginSecion } from "@/components";

const Page = () => {

  return (
    <div className="flex flex-col  max-sm:px-2 max-md:px-10 h-screen justify-center items-center">
      <div className="flex h-full items-center w-full  gap-10">
        <LoginSecion />
        <div className="border-l h-full max-md:hidden "></div>
        <Login />
      </div>
    </div>
  );
};
export default Page;
