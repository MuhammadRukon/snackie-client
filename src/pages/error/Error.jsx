import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-[70vh] w-full flex flex-col gap-5 items-center justify-center">
      <h2 className="text-3xl font-bold">Oopsie. wrong place 404!</h2>
      <Link className="btn btn-neutral" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
