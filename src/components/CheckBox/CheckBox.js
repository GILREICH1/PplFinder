import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as S from "./style";

const CheckBox = ({ onChange, label, value }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (e) => {
    onChange && onChange({ checked, value });
    setChecked(e.target.checked);
  };
  return (
    <S.CheckBox>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} color="primary" />}
        label={label}
      />
    </S.CheckBox>
  );
};

export default CheckBox;
