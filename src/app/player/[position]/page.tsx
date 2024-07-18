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
      <div className="container mx-auto px-4 flex justify-center my-5">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4">
          {jsonPlayerData.map((player: any, index: number) => (
            <PlayerBox key={index} {...player} />
          ))}
        </ul>
      </div>
    </>
  );
}
