const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-red-500">Oops! Something Went Wrong</h1>
            <p className="mt-3 text-lg text-gray-800">We apologize for the inconvenience. An error occurred while processing your request.</p>
            <p className="mt-2 text-lg text-gray-800">Please try again later.</p>
        </div>
    );
};

export default ErrorPage;
