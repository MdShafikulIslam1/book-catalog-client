import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/api/api";
import { useAppDispatch } from "../../redux/hook";
import { loginSuccess } from "../../redux/features/user/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [loginUser, { data: loginData }] = useLoginUserMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    loginUser(data);
  };
  if (loginData) {
    const token = loginData.data.accessToken;
    const user = loginData.data.user.email;
    dispatch(loginSuccess({ token, user }));
    navigate(from, { replace: true });
  }
  return (
    <div className="">
      <div className="flex items-center justify-center min-h-screen bg-cyan-50 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-5 mx-auto shadow-2xl lg:w-96 rounded-2xl"
        >
          <div className="card-body">
            <h1 className="text-3xl font-semibold tracking-widest text-center uppercase">
              Login
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
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
