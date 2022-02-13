import "./styles.css";
import { forwardRef } from "react";
import { TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const MyTextfiled = forwardRef((props, ref) => (
  <TextField {...props} inputRef={ref} />
));

const datalabel = [
  { label: "hello", name: "hellonmae" },
  { label: "hello1", name: "hellonmae2" },
  { label: "hello3", name: "hellonmae3" }
];

const optionsDefault = [
  { value: 1, label: "Region 1" },
  { value: 2, label: "Region 2" }
];

export default function App() {
  const { register, handleSubmit, control } = useForm();

  const doSend = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onSubmit={handleSubmit(doSend)}>
        {datalabel.map(({ label, name }, key) => (
          <MyTextfiled key={key} label={label} {...register(name)} />
        ))}
        <Controller
          name="selector"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <Select
              options={optionsDefault}
              onBlur={onBlur}
              onChange={onChange}
            />
          )}
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
