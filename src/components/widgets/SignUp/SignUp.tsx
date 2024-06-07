import { FC, memo } from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler, FieldValues, Controller as HookController } from "react-hook-form";
import FileLoaderDropzone from "@/components/forms/FileLoaderDropzone/FileLoaderDropzone";
import { newUser, useGlobalContext } from "@/contexts/GlobalContext";
import { useMask } from "@react-input/mask";

const SignUp: FC = memo(() => {
  const { employeesList, addEmployees, showPopup } = useGlobalContext();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data.employeeAvatar);
    addEmployees({
      ...newUser,
      id: employeesList.length + 1,
      image: data.employeeAvatar !== "" ? URL.createObjectURL(data.employeeAvatar) : "",
      firstName: data.employeeName,
      lastName: data.employeeName,
      email: data.employeeEmail,
      phone: data.employeePhone,
      company: { ...newUser.company, title: data.employeePosition },
    });
    reset();
    showPopup();
  };

  const inputRef = useMask({ mask: "+38 (___) ___-__-__", replacement: "_" });

  return (
    <Container component="section" className="sign-up__section" id="Sign up">
      <Typography variant="h2" sx={{ marginBottom: "50px" }}>
        Sign Up
      </Typography>

      <Container component="form" className="sign-up__form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="employeeName"
          label="Your name"
          variant="outlined"
          color="primary"
          {...register("employeeName", {
            required: true,
            minLength: { value: 2, message: "Minimum length should be 2" },
            maxLength: { value: 60, message: "Maximum length should be 60" },
            validate: {
              correctFormat: (value) => /^[a-zA-Z]+$/.test(value) || "Only letters",
            },
          })}
          error={!!errors.employeeName}
          helperText={errors?.employeeName?.message?.toString() || ""}
        />

        <TextField
          id="employeeEmail"
          label="Email"
          variant="outlined"
          color="primary"
          {...register("employeeEmail", {
            validate: {
              correctFormat: (value) =>
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) || "Invalid email address",
            },
          })}
          error={!!errors.employeeEmail}
          helperText={errors?.employeeEmail?.message?.toString() || ""}
        />

        <TextField
          error={!!errors.employeePhone}
          inputRef={inputRef}
          id="employeePhone"
          label="Phone"
          variant="outlined"
          color="primary"
          {...register("employeePhone", {
            validate: {
              correctFormat: (value) => /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value), ///^\+38 \(\d{3}\) \d{3} - \d{2} - \d{2}$/
            },
          })}
          helperText={errors?.employeePhone?.message?.toString() || "+38 (XXX) XXX - XX - XX"}
        />

        <FormControl>
          <FormLabel id="radio-buttons-group-label">Select your position</FormLabel>
          <HookController
            name="employeePosition"
            control={control}
            defaultValue="Frontend developer"
            render={({ field }) => (
              <RadioGroup aria-labelledby="radio-buttons-group-label" {...field}>
                <FormControlLabel value="Frontend developer" control={<Radio />} label="Frontend developer" />
                <FormControlLabel value="Backend developer" control={<Radio />} label="Backend developer" />
                <FormControlLabel value="Designer" control={<Radio />} label="Designer" />
                <FormControlLabel value="QA" control={<Radio />} label="QA" />
              </RadioGroup>
            )}
          />
        </FormControl>

        <HookController
          name="employeeAvatar"
          control={control}
          defaultValue=""
          render={({ field: { onChange } }) => <FileLoaderDropzone onImageChange={onChange} />}
        />

        <Button variant="contained" sx={{ margin: "auto", display: "block" }} type="submit" disabled={!isValid}>
          Sign up
        </Button>
      </Container>
    </Container>
  );
});

export default SignUp;
