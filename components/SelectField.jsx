import Select, { MultiValue, SingleValue, components as Comps } from 'react-select';

export const SelectField = ({
  name /**el nombre del campo */,
  value /**el valor seleccionado */,
  options /**las opciones disponibles en el campo de selección */,
  onChange: handler /**el manejador de evento que se llama cuando el valor del campo cambia */,
  label /**la etiqueta que se muestra encima del campo de selección */,
  className = '' /**la clase CSS para el contenedor principal del componente */,
  placeholder /**el texto de placeholder */,
  border /**una bandera para mostrar o no el borde del campo de selección */,
  borderRadius /** una bandera para mostrar o no el borde redondeado del campo de selección */,
  borderRadiuspx /**el valor de border-radius si borderRadius es false */,
  messageError /**el mensaje de error que se muestra debajo del campo de selección */,
  paddingY /**el valor de padding-top y padding-bottom */,
  dropdownIndicatorColor /**el color del indicador de menú desplegable */,
  isMulti = false /**una bandera para indicar si el campo de selección es múltiple o no */,
  disabled = false /**una bandera para indicar si el campo de selección está deshabilitado o no */,
  colorText /**color del texto */,
  isClearable = false /**una bandera para indicar si el campo de selección es limpiable o no */,
  backgroundColor /**el color de fondo */,
  colorPlaceholder /**el color del placeholder */,
  borderBottom /**el valor de border-bottom */,
  fontSize /**tamaño de la fuente */
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
          primary: dropdownIndicatorColor ? dropdownIndicatorColor : 'rgb(12, 122, 142)',
          primary25: dropdownIndicatorColor ? dropdownIndicatorColor : 'rgb(12, 122, 142)',
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
          color: dropdownIndicatorColor ? dropdownIndicatorColor : 'rgb(12, 122, 142)',
        }),
        control: base => ({
          ...base,
          minHeight: 40,
          border: border ? '' : 'none',
          borderRadius: borderRadius ? '9999px' : (borderRadiuspx ? borderRadiuspx : ''),
          backgroundColor: backgroundColor ? backgroundColor : 'white',
          paddingLeft: '0px',
          paddingRight: '0px',
          paddingBottom: paddingY ? paddingY : '',
          paddingTop: paddingY ? paddingY : '',
          borderBottom: borderBottom ? borderBottom : 'none'
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
