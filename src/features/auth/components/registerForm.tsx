import clsx from "clsx";

export const RegisterForm = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("", className)}>
      <h1 className="text-[64px] text-[#E7E9EA]">Happening now</h1>
      <h3 className="text-[34px] text-[#E7E9EA]">Join Twitter today.</h3>
      <div className="bg-white sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
        <div className="px-4 py-8 sm:px-10">
          <div className="relative mt-6">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>

          <div className="mt-6">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  placeholder="Full name"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Create your account
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10">
          <p className="text-xs leading-5 text-gray-500">
            By signing up, you agree to our{" "}
            <a href="#" className="font-medium text-gray-900 hover:underline">
              Terms
            </a>
            ,{" "}
            <a href="#" className="font-medium text-gray-900 hover:underline">
              Data Policy
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-gray-900 hover:underline">
              Cookies Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
