// Import required Ant Design components
import { useState, useEffect } from 'react';
import { Table, Spin, ConfigProvider } from 'antd';
import axios from 'axios';

const MyTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: <span className='font-orbitron text text-2xl'> ID</span>,
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id, 
      render: (text) => (
        <span style={{ fontFamily: 'poppins', fontWeight: 'medium' }}>{text}</span>
      )
    },
    {
      title: <span className='font-orbitron text text-2xl'>Name</span>,
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => (
        <span style={{ fontFamily: 'poppins', fontWeight: 'medium' }}>{text}</span>
      )
    },
    {
      title: <span className='font-orbitron text text-2xl'>Email</span>,
      dataIndex: 'email',
      key: 'email',
      render: (text) => (
        <span style={{ fontFamily: 'poppins', fontWeight: 'medium' }}>{text}</span>
      )
    },
    
    {
      title: <span className='font-orbitron text text-2xl'>City</span>,
      dataIndex: ['address', 'city'],
      key: 'city',
      filters: [ // Enable filtering
        { text: 'New York', value: 'New York' },
        { text: 'London', value: 'London' },
        // Add more filtering options as needed
      ],
      onFilter: (value, record) => record.address.city.indexOf(value) === 0,
      render: (text) => (
        <span style={{ fontFamily: 'poppins', fontWeight: 'medium' }}>{text}</span>
      ),
    },
  ];

  const paginationOptions = {
    pageSize: 5, // Number of items per page
  };

  return (
   
    <ConfigProvider
    theme={{
        token: {
          // Seed Token
          colorPrimary: '#00b96b',
          borderRadius: 2,

          // Alias Token
          colorBgContainer: '#00131E',
          colorText: 'white',
          fontFamilyCode: 'poppins'
          
        },
      }}
      >
      <Spin spinning={loading}>
        <Table dataSource={data} className='gradient' columns={columns} pagination={paginationOptions} />
      </Spin>
    </ConfigProvider>
  );
};

export default MyTable;
