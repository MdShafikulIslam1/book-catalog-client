import { useParams } from "react-router-dom";
import {
  useCreateReviewsMutation,
  useGetSingleBookQuery,
} from "../redux/api/api";
import { IBook } from "../type/bookType";
import { ChangeEvent, FormEvent, useState } from "react";

const BookDetails = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [createReviews] = useCreateReviewsMutation();
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id,{refetchOnMountOrArgChange:true,pollingInterval:1000});
  const book: IBook = data?.data;
  const handleReviewSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(book.reviews);
    const reviewData = {
      id:id,
      data:{reviews:inputValue},
    };
    // console.log(JSON.stringify(inputValue));
    createReviews(reviewData);
    setInputValue("");
  };
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="w-full h-64">
          <img src={book?.imageUrl} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          <p>{book?.author}</p>
          <p>{book?.genre}</p>
        </div>
      </div>
      <form
        onSubmit={handleReviewSubmit}
        className="mt-12 text-center w-3/4 flex gap-10 "
      >
        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered textarea-sm w-full "
          onChange={handleChange}
          value={inputValue}
        ></textarea>
        <button
          type="submit"
          className="btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        >
          Post Review
        </button>
      </form>
      {
        book?.reviews?.map((review:string) => <p className="text-4xl font-bold">{review}</p>)
      }
    </div>
  );
};

export default BookDetails;
