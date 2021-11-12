import { Input, Form } from 'antd';
import React, { InputHTMLAttributes, Fragment } from 'react';
import { Control, useController } from 'react-hook-form';

export interface FormFieldAntdProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  control: Control<any>;
}

const FormFieldAntd = ({ name, label, control, ...inputProps }: FormFieldAntdProps) => {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <Fragment>
      <Form.Item label={label}>
        <Input onChange={onChange} onBlur={onBlur} value={value}></Input>
      </Form.Item>
    </Fragment>
  );
};

export default FormFieldAntd;
