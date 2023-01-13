import Select, { MultiValue, SingleValue, components as Comps } from 'react-select';

export const SelectField = ({
  name,
  value,
  options,
  onChange: handler,
  label,
  className = '',
  placeholder,
  border,
  borderRadius,
  borderRadiuspx,
  messageError,
  paddingY,
  dropdownIndicatorColor,
  isMulti = false,
  disabled = false,
  colorText,
  isClearable = false,
  backgroundColor,
  colorPlaceholder,
  fontSize
}) => (
  <div className={'w-full flex flex-col items-start ' + className}>
    {label && <h2 className='pl-6 mb-3 text-lg font-medium'>{label}</h2>}
    <Select
      placeholder={placeholder}
      components={{
        IndicatorSeparator: () => null,
        Input: ({ ...rest }) => <Comps.Input {...rest} autoComplete='nope' />,
      }}
      theme={old => ({
        ...old,
        colors: {
          ...old.colors,
          primary: dropdownIndicatorColor ? dropdownIndicatorColor : '#33B5A9',
          primary25: dropdownIndicatorColor ? dropdownIndicatorColor : '#33b5a9b0',
        },
      })}
      isMulti={isMulti}
      className='w-full'
      name={name}
      value={value}
      options={options}
      onChange={newValue => handler(newValue, name)}
      isClearable={isClearable}
      isDisabled={disabled}
      styles={{
        dropdownIndicator: base => ({
          ...base,
          color: dropdownIndicatorColor ? dropdownIndicatorColor : '#DF2F44',
        }),
        control: base => ({
          ...base,
          minHeight: 40,
          border: border ? '' : 'none',
          borderRadius: borderRadius ? '9999px' : (borderRadiuspx ? borderRadiuspx : ''),
          backgroundColor: backgroundColor ? backgroundColor : 'white',
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingBottom: paddingY ? paddingY : '',
          paddingTop: paddingY ? paddingY : '',
        }),
        menu: base => ({
          ...base,
          borderRadius: '15px',
          overflow: 'hidden',
          color: colorText ? colorText : 'black',
        }),
        singleValue: base => ({
          ...base,
          color: colorText ? colorText : 'black',
        }),
        placeholder: base => ({
          ...base,
          color: colorPlaceholder ? colorPlaceholder : '#616161',
          fontSize: fontSize ? fontSize : '14px'
        })
      }}
    />
    {messageError && <p className='text-primary pl-2 text-xs lg:text-base'>{messageError}</p>}
  </div>
);

export default SelectField;
