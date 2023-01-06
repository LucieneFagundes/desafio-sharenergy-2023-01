export interface PaginationProps {
  page: any;
  onPageChange?: (page: number) => void;
}

let arr = [0, 1, 2, 3, 4];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export function Pagination({ page, onPageChange }: PaginationProps) {
  return (
    <>
      <div className="flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between shadow-sm">
          <div></div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              {arr.map((value: any, key: any) => {
                return (
                  <a
                    key={key}
                    aria-current="page"
                    className={classNames(
                      key == page - 1
                        ? 'relative z-10 inline-flex items-center border-t-2 border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20'
                        : 'relative inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange && onPageChange(key + 1);
                    }}
                  >
                    {key + 1}
                  </a>
                );
              })}
            </nav>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Pagination;
