import {RegisterForm} from "./_components/RegisterForm";

export default function page() {
  return (
        <div className="min-h-screen bg-green-100 flex justify-center items-center p-1">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            <h1 className="text-6xl  text-green-950 text-center">Registration</h1>
            <RegisterForm />
          </div>
        </div>
  )
}
