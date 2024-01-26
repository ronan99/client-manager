import './style.css'
import TableSearch from "../../components/table";
import Container from "../../components/container";
import Button from '../../components/common/button';
import { Flex, Modal, Space } from 'antd';
import { useEffect, useState } from 'react';
import Client from '../../services/client';


export default function MainPage(){
    const api = new Client()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState()

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    

    const getData = async () => {
        const clients = await api.getAll()
        setData(clients.data.data)
        
    }

    useEffect( () => {
        getData()
    }, 
    [])
    
    return (
        <Container>
            <Flex justify="center" align="center" style={{height: '100%'}}>
                <Space direction='vertical' size="middle" style={{width: '60%'}}>
                    <Flex wrap="wrap" gap="small">
                        <Button type="primary" onClick={() => showModal()}>Adicionar novo</Button>
                        <Button type="primary">Calcular rota</Button>
                    </Flex>
                    
                    <TableSearch data={data}></TableSearch>
                </Space>
            </Flex>
            <>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </>
        </Container>
    )
}
