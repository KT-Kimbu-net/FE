import { UserData } from "@/types/api";
import { FilterCriteria } from "@/utils/ranking";
import Image from "next/image";

type TableBodyProps = {
  data: any;
  index: number;
  criteria: string;
  rankImgSrc: string[];
  getScore: (data: UserData, criteria: FilterCriteria) => number;
  getRating: (criteria: FilterCriteria) => number;
};

export default function TableBody({
  data,
  index,
  criteria,
  rankImgSrc,
  getScore,
  getRating,
}: TableBodyProps) {
  return (
    <tr
      role="row"
      key={data.userId}
      className={index === 0 ? "bg-yellow-100 bg-opacity-50 rounded-3xl" : ""}
    >
      <td className="py-3 text-sm" role="cell">
        <div className="flex items-center gap-2">
          <div className="h-[30px] w-[30px] rounded-full">
            {index === 0 ? (
              <div className="h-full w-full flex items-center justify-center text-lg font-bold text-gray-400">
                {/* 임시 */}
                11
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
            }text-black`}
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
            }text-black`}
          >
            {getScore(data, criteria as FilterCriteria)}
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
                  (getScore(data, criteria as FilterCriteria) /
                    getRating(criteria as FilterCriteria)) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </td>
    </tr>
  );
}
