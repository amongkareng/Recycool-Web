import { useState } from "react";
import axios from "axios";
import ToastError from "./components/common/toast/ToastError";
import ToastSuccess from "./components/common/toast/ToastSuccess";
import Loading from "./components/common/loading/Loading";

const App = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);

    // Create a FileReader to read the file and set the preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Silahkan upload file terlebih dahulu");
      setStatus("Gagal");
      setTimeout(() => {
        setMessage("");
        setStatus("");
      }, 1500);
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "http://recycool-id.et.r.appspot.com/recycool",
        formData
      );

      if (response.data.status === "Berhasil") {
        setLoading(false);
      }

      setMessage(response.data.message);
      setStatus(response.data.status);
      setTimeout(() => {
        setMessage("");
        setStatus("");
      }, 1500);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setMessage(error.response.data.message);
        setStatus(error.response.data.status);
      } else if (error.message) {
        setMessage(error.message);
        setStatus("Gagal");
      } else {
        setMessage("Terjadi kesalahan");
        setStatus("Gagal");
      }

      setTimeout(() => {
        setMessage("");
        setStatus("");
      }, 1500);
      console.error(error);
    }
  };

  return (
    <>
      {message.length !== 0 ? (
        status === "Berhasil" ? (
          <ToastSuccess message={message} />
        ) : (
          <ToastError message={message} />
        )
      ) : null}
      {loading ? <Loading /> : null}
      <div>
        <div className="flex items-center justify-center h-screen">
          <form onSubmit={handleUpload}>
            <div className="relative border border-gray-500 border-dashed">
              <input
                type="file"
                onChange={handleFileChange}
                className="relative z-50 block w-full h-full p-20 opacity-0 cursor-pointer"
              />
              {filePreview && (
                <img src={filePreview} alt="" className="w-32 h-32 mx-auto" />
              )}
              <div className="absolute top-0 left-0 right-0 p-10 m-auto text-center">
                {filePreview ? (
                  <>
                    <h4 className="p-3">{fileName}</h4>
                  </>
                ) : (
                  <>
                    {fileName.length !== 0 ? (
                      <h4>{fileName}</h4>
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <h4>
                          Taruh gambar di mana saja untuk mengunggah
                          <br />
                          atau
                        </h4>
                        <p className>Pilih gambar</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full px-5 py-2 mt-6 text-sm tracking-wide text-white uppercase transition-colors duration-200 bg-red-500 rounded-lg shrink-0 gap-x-2 hover:bg-red-600 dark:hover:bg-red-500 dark:bg-red-600"
            >
              Simpan
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
