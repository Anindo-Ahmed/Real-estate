import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-28 font-semibold">
            <h1 className="text-4xl text-red-500">404</h1>
            <h2 className="text-4xl">Page Not Found</h2>
            <Link to="/"><button className="btn btn-outline mt-6">Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;