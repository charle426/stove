import { faFaceSadCry } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouteError, Link } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col flex-wrap justify-center items-center min-h-[80vh]"
    >

      <h1 className="uppercase text-[60px] font-semibold flex items-center gap-3 flex-wrap">
              <i>page { error.statusText || error.message }</i>
              <FontAwesomeIcon icon={faFaceSadCry} />
      </h1>
      <p className="max-w-[400px] text-center">
        Sorry, an unexpected error has occurred. Double-check the URL and try
        again or go back home.
      </p>
      <div className="flex mt-7 items-center">
        <div>
          <Link to="/">
            <button className="pricing download uppercase font-bold py-6 px-8">
              go home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
