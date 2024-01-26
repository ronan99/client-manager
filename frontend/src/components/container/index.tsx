import { Layout, Flex } from 'antd';
import './style.css'
import React from 'react';

const { Header, Footer, Content } = Layout;

export default function Container({children}: ContainerType){
    
    return <Flex gap="middle" wrap="wrap">
    <Layout>
      <Header>Facilita</Header>
        <Content className="container">
            {children}
        </Content>
      <Footer>Footer</Footer>
    </Layout>
  </Flex>
}

type ContainerType = {
  children: React.ReactNode
}