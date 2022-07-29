import { PostButton } from "../atoms/button/PostButton";
import { Input } from "../atoms/input/Input";

export const InputUnit = (props) => {

  const { newCategory, handleChange, placeholder, createNewCategory, children } = props;

  return (
    <>
      <Input newCategory={newCategory} handleChange={handleChange} placeholder={placeholder} />
      <PostButton createNewCategory={createNewCategory} children={children} />
    </>
    
    
  );
}