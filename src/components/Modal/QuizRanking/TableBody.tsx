import { SvgQuizLoadingLoading } from "@/utils/img/Svg";
import {
  FilterCriteria,
  getRating,
  getScore,
  rankImgSrc,
} from "@/utils/ranking";
import Image from "next/image";

type TableBodyProps = {
  data: any;
  index: number;
  criteria: string;
  myRank: number;
  loading: boolean;
};

export default function TableBody({
  data,
  index,
  criteria,
  myRank,
  loading,
}: TableBodyProps) {
  const score = getScore(data, criteria as FilterCriteria);
  const rate = getRating(criteria as FilterCriteria);
  const width = score ?? 0 > rate ? rate : (score ?? 0 / rate) * 100;
  return (
    <>
      <tr
        role="row"
        key={index}
        className={index === 0 ? "bg-yellow-100 bg-opacity-50 rounded-3xl" : ""}
      >
        <td className="py-3 text-sm" role="cell">
          <div className="flex items-center gap-2">
            <div className="h-[30px] w-[30px] rounded-full">
              {loading ? (
                <div className="h-full w-full flex items-center justify-center text-lg font-bold text-gray-400">
                  <section className="animate-pulse h-6 bg-gray-200 rounded w-3/4"></section>
                </div>
              ) : index === 0 ? (
                <div className="h-full w-full flex items-center justify-center text-lg font-bold text-gray-400">
                  {myRank}
                </div>
              ) : index < 4 ? (
                <Image
                  src={rankImgSrc[index] ?? ""}
                  className="h-full w-full rounded-full"
                  alt=""
                  width={30}
                  height={30}
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
              } text-black`}
            >
              {loading ? (
                <div className="animate-pulse text-gray-200 bg-gray-200 rounded w-32 h-6"></div>
              ) : (
                data.nickname
              )}
            </p>
          </div>
        </td>
        <td className="py-3 text-sm" role="cell">
          <div className="flex items-center gap-2">
            <p
              className={`text-md font-medium ${
                index === 0 ? "text-green-500" : "text-gray-600"
              } text-black`}
            >
              {loading ? (
                <div className="animate-pulse text-gray-200 bg-gray-200 rounded w-10 h-3"></div>
              ) : (
                score
              )}
            </p>
          </div>
        </td>
        <td className="py-3 text-sm" role="cell">
          <div className="mx-4 flex font-bold">
            <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-navy-700 overflow-hidden">
              <div
                className={`flex h-full items-center justify-center rounded-md ${
                  loading
                    ? "bg-gray-200 animate-pulse"
                    : index === 0
                    ? "bg-green-300"
                    : "bg-red-300"
                }`}
                style={{
                  width: `${loading ? 100 : width}%`,
                }}
              ></div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
