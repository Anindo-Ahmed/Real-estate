import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-3xl text-red-500">404</h1>
            <h2 className="text-2xl">Page Not Found</h2>
            <Link to="/"><button>Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;