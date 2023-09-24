import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import CardBook from "../../Components/CardBook";
import { useGetAllBookQuery } from "../../redux/api/api";
import { IBook } from "../../type/bookType";
import { useState } from "react";
import { IBookGroupData } from "../../type/bookGroupDataType";

const Books = () => {
  const [filtering, setFiltering] = useState({});
  console.log("filtering", filtering);
  const { register, handleSubmit } = useForm();
  const { data } = useGetAllBookQuery(filtering);

  const booksData: IBook[] = data?.data;

  const groupData = data?.meta?.groupData[0]?.uniqueBooks;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setFiltering(data);
  };
  return (
    <div className="grid grid-cols-12 gap-6 mt-10 ">
      <div className="col-span-12 lg:col-span-9">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {booksData?.map((book: IBook) => (
            <CardBook key={book._id} book={book} />
          ))}
        </div>
      </div>
      <div className="col-span-12 p-4 border lg:col-span-3">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <h1 className="text-2xl font-semibold text-center">
            Choice your Data
          </h1>
          <hr className="w-full" />
          <div>
            <h1 className="my-2 text-xl font-medium">Title:</h1>
            <select
              {...register("title")}
              className="w-full select select-bordered"
            >
              {groupData?.map((groupItem: IBookGroupData, index: number) => (
                <option key={index}>{groupItem?.title}</option>
              ))}
            </select>
          </div>
          <div className="join">
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
              <button className="w-full btn join-item">Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Books;
