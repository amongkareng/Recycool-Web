const ToastWarning = ({ message }) => {
  return (
    <div
      id="toast-warning"
      className="fixed flex items-center px-4 py-3 font-semibold text-center transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md w-max z-index-top top-10 left-1/2"
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
        </svg>
        <span className="sr-only">Warning icon</span>
      </div>
      <div className="text-sm font-normal ms-3">{message}</div>
    </div>
  );
};

export default ToastWarning;
