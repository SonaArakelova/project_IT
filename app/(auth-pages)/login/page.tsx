import {LoginForm} from "./_components/LoginForm";





export default function page() {
  return (
    <div className="min-h-screen bg-green-100 flex justify-center items-center p-6">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h1 className="text-6xl mt-4 text-green-950 text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
