import { Button, Container, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { FC, useState, ChangeEvent } from "react";

const FileLoaderDropzone: FC<{ onImageChange: (path: File) => void }> = ({ onImageChange }) => {
  const [fileName, setFileName] = useState("Upload your photo");

  const checkFileExtension = (fileName: string) => {
    const fileNameSplit = fileName.split(".");
    const fileExtension = fileNameSplit[fileNameSplit.length - 1].toLowerCase();
    return ["jpg", "jpeg", "png"].includes(fileExtension);
  };

  const checkFileSize = (file: File) => {
    const fileSizeInMB = parseFloat((file.size / (1024 * 1024)).toFixed(2));
    return fileSizeInMB < 5;
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      checkFileExtension(file.name)
        ? checkFileSize(file)
          ? (setFileName(file.name), onImageChange(file))
          : setFileName("file is not an image")
        : setFileName("file is too big");
    } else {
      setFileName("Upload your photo");
    }
  };

  return (
    <Container component="div" className="fileLoader__wrapper">
      <OutlinedInput sx={{ display: "none" }} id="file-upload" type="file" onChange={handleFileChange} />

      <InputLabel htmlFor="file-upload" sx={{ display: "flex", width: "100%" }}>
        <Button variant="outlined" component="span" sx={{ minWidth: "auto", display: "flex" }}>
          Upload
        </Button>

        <Typography variant="main" sx={{ padding: "14px 16px", cursor: "text" }}>
          {fileName}
        </Typography>
      </InputLabel>
    </Container>
  );
};

export default FileLoaderDropzone;
