"use client";

import { useModalState } from "@/store/modal";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

import {
  criteriaDescriptions,
  FilterCriteria,
  getRating,
  getScore,
  getTopRankingUsers,
  rankImgSrc,
  rankSelect,
} from "@/utils/ranking";
import { UserData } from "@/types/api";

export default function QuizRanking({
  currentUser,
}: {
  currentUser: UserData;
}) {
  const { setModalName } = useModalState();
  const [criteria, setCriteria] = useState<FilterCriteria>("Points");

  // 랭킹 데이터 가져오기
  const filteredRankingData = getTopRankingUsers(currentUser, criteria);
  console.log(currentUser);
  console.log(filteredRankingData);
  return (
    <>
      <div className="relative first-line:flex flex-col rounded-[12px] bg-opacity-100 bg-[#a42a2a] w-[500px] h-[670px] box-border">
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
            <div className="relative flex max-w-[500px] h-full w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-sm shadow-[#dcd7d7] -mt-3">
              <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[13px] pt-4 shadow-2xl shadow-gray-200">
                <h4 className="text-lg font-bold text-navy-700 dark:text-white">
                  Quiz Ranking
                </h4>
                {/* Select */}
                <select
                  className="outline-none focus:outline-none p-2 bg-gray-100 rounded-3xl text-base font-medium text-red-400 transition duration-200 hover:bg-white active:bg-gray-200 border border-gray-200"
                  value={criteria}
                  onChange={(e) =>
                    setCriteria(e.target.value as FilterCriteria)
                  }
                >
                  {rankSelect.map((item, i) => (
                    <option value={item} key={i}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full pl-2 overflow-hidden">
                <table role="table" className="w-full min-w-[480px]">
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
                        title={criteriaDescriptions[criteria]}
                        className="cursor-pointer"
                      >
                        <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                          Rating
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody role="rowgroup" className="px-4">
                    {filteredRankingData.map((data, index) => (
                      <tr
                        role="row"
                        key={data.userId}
                        className={
                          index === 0
                            ? "bg-yellow-100 bg-opacity-50 rounded-3xl"
                            : ""
                        }
                      >
                        <td className="py-3 text-sm" role="cell">
                          <div className="flex items-center gap-2">
                            <div className="h-[30px] w-[30px] rounded-full">
                              {index < 4 ? (
                                <img
                                  src={rankImgSrc[index] ?? ""}
                                  className="h-full w-full rounded-full"
                                  alt=""
                                />
                              ) : (
                                <div className="h-full w-full flex items-center justify-center text-lg font-bold">
                                  {index}
                                </div>
                              )}
                            </div>
                            <p
                              className={`text-sm font-medium ${
                                index === 0 ? "text-red-500" : "text-navy-700"
                              } dark:text-white`}
                            >
                              {data.nickname}
                            </p>
                          </div>
                        </td>
                        <td className="py-3 text-sm" role="cell">
                          <div className="flex items-center gap-2">
                            <p
                              className={`text-md font-medium ${
                                index === 0 ? "text-green-500" : "text-gray-600"
                              } dark:text-white`}
                            >
                              {getScore(data, criteria)}
                            </p>
                          </div>
                        </td>
                        <td className="py-3 text-sm" role="cell">
                          <div className="mx-4 flex font-bold">
                            <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-navy-700">
                              <div
                                className={`flex h-full items-center justify-center rounded-md ${
                                  index === 0 ? "bg-green-300" : "bg-red-300"
                                }`}
                                style={{
                                  width: `${
                                    (getScore(data, criteria) /
                                      getRating(criteria)) *
                                    100
                                  }%`,
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
