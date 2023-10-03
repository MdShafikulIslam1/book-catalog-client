import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useCreateReviewsMutation,
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/api/api";
import { IBook } from "../type/bookType";
import { ChangeEvent, FormEvent, useState } from "react";
import Swal from "sweetalert2";
import { useAppSelector } from "../redux/hook";

const BookDetails = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { user } = useAppSelector((state) => state.auth);
  const [createReviews] = useCreateReviewsMutation();
  const [deleteBook, { data: deletedData }] = useDeleteBookMutation();
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  const navigate = useNavigate();
  const book: IBook = data?.data;
  const handleReviewSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reviewData = {
      id: id,
      data: { reviews: inputValue },
    };
    createReviews(reviewData);
    setInputValue("");
  };
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleBookDelete = () => {
    if (!user) {
      return navigate("/auth/login");
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(data.data._id);
        if (deletedData?.data?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          navigate("/all-book");
        }
      }
    });
  };
  return (
    <div className="my-8">
      <div className="flex items-center gap-10 justify-evenly bg-base-100">
        <figure className="w-full p-4 h-96 lg:w-1/2">
          <img
            src={book?.imageUrl}
            alt="Shoes"
            className="w-full h-full rounded-lg"
          />
        </figure>
        <div className="w-full lg:w-1/2">
          <div>
            <h2 className="my-4 text-3xl font-bold text-center">
              {book?.title}
            </h2>
            <p className="font-medium">
              Author : <span className="ml-2 ">{book?.author}</span>
            </p>
            <p className="font-medium">
              Genre : <span className="ml-2 ">{book?.genre}</span>
            </p>
            <p className="font-medium">
              Date : <span className="ml-2">{book?.publication_date}</span>
            </p>
            <div className="flex items-center justify-start gap-10 my-2">
              <Link to={`/books/edit/${id}`}>
                <button className="bg-gray-100 btn btn-primary btn-outline">
                  Edit Book
                </button>
              </Link>

              <button
                onClick={() => handleBookDelete()}
                className="bg-green-100 btn btn-warning btn-outline"
              >
                Delete Book
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-3xl font-semibold tracking-widest text-center text-gray-400">
          Book Reviews:
        </h1>
        {book?.reviews?.map((review: string) => (
          <li key={book._id} className="text-xl font-medium">
            {review}
          </li>
        ))}
      </div>
      {user && (
        <form
          onSubmit={handleReviewSubmit}
          className="flex w-3/4 gap-10 mt-12 text-center "
        >
          <textarea
            placeholder="Bio"
            className="w-full textarea textarea-bordered textarea-sm "
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
      )}
    </div>
  );
};

export default BookDetails;
