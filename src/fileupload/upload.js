import axios from "axios";
import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [sname, setName] = useState("");

  const UPLOAD_ENDPOINT = "http://localhost/react-fileupload/upload.php";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", file);
    formData.append("sname", sname);

    let res = await uploadFile(formData);
    console.log(res);
  };

  const uploadFile = async (formData) => {
    return await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  };

  const handleOnChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>React File Upload</h1>
      <input type="file" onChange={handleOnChange} />
      <input type="text" value={sname} onChange={handleNameChange} />
      <button type="submit">Upload File</button>
    </form>
  );
}
