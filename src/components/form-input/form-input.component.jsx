import './form-input.styles.scss';

const FormInput = ({ label, inputOptions, onChange }) => {
  const { id, value } = inputOptions;

  return (
    <div className='group'>
      <input
        className='form-input'
        {...inputOptions}
        onChange={onChange}
      />
      {label && (
        <label
          htmlFor={`${id}`}
          className={`${value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
