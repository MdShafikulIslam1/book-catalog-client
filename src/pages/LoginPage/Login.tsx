import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/api/api";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import { loginSuccess } from "../../redux/features/user/userSlice";
// interface ILoginData {
//   email: string;
//   password: string;
// }

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAppSelector((state) => state.auth);
  console.log("login user", user);
  const [loginUser, { data: loginData }] = useLoginUserMutation();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    loginUser(data);
  };
  if (loginData) {
    const token = loginData.data.accessToken;
    const user = loginData.data.user.email;
    dispatch(loginSuccess({ token, user }));
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
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
