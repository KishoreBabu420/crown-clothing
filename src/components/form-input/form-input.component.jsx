import { Group, FormInputLabel, Input } from './form-input.styles';

const FormInput = ({ label, inputOptions, onChange }) => {
  const { id, value } = inputOptions;

  return (
    <Group>
      <Input
        {...inputOptions}
        onChange={onChange}
      />
      {label && (
        <FormInputLabel
          htmlFor={`${id}`}
          shrink={value.length}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
