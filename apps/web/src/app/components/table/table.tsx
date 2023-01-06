export interface TableProps {
  data: any;
  columns: any;
}
export function Table({ data, columns }: TableProps) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  {columns.map((val: any, key: any) => {
                    return (
                      <th
                        key={key}
                        scope="row"
                        className="text-base font-bold text-gray-900 px-6 py-4 text-left"
                      >
                        {val.header}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {data?.map((val: any, key: any) => {
                  return (
                    <tr key={key} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <img
                          className="border rounded-lg"
                          src={val?.picture.medium}
                          alt={val?.name.last}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {val?.name.first} {val?.name.last}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {val?.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {val?.login.username}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {val?.dob.age}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
