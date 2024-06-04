import { FC } from "react";
import { styled } from "@mui/system";
import { Dialog, DialogContent, Typography, useTheme } from "@mui/material";
import PictureComponent from "@plugins/PictureComponent";
import successImage from "@img/success-image.png";
import { useGlobalContext } from "@/contexts/GlobalContext";

const PopUp: FC = () => {
  const theme = useTheme();
  const { openPopup } = useGlobalContext();

  const StyledPopUp = styled(Dialog)`
    background-color: ${theme.palette.secondary.main};
    width: 80%;
    margin: auto;
    height: 100%;
    & .MuiDialog-paper {
      background-color: ${theme.palette.secondary.main};
      max-width: 100%;
      width: 100%;
      text-align: center;
    }
  `;

  const StyledDialogContent = styled(DialogContent)`
    padding: 24px;
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.primary.main};
  `;

  const StyledDialogContentText = styled(Typography)`
    color: ${theme.palette.primary.main};
    margin-bottom: 55px;
  `;
  return (
    <StyledPopUp open={openPopup} aria-describedby="alert-dialog-description">
      <StyledDialogContent>
        <StyledDialogContentText id="alert-dialog-description" variant="h1">
          User successfully registered
        </StyledDialogContentText>
        <PictureComponent src={successImage} />
      </StyledDialogContent>
    </StyledPopUp>
  );
};

export default PopUp;
