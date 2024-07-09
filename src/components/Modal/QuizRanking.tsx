"use client";
import { rankingData, rankSelect } from "@/data/rank/dataRank";
import { useModalState } from "@/store/modal";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
export default function QuizRanking() {
  const { setModalName } = useModalState();
  const [selectValue, setSelectValue] = useState(rankSelect[0]);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

  return (
    <>
      <div className="relative first-line:flex flex-col rounded-[12px] bg-opacity-100 bg-blue-300 w-[500px] h-[500px] box-border">
        {/* X button */}
        <div className="absolute right-0 top-0">
          <IoIosClose
            className="text-white text-5xl cursor-pointer hover:text-red-600 transform translate-x-[5px] -translate-y-[5px]"
            onClick={() => setModalName(null)}
          />
        </div>
        {/* White section */}
        <div className="flex flex-col items-center justify-center relative bg-white w-full mt-9 h-full rounded-t-none rounded-b-[12px]">
          {/* 테이블 추가 */}
          <div className="flex flex-col justify-center items-center">
            <div className="relative flex max-w-[500px] h-[490px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-sm shadow-[#dcd7d7] -mt-3">
              <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[13px] pt-4 shadow-2xl shadow-gray-200">
                <h4 className="text-lg font-bold text-navy-700 dark:text-white">
                  Quiz Ranking
                </h4>
                {/* Select */}
                <select
                  className="outline-none focus:outline-none p-2 bg-gray-100 rounded-3xl text-base font-medium text-blue-400 transition duration-200 hover:bg-white active:bg-gray-200 border border-gray-200"
                  value={selectValue}
                  onChange={handleSelectChange}
                >
                  {rankSelect.map((item, i) => (
                    <option value={item} key={i}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
                <table
                  role="table"
                  className="w-full min-w-[500px] overflow-x-scroll"
                >
                  <thead>
                    <tr role="row">
                      <th
                        colSpan={1}
                        role="columnheader"
                        title="Toggle SortBy"
                        className="cursor-pointer"
                      >
                        <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                          Rank
                        </div>
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        title="Toggle SortBy"
                        className="cursor-pointer"
                      >
                        <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                          Score
                        </div>
                      </th>
                      <th
                        colSpan={1}
                        role="columnheader"
                        title="500포인트 달성시 티켓 할인권 제공"
                        className="cursor-pointer"
                      >
                        <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                          Rating
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody role="rowgroup" className="px-4">
                    {rankingData.map((data, index) => (
                      <tr role="row" key={data.username}>
                        <td className="py-3 text-sm" role="cell">
                          <div className="flex items-center gap-2">
                            <div className="h-[30px] w-[30px] rounded-full">
                              {index < 3 ? (
                                <img
                                  src={data.imgSrc ?? ""}
                                  className="h-full w-full rounded-full"
                                  alt=""
                                />
                              ) : (
                                <div className="h-full w-full flex items-center justify-center text-lg font-bold">
                                  {index + 1}
                                </div>
                              )}
                            </div>
                            <p className="text-sm font-medium text-navy-700 dark:text-white">
                              {data.username}
                            </p>
                          </div>
                        </td>
                        <td className="py-3 text-sm" role="cell">
                          <div className="flex items-center gap-2">
                            <p className="text-md font-medium text-gray-600 dark:text-white">
                              {data.score}
                            </p>
                          </div>
                        </td>
                        <td className="py-3 text-sm" role="cell">
                          <div className="mx-4 flex font-bold">
                            <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-navy-700">
                              <div
                                className="flex h-full items-center justify-center rounded-md bg-blue-300"
                                style={{
                                  width: `${(data.score / 500) * 100}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
