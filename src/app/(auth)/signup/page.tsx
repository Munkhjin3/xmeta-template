import { LoginSecion, SignupSection } from "@/components"


const Page = () => {
  return (
    <div className="flex flex-col h-screen max-sm:px-2 max-md:px-10 justify-center items-center">
    <div className="flex h-full items-center w-full  gap-10">
        <LoginSecion/>
      <div className="border-l h-full max-md:hidden "></div>
    <SignupSection/>
    </div>
  </div>
  )
}

export default Page