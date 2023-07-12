import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useRouter } from "next/router";
import { logOut } from "../../../utils/logout";
import Swal from "sweetalert2";

export const PageNumber = ({ perpage }: any) => {
  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);
  let [totalPage, setTotalPage] = useState(0);
  let [currentPage, setCurrentPage] = useState(1);
  const [hidePagination, setHidePagination] = useState(false);
  const [pageArray, setPageArray] = useState<{ id: number }[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCurrentPage(
      localStorage.getItem("selectedPage")
        ? parseInt(localStorage.getItem("selectedPage")!)
        : currentPage
    );

    if (!perpage) {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem("token");

          const response = await axios.get(
            `${baseUrl}/products?page=${currentPage}`,
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );

          const products = response.data.products;
          if (products.length == 0) {
            console.log("ddddddd");
            setHidePagination(true);
          }
          setTotalPage(response.data.totalPages);
          setCurrentPage(
            localStorage.getItem("selectedPage")
              ? parseInt(localStorage.getItem("selectedPage")!)
              : response.data.currentPage
          );
          setNum(products.length);
        } catch (error: any) {
          if (
            error?.response?.status == 403 ||
            error?.response?.status == 401
          ) {
            Swal.fire({
              width: 700,
              color: "black",
              background: "white",
              html: `
                <div style="text-align: left;">
                  <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">Session Expired</h2>
                  <hr style="margin-bottom: 20px;" />
                  <p style="font-size: 14px;margin-bottom: 10px;">Your session has expired</p>
                  <hr style="margin-bottom: 20px;" />
                </div>
              `,
              showConfirmButton: true,
              confirmButtonText: "Ok",
              confirmButtonColor: "blue",
              heightAuto: true,
              customClass: {
                confirmButton:
                  "bg-blue-500 text-white rounded-full px-4 py-2 text-sm absolute right-4 bottom-4 ",
              },
            }).then((result) => {
              if (result.value) {
                logOut();
                router.push("/account");
              }
            });
          }
        }
      };
      fetchData();
    } else if (perpage || currentPage) {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem("token");

          const response = await axios.get(
            `${baseUrl}/products?page=${currentPage}&perpage=${perpage}`,
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );

          const products = response.data.products;
          if (products.length == 0) {
            console.log("ddddddd");
            setHidePagination(true);
          }

          setTotalPage(response.data.totalPages);
          setCurrentPage(
            localStorage.getItem("selectedPage")
              ? parseInt(localStorage.getItem("selectedPage")!)
              : response.data.currentPage
          );
          setNum(products.length);
        } catch (error: any) {
          if (
            error?.response?.status == 403 ||
            error?.response?.status == 401
          ) {
            Swal.fire({
              width: 700,
              color: "black",
              background: "white",
              html: `
                <div style="text-align: left;">
                  <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">Session Expired</h2>
                  <hr style="margin-bottom: 20px;" />
                  <p style="font-size: 14px;margin-bottom: 10px;">Your session has expired</p>
                  <hr style="margin-bottom: 20px;" />
                </div>
              `,
              showConfirmButton: true,
              confirmButtonText: "Ok",
              confirmButtonColor: "blue",
              heightAuto: true,
              customClass: {
                confirmButton:
                  "bg-blue-500 text-white rounded-full px-4 py-2 text-sm absolute right-4 bottom-4 ",
              },
            }).then((result) => {
              if (result.value) {
                logOut();
                router.push("/account");
              }
            });
          }
        }
      };
      fetchData();
    }
  }, [perpage, currentPage]);

  useEffect(() => {
    localStorage.removeItem("selectedPage");
  }, [perpage]);

  useEffect(() => {
    const foo: any = [];

    for (let i = 0; i < totalPage; i++) {
      const data = {
        id: i,
      };
      foo.push(data);
    }

    setPageArray(foo);
  }, [totalPage, currentPage]);

  const goToPage = (page: number) => {
    setCur(page);
    setCurrentPage(page);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
    localStorage.setItem("selectedPage", page.toString());
  };

  const goToPreviousPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    currentPage < totalPage && setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {!hidePagination ? (
        <div className="mt-8 flex justify-center items-center flex-wrap pagination-container ">
          <div className="flex bg-white font-[Poppins]">
            <button
              onClick={goToPreviousPage}
              className="h-12 hover:text-white "
            >
              <BsArrowLeft className=" text-gray-500 mr-3 group-hover:text-[#2bbef9] flex justify-center  mt-0"></BsArrowLeft>
            </button>

            {pageArray.map((pg: { id: number }, i: number) => (
              <button
                key={i}
                type="button"
                value={pg.id + 1}
                onClick={() => goToPage(pg.id + 1)}
                className={`h-10 mt-1 m-0 w-10 rounded-full ${
                  currentPage === pg.id + 1
                    ? "bg-cyan-400 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
                style={{ marginLeft: "" }}
              >
                {pg.id + 1}
              </button>
            ))}

            <button onClick={goToNextPage} className="h-12 hover:text-white">
              <BsArrowRight className=" text-gray-500 ml-3 group-hover:text-[#2bbef9]  "></BsArrowRight>
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
