import './form-input.styles.scss';

const FormInput = ({ label, inputOptions }) => {
  const { id, value } = inputOptions;

  return (
    <div className='group'>
      <input
        className='form-input'
        {...inputOptions}
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
