/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsFilter } from "react-icons/bs";
import { useForm } from "react-hook-form";
import CardBook from "../../Components/CardBook";
import { useGetAllBookQuery } from "../../redux/api/api";
import { IBook } from "../../type/bookType";
import { useState } from "react";
import { IBookGroupData } from "../../type/bookGroupDataType";

const Books = () => {
  const [filtering, setFiltering] = useState({});
  const [isFilterShow, setIsFilterShow] = useState(false);
  const { register, handleSubmit } = useForm();
  const { data } = useGetAllBookQuery(filtering);

  const booksData: IBook[] = data?.data;

  const groupData = data?.meta?.groupData[0]?.uniqueBooks;

  const handleTitleChange = (event: any) => {
    setFiltering({ title: event.target.value });
  };
  const handleAuthorChange = (event: any) => {
    setFiltering({ author: event.target.value });
  };
  const handleGenreChange = (event: any) => {
    setFiltering({ genre: event.target.value });
  };
  const handleSearchTerm = (data: any) => {
    setFiltering(data);
  };
  const handleFilter = () => {
    if (isFilterShow) {
      setIsFilterShow(false);
      setFiltering({});
    } else {
      setIsFilterShow(true);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6 mt-2 ">
      <div
        onClick={handleFilter}
        className="flex items-center justify-center gap-2 py-2 ml-2 border rounded-lg cursor-pointer px-14"
      >
        <p className="">
          <BsFilter className="w-8 h-8" />
        </p>
        <span className="text-xl font-medium text-zinc-500">Filter</span>
      </div>
      {isFilterShow && (
        <div className="col-span-12 p-4 border">
          <div className="flex items-center w-full h-full justify-evenly">
            <form onSubmit={handleSubmit(handleSearchTerm)} className="join">
              <div>
                <div>
                  <input
                    {...register("searchTerm")}
                    className="w-full input input-bordered join-item"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="indicator">
                <button type="submit" className="w-full btn join-item">
                  Search
                </button>
              </div>
            </form>
            <div className="flex gap-2">
              <h1 className="my-2 text-xl font-medium">Title:</h1>
              <select
                placeholder="Title"
                onChange={handleTitleChange}
                className="w-full select select-bordered"
              >
                {groupData?.map((groupItem: IBookGroupData, index: number) => (
                  <option key={index}>{groupItem?.title}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-2">
              <h1 className="my-2 text-xl font-medium">Author:</h1>
              <select
                placeholder="Author"
                onChange={handleAuthorChange}
                className="w-full select select-bordered"
              >
                {groupData?.map((groupItem: IBookGroupData, index: number) => (
                  <option key={index}>{groupItem?.author}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-2">
              <h1 className="my-2 text-xl font-">Genre:</h1>
              <select
                placeholder="Genre"
                onChange={handleGenreChange}
                className="w-full select select-bordered"
              >
                {groupData?.map((groupItem: IBookGroupData, index: number) => (
                  <option key={index}>{groupItem?.genre}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
      <div className="col-span-12 lg:col-span-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {booksData?.map((book: IBook) => (
            <CardBook key={book._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
