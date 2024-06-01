import { Button, Container, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { FC, useState, ChangeEvent } from "react";

const FileLoaderDropzone: FC = () => {
  const [fileName, setFileName] = useState("Upload your photo");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFileName(file.name);
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
