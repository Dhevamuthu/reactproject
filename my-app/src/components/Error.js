import { useRouteError } from "react-router-dom";
const Error=()=>
{
    const err= useRouteError();
    console.log("error", err);
    return (
        <>
        <h1>OOPS.........Check ur url</h1>
        <h2>
            {err.status}-{err.error.message}
        </h2>
        </>
    );
};

export default Error;