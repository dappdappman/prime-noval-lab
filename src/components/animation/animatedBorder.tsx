import React, { ReactNode } from "react";
import style from "@/styles/animatedBorderWrapper.module.css";

type AnimatedBorderWrapperProps = {
    children: ReactNode;
  };
  
  const AnimatedBorderWrapper: React.FC<AnimatedBorderWrapperProps> = ({ children }) => {
    return (
        <div className={style.box}>
            {children}
        </div>
    )
}

export default AnimatedBorderWrapper;