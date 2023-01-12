import { useState } from 'react';

export interface TableProps {
  data: any[];
  columns: any[];
}
export function Table({ data, columns }: TableProps) {
  const [search, setSearch] = useState('');

  const filteredData =
    search.length > 0
      ? data.filter((d) => {
          return d.name;
        })
      : [];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div>
            {' '}
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-gray-700" />
              </div> */}
              <input
                type="search"
                name="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Procurar por nome, email ou usuário..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </div>
          </div>
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
              {search.length > 0 ? (
                <tbody>
                  {filteredData.map((val: any, key: any) => {
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
              ) : (
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
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
