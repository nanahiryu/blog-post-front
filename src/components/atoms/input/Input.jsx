export const Input = (props) => {
  const { newCategory, handleChange, placeholder } = props;
  return <input value={newCategory} onChange={handleChange} placeholder={placeholder} />
}