type TableHeaderProps = {
  title: string;
  criteriaDescription?: string;
};

export default function TableHeader({
  title,
  criteriaDescription,
}: TableHeaderProps): JSX.Element {
  return (
    <>
      <th colSpan={1} role="columnheader" className="cursor-default">
        <div className="flex items-center pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
          <span>{title}</span>
          {criteriaDescription && (
            <div className="relative pl-3 group flex items-center">
              <span className="text-red-600 font-bold text-lg animate-bounce">
                !
              </span>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 px-2 py-1 bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {criteriaDescription}
              </div>
            </div>
          )}
        </div>
      </th>
    </>
  );
}
