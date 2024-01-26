import { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { GetRef, TableColumnsType, TableColumnType } from 'antd';
import { Input, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';

type InputRef = GetRef<typeof Input>;


interface ClientType {
  key: string;
  name: string;
  email: number;
  phone: string;
}

type DataIndex = keyof ClientType;


export default function TableSearch ({data} : DataTable) {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps['confirm'],
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<ClientType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm}) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Pesquisar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={ async (e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : [])
            confirm({ closeDropdown: false });
            setSearchText(e.target.value);
            setSearchedColumn(dataIndex);
          }}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<ClientType> = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      width: '33%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
      width: '33%',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Telefone',
      dataIndex: 'phone',
      key: 'phone',
      ...getColumnSearchProps('phone'),
      sorter: (a, b) => a.phone.length - b.phone.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey={'id'}/>;
};

type DataTable = {
  data: any
}