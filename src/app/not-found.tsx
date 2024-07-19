import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen mt-24">
      <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-6xl">&#9888;</p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  존재하지 않는 페이지입니다.
                </h1>
                <p className="mt-3 text-base text-gray-500">
                  입력하신 주소가 정확한지 확인해주세요.
                </p>
              </div>
              <div className="mt-5 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link href="/">
                  <span className="inline-flex items-center rounded-md  border-transparent  bg-gradient-to-br from-red-700 to-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    Go back home
                  </span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
