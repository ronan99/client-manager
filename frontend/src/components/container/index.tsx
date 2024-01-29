import { Flex, Image, Layout } from 'antd';
import React from 'react';
import './style.css';

const { Header, Footer, Content } = Layout;

export default function Container({children}: ContainerType){
    
    return <Flex gap="middle" wrap="wrap">
    <Layout>
      <Header className="header-page">
      <Image 
        src="https://facilitajuridicoweb.com/wp-content/uploads/2022/09/logo-etiqueta.png"
      /></Header>
        <Content className="container">
            {children}
        </Content>
      <Footer  style={{ textAlign: 'center' }}>Design ©{new Date().getFullYear()} Criado por Ronan Lino</Footer>
    </Layout>
  </Flex>
}

type ContainerType = {
  children: React.ReactNode
}