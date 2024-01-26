import { ConfigProvider } from 'antd';
import MainPage from '../pages/mainPage';
import './style.css' 
import ptBr from 'antd/lib/locale/pt_BR'

export default function Bootstrap(){
    
    return <ConfigProvider
        locale={ptBr}>
            <MainPage/>
        </ConfigProvider>
}

