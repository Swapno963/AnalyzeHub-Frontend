export default function TopIntensity({ data, besedOn }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-600 py-3">
        This is Top 5 Data besed on {besedOn}
      </h2>
      <div className="flex flex-col border border-spacing-1 border-e-gray-400">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead>
                  <tr className="bg-[#776CEA]">
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-white uppercase"
                    >
                      sector
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-white uppercase"
                    >
                      topic
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-white uppercase"
                    >
                      likelihood
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-white uppercase"
                    >
                      impact
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-white uppercase"
                    >
                      intensity
                    </th>
                    {/* <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-white uppercase"
                    >
                      start year
                    </th> */}
                    {/* <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-white uppercase"
                    >
                      end year
                    </th> */}
                  </tr>
                </thead>
                <tbody className="bg-[#8379ed]">
                  {data?.map((dt) => (
                    <tr
                      key={dt?.id}
                      className="odd:bg-white even:bg-gray-100 hover:bg-gray-200"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {dt?.sector}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {dt?.topic}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {dt?.likelihood}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {dt?.impact}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {dt?.intensity}
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {dt?.start_year}
                      </td> */}
                      {/* <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        {dt?.end_year}
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
