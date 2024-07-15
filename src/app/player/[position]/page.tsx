
import PlayerBox from "@/components/Player/PlayerBox";


type TPageProps = {
  params: {
    position: string;
  };
};

export default async function PositionPage(props: TPageProps) {
  const jsonData = await import(
    `/public/data/ktPlayer/${props.params.position}Data.json`
  );
  const jsonPlayerData = jsonData.data.list;

  return (
    <>
      <div className="container mx-auto px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {jsonPlayerData.map((player: any, index: number) => (
            <PlayerBox key={index} {...player} />
            // <li
            //   key={index}
            //   className="bg-white rounded-lg shadow-md overflow-hidden "
            // >
            //   <img
            //     src={player.playerPrvwImg}
            //     alt={`${player.playerName} 이미지`}
            //     className="w-full hidden md:block"
            //   />
            //   <img
            //     src={player.mobilePlayerImg2}
            //     alt={`${player.playerName} 이미지`}
            //     className="w-full md:hidden block"
            //   />
            //   <div className="p-4">
            //     <h2 className="text-lg font-semibold text-gray-800">
            //       {player.playerName}
            //     </h2>
            //     <p className="text-sm text-gray-600">{player.position}</p>
            //   </div>
            // </li>
          ))}
        </ul>
      </div>
    </>
  );
}
