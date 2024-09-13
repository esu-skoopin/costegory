// Libraries
import React, { useState } from 'react';
import { Row, Col, Select, Dropdown, Menu, Avatar, Card, Space, Table } from 'antd';
import { FaTable } from 'react-icons/fa';
import { VscPieChart } from 'react-icons/vsc';

// Native Imports
import logo from '../../images/logo.png';
import byte from '../../images/byte.png';
import { purchases } from '../../mockData/purchase';
import { categories } from '../../mockData/category';
import ProfileModal from './ProfileModal';

export default function App() {
    const Option = Select.Option;
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [dataMode, setDataMode] = useState('table');  // whether to show the transactions as a 'table' or as a 'chart'
    const toggleProfileModal = () => setProfileModalOpen(!profileModalOpen);
    
    const logoutMenu = (
        <Menu>
            <Menu.Item key="profile">
                <a href="#" onClick={() => handleProfileClick()}>Profile</a>
            </Menu.Item>
            <Menu.Item key="logOut" disabled="true">
                <a href="#">Log Out</a>
            </Menu.Item>
        </Menu>
    );
    
    function handleProfileClick() {
        setProfileModalOpen(!profileModalOpen);
    }

    const columns = [
        {
            title: 'Transaction',
            dataIndex: 'description',
            sorter: {
                compare: (a, b) => a.description.localeCompare(b.description),
                multiple: 3
            }
        },
        {
            title: 'Merchant',
            dataIndex: ['merchant', 'name'],
            sorter: {
                compare: (a, b) => a.merchant.name.localeCompare(b.merchant.name),
                multiple: 2
            }
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            sorter: {
                compare: (a, b) => a.amount - b.amount,
                multiple: 1
            },
            render: (amount) => (
                <span>${new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(amount)}</span>
            )
        },
        {
            title: 'Category',
            dataIndex: 'type',
            sorter: {
                compare: (a, b) => a.type.localeCompare(b.type),
                multiple: 4
            },
            render: (category) => {
                return (
                    <Select
                        value={category}
                        style={{ width: '14em', marginRight: '10px', textAlign: 'left' }}
                    >
                        {
                            categories.map((category) => {
                                return <Option value={category._id} key={category._id}>{category.name}</Option>
                            })
                        }
                    </Select>
                );
            }
        },
        {
            title: 'Date',
            dataIndex: 'purchase_date',
            sorter: {
                compare: (a, b) => new Date(a.purchase_date) - new Date(b.purchase_date),
                multiple: 5
            }
            // TODO: Add custom render to this column (YYYY-MM-DD -> MMM dd, YYYY)
        }
    ];

    return (
        <>
            <Row align="middle">
                {/* Left-aligned col for logo */}
                <Col span={6}>
                    <img src={logo} alt="Costegory logo" width="200px" />
                </Col>               
                {/* Right-aligned col for profile picture and mock log out feature */}
                <Col span={6} offset={12} style={{ display: "flex", justifyContent: "flex-end", paddingRight: "30px" }}>
                    <Dropdown 
                        overlay={logoutMenu}
                        trigger={["click"]}
                        placement="bottom"
                    >
                        <Row onClick={(e) => e.preventDefault()}>
                            <Avatar src={byte} size={40}/>
                        </Row>
                    </Dropdown>
                </Col>             
            </Row>
            <Row justify="center">
                <Card>
                    <Row justify="end">
                        <Space>
                            {/* TODO: Style these icons */}
                            {/* TODO: If time, add onClick action for both */}
                            <a href="#" style={{ color: '#38761d' }}><FaTable size={25}/></a>
                            <a href="#" style={{ color: '#38761d' }}><VscPieChart size={30}/></a>
                        </Space>
                    </Row>
                    <Row>
                        <Table
                            columns={columns}
                            dataSource={purchases}
                        />
                    </Row>

                    {profileModalOpen &&
                        <ProfileModal
                            open={profileModalOpen}
                            toggleProfileModal={toggleProfileModal}
                        />
                    }
                </Card>
            </Row>
        </>
    );
}