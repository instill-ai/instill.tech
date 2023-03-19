import { useRouter } from "next/router";
import React from "react";

export type DynamicPaginationProps = {
  totalCounts: number;
  currentPage: number;
  totalPage: number;
  pages: number[];
  route: string;
};

export const getPaginationArrayWithPageScroll = (
  totalSize: number,
  sizePerPage: number,
  paginationSize: number,
  currPage: number
) => {
  const noOfPages = Math.ceil(totalSize / sizePerPage);
  const array = [];
  let count = 0;
  let pageNo = currPage;
  while (pageNo <= noOfPages && count !== paginationSize) {
    array.push(pageNo);
    pageNo = pageNo + 1;
    count = count + 1;
  }
  return array;
};

export const getPageNumber = (currentPage: number, totalPage: number) => {
  if (currentPage > totalPage) {
    return totalPage;
  }
  if (currentPage < 1) {
    return 1;
  }
  return currentPage;
};

export const getTotalPage = (totalCounts: number, perPageCount: number) => {
  return Math.ceil(totalCounts / perPageCount);
};

export const DynamicPagination = ({
  route,
  totalCounts,
  currentPage,
  pages,
  totalPage,
}: DynamicPaginationProps) => {
  const routes = useRouter();
  return (
    <div className="flex justify-center">
      <p
        onClick={() => {
          if (currentPage > 1) {
            routes.push(`${route}`);
          }
        }}
        className="instill-text-body mx-4 flex cursor-pointer text-instillGrey80 hover:text-instillBlue50"
      >
        First
      </p>
      <p
        onClick={() => {
          if (currentPage > 1) {
            routes.push(`${route}?page=${currentPage - 1}`);
          }
        }}
        className="instill-text-body mx-4 flex cursor-pointer text-instillGrey80 hover:text-instillBlue50"
      >
        Prev
      </p>

      {console.log(pages)}

      {pages?.map((page, index) => (
        <p
          key={index}
          onClick={() => {
            routes.push(`${route}?page=${page}`);
          }}
          className={`instill-text-body mx-4 flex cursor-pointer ${
            currentPage === page ? "text-instillBlue50" : "text-instillGrey80"
          } hover:text-instillBlue50`}
        >
          {page}
        </p>
      ))}

      <p
        onClick={() => {
          if (currentPage < totalPage) {
            routes.push(`${route}?page=${currentPage + 1}`);
          }
        }}
        className="instill-text-body mx-4 flex cursor-pointer text-instillGrey80 hover:text-instillBlue50"
      >
        Next
      </p>

      <p
        onClick={() => {
          if (currentPage < totalCounts) {
            routes.push(`${route}?page=${totalPage}`);
          }
        }}
        className="instill-text-body mx-4 flex cursor-pointer text-instillGrey80 hover:text-instillBlue50"
      >
        Last
      </p>
    </div>
  );
};
