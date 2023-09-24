/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unsafe-optional-chaining */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  useEditBookMutation,
  useGetSingleBookQuery,
} from "../../redux/api/api";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const { handleSubmit, register } = useForm();
  const { id } = useParams();
  const [editBook, { data: editBookData, isSuccess, isLoading }] =
    useEditBookMutation();
  const { data: currentBookData } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const navigate = useNavigate();
  const { title, author, genre, publication_date, imageUrl } =
    currentBookData.data!;
  if (isSuccess) {
    navigate("/all-book");
  }
  if (isLoading) {
    return <p>Uploading data....</p>;
  }
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const editData = {
      id,
      data,
    };
    editBook(editData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title:</span>
          </label>
          <input
            {...register("title")}
            type="text"
            defaultValue={title}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Author:</span>
          </label>
          <input
            {...register("author")}
            type="text"
            defaultValue={author}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Genre:</span>
          </label>
          <input
            {...register("genre")}
            type="text"
            defaultValue={genre}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image:</span>
          </label>
          <input
            {...register("image")}
            type="text"
            defaultValue={imageUrl}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Publication Date:</span>
          </label>
          <input
            {...register("publication_date")}
            type="text"
            defaultValue={publication_date}
            className="input input-bordered"
          />
        </div>
        <button type="submit" className="w-full my-3 btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditBook;
