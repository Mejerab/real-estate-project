import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    console.error(error);
    const handleGoBAck = () =>{
        navigate(-1);
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h4 className="text-3xl">Oops!!!</h4>
            <p className="text-xl"><i>{error.status}</i>{error.statusText || error.message}</p>
            <button onClick={handleGoBAck} className="btn my-3">Go back</button>
        </div>
    );
};

export default ErrorPage;