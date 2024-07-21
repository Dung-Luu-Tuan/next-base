import React from 'react';
import Input from '../atoms/Input';

type FormFieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormField: React.FC<FormFieldProps> = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <Input value={value} onChange={onChange} placeholder={label} />
  </div>
);

export default FormField;
