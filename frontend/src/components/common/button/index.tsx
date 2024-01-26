import { Button as Btn } from 'antd';
import { MouseEventHandler, ReactNode } from 'react';


export default function Button({children, ...props}: ButtonType) {

    return <Btn {...props}>{children}</Btn>

}


type ButtonType = {
    children: ReactNode
    type: "link" | "text" | "default" | "primary" | "dashed" | undefined
    onClick?: MouseEventHandler<HTMLElement>
}