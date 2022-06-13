import { useState } from "react";

const useToggle = (defaultValue: boolean):[boolean, (value?: boolean) => void ] => {
  // 傳入 default value 覆蓋初始值
  const [value, setValue] = useState<boolean>(defaultValue)
  const toggleValue = (value?: boolean) => {
    setValue(prev => 
      typeof value === "boolean" ? value : !prev  
    )
  }
  return [value, toggleValue];
}

export default useToggle;