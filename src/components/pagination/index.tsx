import React, { useState } from "react";

interface IPagination {
  totalPage: number;
}

const Pagination = ({ totalPage }: IPagination) => {
  const [pageNo, setPageNo] = useState(1);
  // const [pageSize, setPageSize] = useState(5);

  // 페이지 리스트 불러오는 쿼리 or dispatch
  // useEffect(() => {
  //   handleUserStories(pageInfo);
  // }, [pageNo]);

  const pageArr = [];

  for (let i = 1; i <= totalPage; i++) {
    pageArr.push(i);
  }

  const handlePage = (e: React.MouseEvent<HTMLElement>) => {
    const page = e.currentTarget.dataset.page;
    const pageNum = Number(page);

    // setPageNo(pageNum);
  };

  const handlePageIndex = (e: React.MouseEvent<HTMLElement>) => {
    const action = e.currentTarget.dataset.action;

    if (action === "prev") {
      return setPageNo(pageNo - 1);
    } else if (action === "next") {
      return setPageNo(pageNo + 1);
    }
  };

  return (
    <div className="paginationWrap flex justify-center items-center">
      <ul className="pagination flex justify-center items-center">
        <li className="page-item p-3">
          {pageNo === 1 ? null : (
            <a
              className="page-link"
              href="#"
              data-action="prev"
              onClick={handlePageIndex}
            >
              prev
            </a>
          )}
        </li>
        <li className="p-3">
          {pageArr.map((v) => {
            return (
              <a
                className="page-link p-3"
                href="#"
                data-page={v}
                onClick={handlePage}
                key={v}
              >
                {v}
              </a>
            );
          })}
        </li>
        <li className="page-item p-3">
          {pageNo < totalPage ? (
            <a
              className="page-link"
              href="#"
              data-action="next"
              onClick={handlePageIndex}
            >
              Next
            </a>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
