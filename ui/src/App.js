// Libraries
import React, { useState } from 'react';
//import 'antd/dist/reset.css';
import { Row, Col, Dropdown, Menu, Avatar, Card, Space, Table } from 'antd';
import { GrTable } from "react-icons/gr";
import { VscPieChart } from "react-icons/vsc";

// Native Imports
import logo from "./images/logo.png";
import byte from "./images/byte.png";
import { data } from "./mockData/transaction";

export default function App() {
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [dataMode, setDataMode] = useState('table'); // whether to show the transactions as a 'table' or as a 'chart'
    const toggleProfileModal = () => setProfileModalOpen(!profileModalOpen);
    
    const logoutMenu = (
        <Menu>
            <Menu.Item key="profile">
                {/* TODO: Add "WIP" modal for this option */}
                <a href="#" >Profile</a>
            </Menu.Item>
            <Menu.Item key="logOut" disabled="true">
                <a href="#" >Log Out</a>
            </Menu.Item>
        </Menu>
    );

    const columns = [
        {
            title: 'Transaction',
            dataIndex: 'description'
        },
        {
            title: 'Merchant',
            dataIndex: ['merchant', 'name']
        },
        {
            title: 'Amount',
            dataIndex: 'amount'
        },
        {
            title: 'Category',
            dataIndex: 'type'
        },
        {
            title: 'Date',
            dataIndex: 'purchase_date',
            // TODO: Add custom render to this column (YYYY-MM-DD -> MMM dd, YYYY)
            // TODO: Add sorter to this column
        }
    ];

    return (
        <>
            <Row align="middle">
                {/* Left-aligned col for logo */}
                <Col span={6}>
                    <img src={logo} alt="Costegory logo" width="200px"></img> 
                </Col>               
                {/* Right-aligned col for profile picture and mock log out feature */}
                <Col span={6} offset={12} style={{ display: "flex", justifyContent: "flex-end", paddingRight: "30px" }}>
                    <Dropdown 
                        overlay={logoutMenu}
                        trigger={["click"]}
                        placement="bottom"
                    >
                        <Row onClick={(e) => e.preventDefault()}>
                            <Avatar src={byte}/>
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
                            <a href="#"><GrTable size={25}/></a>
                            <a href="#"><VscPieChart size={30}/></a>
                        </Space>
                    </Row>
                    <Row>
                        <Table
                            columns={columns}
                            dataSource={data}
                        />
                    </Row>
                </Card>
            </Row>
        </>
    );
}
