import { BaseButton } from "./BaseButton";

export const PostButton = (props) => {
  const { createNewCategory, children } = props;
  return <BaseButton onClick={createNewCategory}>{ children }</BaseButton>
};