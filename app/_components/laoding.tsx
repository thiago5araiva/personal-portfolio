export default function Loading() {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-primary-default ">
      <div
        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-border-secondary rounded-full dark:text-blue-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
