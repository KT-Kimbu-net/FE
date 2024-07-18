"use client";
import { useModalState } from "@/store/modal";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import {
  FilterCriteria,
  criteriaSelect,
  sortRanking,
  rankParameters,
  TResponse,
} from "@/utils/ranking";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { useUserState } from "@/store/user";
import { getRanking } from "@/libs/quiz/getRanking";

export default function QuizRanking() {
  const { setModalName } = useModalState();
  const [criteria, setCriteria] = useState<FilterCriteria>("Points");
  const { userData } = useUserState();
  const [filteredRankingData, setFilteredRankingData] = useState<any[]>([]);
  const [myRank, setMyRank] = useState<number>(0);
  const [loading, setLoading] = useState(true); // 아..

  const myRankData: TResponse = {
    nickname: userData?.nickname || "",
    sequenceDays: userData?.quiz.sequenceDays || 0,
    userId: userData?.userId || "",
    amount: userData?.quiz.amount || 0,
    creditAmount: userData?.creditAmount || 0,
  };

  useEffect(() => {
    setFilteredRankingData([]); // 초기화
    setLoading(true);
    getRanking(userData?.userId || "", rankParameters[criteria]).then(
      (data) => {
        console.log(rankParameters[criteria]);
        setFilteredRankingData(
          sortRanking(myRankData, data, rankParameters[criteria])
        );
        setMyRank(data.myrank);
        setLoading(false);
      }
    );
  }, [criteria]);

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
                  {criteriaSelect.map((item, i) => (
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
                      <TableHeader title="Rank" />
                      <TableHeader title="Score" />
                      <TableHeader title="Rating" criteria={criteria} />
                    </tr>
                  </thead>
                  <tbody role="rowgroup" className="px-4">
                    {filteredRankingData.map((data, index) => (
                      <TableBody
                        key={data.userId}
                        data={data}
                        index={index}
                        criteria={criteria}
                        myRank={myRank}
                        loading={loading}
                      />
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
