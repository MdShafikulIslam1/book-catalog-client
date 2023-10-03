import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { useCreateUserMutation } from "../../redux/api/api";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();
  const [createUser, { isSuccess }] = useCreateUserMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    createUser(data);
    if (isSuccess) {
      return navigate("/");
    }
  };
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-5 mx-auto shadow-2xl lg:w-96 rounded-2xl"
        >
          <div className="card-body">
            <h1 className="text-3xl font-semibold tracking-widest text-center uppercase">
              Sign up
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="mt-6 form-control">
              <button type="submit" className="btn btn-primary">
                SignUp
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpPage;
