export default function DetailScore() {
  const inningThStyle = "w-10 font-medium";
  const inningTdStyle = "px-2 text-center";

  return (
    <section className="w-full flex flex-col gap-6 justify-center mt-4">
      <section className="relative border-t-[2px] border-black w-full">
        <span className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white px-2 ">
          스코어
        </span>
      </section>
      {/* 라이브스코어 컴포넌트화 필수 */}
      <table className="border-collapse w-full">
        <thead className="bg-gray-800">
          <tr className="text-white">
            <th scope="col" className="rounded-tl-xl w-20"></th>
            <th scope="col" className={inningThStyle}>
              1
            </th>
            <th scope="col" className={inningThStyle}>
              2
            </th>
            <th scope="col" className={inningThStyle}>
              3
            </th>
            <th scope="col" className={inningThStyle}>
              4
            </th>
            <th scope="col" className={inningThStyle}>
              5
            </th>
            <th scope="col" className={inningThStyle}>
              6
            </th>
            <th scope="col" className={inningThStyle}>
              7
            </th>
            <th scope="col" className={inningThStyle}>
              8
            </th>
            <th scope="col" className={inningThStyle}>
              9
            </th>
            <th scope="col" className={inningThStyle}>
              <span>10</span>
            </th>
            <th scope="col" className={inningThStyle}>
              <span>11</span>
            </th>
            <th scope="col" className={inningThStyle}>
              <span>12</span>
            </th>
            <th scope="col" className="w-10">
              <span>R</span>
            </th>
            <th scope="col" className="w-10">
              <span>H</span>
            </th>
            <th scope="col" className="w-10">
              <span>E</span>
            </th>
            <th scope="col" className="w-10">
              <span>B</span>
            </th>
            <th scope="col" className="w-10 rounded-tr-xl"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#f3f3f3]">
            <td className="px-2 border-r-[1px] border-white">KT</td>
            <td className={inningTdStyle}>2</td>
            <td className={inningTdStyle}>10</td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
          </tr>
          <tr className="bg-[#f3f3f3] border-t-[1px] border-white">
            <td className="px-2 rounded-bl-xl border-r-[1px] border-white">
              Kia
            </td>
            <td className={inningTdStyle}>2</td>
            <td className={inningTdStyle}>1</td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className={inningTdStyle}></td>
            <td className="px-2 rounded-br-xl"></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
