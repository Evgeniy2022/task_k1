import { FC, useState } from "react";


interface InputProps {
  addTask: (title:string)=>void;
}

export const Input: FC<InputProps> = ({ addTask }) => {
	const [value, setValue] = useState('')



  return (
    <>
      <input type="text" 
		value={value} 
		onChange={(e)=>{setValue(e.target.value)}} 
		onKeyDown={(e)=>{
			if(e.key === "Enter"){
				addTask(value)
				setValue('')
			}
		}}/>
    </>
  );
};