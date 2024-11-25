import { PiCameraPlusFill, PiPlusBold } from "react-icons/pi";

export default function DragDrop() {
  return (
    <>
      <h2 className="mb-3 text-sm font-semibold uppercase dark:text-neutral-50 text-neutral-900">
        Pictures
      </h2>
      <p className="mb-3 text-sm dark:text-neutral-50 text-neutral-900 ">
        Add up to 5 pictures and let the magic happen!
      </p>
      <span className="text-xs font-medium dark:text-neutral-400 text-neutral-500">
        0/5
      </span>

      <div className="mt-1 flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file-1"
          className="flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
            <PiCameraPlusFill size={30} />
            <p className="mb-2 text-sm">Click to upload or drag and drop</p>
            <p className="text-xs  dark:text-neutral-400 text-neutral-500">
              JPG or PNG (MAX. 10mb)
            </p>
          </div>
          <input id="dropzone-file-1" type="file" className="hidden" />
        </label>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        <label
          htmlFor="dropzone-file-2"
          className="flex flex-col items-center justify-center aspect-video w-full border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
            <PiPlusBold size={15} />
            <p className="sr-only">Add more pictures</p>
          </div>
          <input id="dropzone-file-2" type="file" className="hidden" />
        </label>
        <label
          htmlFor="dropzone-file-3"
          className="flex flex-col items-center justify-center aspect-video w-full border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
            <PiPlusBold size={15} />
            <p className="sr-only">Add more pictures</p>
          </div>
          <input id="dropzone-file-3" type="file" className="hidden" />
        </label>
        <label
          htmlFor="dropzone-file-4"
          className="flex flex-col items-center justify-center aspect-video w-full border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
            <PiPlusBold size={15} />
            <p className="sr-only">Add more pictures</p>
          </div>
          <input id="dropzone-file-4" type="file" className="hidden" />
        </label>
        <label
          htmlFor="dropzone-file-5"
          className="flex flex-col items-center justify-center aspect-video w-full border-2  border-dashed rounded-lg cursor-pointer dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-900 bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-400"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 dark:text-neutral-200 text-neutral-700">
            <PiPlusBold size={15} />
            <p className="sr-only">Add more pictures</p>
          </div>
          <input id="dropzone-file-5" type="file" className="hidden" />
        </label>
      </div>
    </>
  );
}
