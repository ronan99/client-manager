import { Flex, Form, Input, InputNumber, Modal, Space, message } from 'antd';
import { useEffect, useState } from 'react';
import Button from '../../components/common/button';
import Container from "../../components/container";
import TableSearch from "../../components/table";
import ClientService from '../../services/Client/client';
import { ClientCreate, Client as ClientType } from '../../services/Client/client.dto';
import './style.css';


export default function MainPage(){
    const api = new ClientService()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState<ClientType[]>([])
    const [messageApi, contextHolder] = message.useMessage({
        maxCount: 3
    });
    const [formClient] = Form.useForm()

    const showModal = () => {
        setIsModalOpen(true);
      };
    
    const handleOk = () => {
        formClient.submit()
    };

    const createClient = async (client: ClientCreate) => {
        
        try {
            const response = await api.create(client)
            setData([...data, response.data.data])
            successMessage("Cliente criado com sucesso")
            setIsModalOpen(false);
        } catch (error: any) {
            if(error.response.data.data){
                for(let err of error.response.data.data){
                    errorMessage(err.erro)
                }
                return
            }
            errorMessage(error.response.data.message || "Um erro ocorreu ao tentar cadastrar o cliente")
            
        }
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const errorMessage = (msg: String) => {
        messageApi.open({
            type: 'error',
            content: msg,
        });
    };
    const successMessage = (msg: String) => {
        messageApi.open({
            type: 'success',
            content: msg,
        });
    };
    

    const getData = async () => {
        try {
            const clients = await api.getAll()
            setData(clients.data.data)
            
        } catch (e) {
            errorMessage("Erro ao conectar à Api")
        }
    }

    useEffect( () => {
        getData()
    }, 
    [])
    
    return (
        <Container>
            <Flex justify="center" style={{height: '100%'}}>
                <Space direction='vertical' size="middle" style={{width: '60%'}}>
                    <Flex wrap="wrap" gap="small">
                        <Button type="primary" onClick={() => showModal()}>Adicionar novo</Button>
                        <Button type="primary">Calcular rota</Button>
                    </Flex>
                    
                    <TableSearch data={data}></TableSearch>
                </Space>
            </Flex>
            <>
            {contextHolder}
                <Modal title="Cadastrar Cliente" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
                    <Form
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        form={formClient}
                        onFinish={createClient}
                        autoComplete="off"
                        preserve={false}
                    >
                        <Form.Item<ClientCreate>
                            label="Nome"
                            name="name"
                            rules={[{ required: true, message: 'Digite o nome' }]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item<ClientCreate>
                            label="E-mail"
                            name="email"
                            rules={[{ required: true, message: 'Digite o email' }, { message: 'E-mail inválido', type: 'email'}]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item<ClientCreate>
                        label="Telefone"
                        name="phone"
                        rules={[{ required: true, message: 'Digite o telefone' }]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item<ClientCreate>
                        label="x"
                        name="x"
                        rules={[{ required: true, message: 'Digite o x' }]}
                        >
                        <InputNumber />
                        </Form.Item>
                        <Form.Item<ClientCreate>
                        label="y"
                        name="y"
                        rules={[{ required: true, message: 'Digite o y' }]}
                        >
                        <InputNumber />
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        </Container>
    )
}
