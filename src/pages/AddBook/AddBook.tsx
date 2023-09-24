import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateBookMutation } from "../../redux/api/api";

const AddBook = () => {
  const { handleSubmit, register } = useForm();
  const [createBook] = useCreateBookMutation();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    createBook(data);
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
            placeholder="Enter Book title"
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
            placeholder="Enter the Author Name"
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
            placeholder="Enter Genre name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image:</span>
          </label>
          <input
            {...register("imageUrl")}
            type="text"
            placeholder="Enter Image Url Link"
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
            placeholder="Enter Publication Date Format:2023-10-24"
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

export default AddBook;
