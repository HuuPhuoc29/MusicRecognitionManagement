import React, { useState, useEffect } from 'react';
import SingersApi from '../../api/singersApi.js'
import "./singersmanager.scss"
import { Box } from '@chakra-ui/react';
import { Table, Space, Input, Modal } from 'antd';
// import 'antd/dist/antd.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import singers_img from '../../assets/singers-img/singers-img.jpg';

const SingersManager = () => {
    const [listSingers, setListSingers] = useState([]);
    const [listSingersAll, setListSingersAll] = useState([]);
    const [successStatus, setSuccessStatus] = useState('');

    const [categoryId, setCategoryId] = useState([]);

    const [isModalAddVisible, setIsModalAddVisible] = useState(false);
    const [isModalShowVisible, setIsModalShowVisible] = useState(false);
    const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);
    const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
    const [modelCurrentAction, setModelCurrentAction] = useState({});
    const [actionChange, setActionChange] = useState(true);

    const entryModal = {
        name: '',
        age: '',
    };

    const { Search } = Input;

    const onchangeModelCurrentAction = event => {
        setModelCurrentAction({
          ...modelCurrentAction,
          [event.target.name]: event.target.value,
        });
      };

    useEffect(() => {
        SingersApi
            .getAllSingers()
            .then(response => {
                console.log(response)
                // setListSingers(response.data); //check lại response.datalistSingers
                setListSingersAll(response); //check lại response.datalistSingersAll
                setCategoryId(response.data.categoryId);
            })
            .catch(error => {
                console.log('Failed to fetch singers list:', error);
            });
    }, [actionChange]);

    const showAddModal = () => {
        setSuccessStatus('');
        setIsModalAddVisible(true);
        setModelCurrentAction(entryModal);
    };

    const handleAddOk = async () => {
        // if (name == '' || title == '' || description == '' || price == '') {
        //   setSuccessStatus('Not enough infomation');
        //   return;
        // }
        var temp = modelCurrentAction;
        temp.categoryId = categoryId;
        console.log("T: " + temp + "và OK" )
        setModelCurrentAction(temp);
        
      };
      const handleAddCancel = () => setIsModalAddVisible(false);
    
    const showShowModal = () => {
        setIsModalShowVisible(true);
    };
    const handleShowOk = () => {
        setIsModalShowVisible(false);
    };
    const handleShowCancel = () => {
        setIsModalShowVisible(false);
    };

    const showUpdateModal = () => {
        // setIsModalUpdateVisible(true);
        setSuccessStatus('');
        setIsModalUpdateVisible(true);
    };
    const handleUpdateOk = () => {
        // API update singers
    };
    const handleUpdateCancel = () => {
        setIsModalUpdateVisible(false);
    };

    const showDeleteModal = () => {
        // setIsModalDeleteVisible(true);
        setSuccessStatus('');
        setIsModalDeleteVisible(true);
    };

    const handleDeleteOk = () => {
        //API delete singers
    };

    const handleDeleteCancel = () => {
        setIsModalDeleteVisible(false);
    };
    
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            render: text => String(text),
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Action',
            key: 'action',
            render: (index, record) => (
                <Space className="action-button" size="middle">
                    <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => {
                            setModelCurrentAction(record);
                            showShowModal();
                    }}
                    >
                        Show
                    </button>
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => {
                            setModelCurrentAction(record);
                            showUpdateModal();
                        }}
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => {
                            setModelCurrentAction(record);
                            showDeleteModal();
                        }}
                    >
                        Delete
                    </button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Modal
                title="Add new singer"
                visible={isModalAddVisible}
                onOk={handleAddOk}
                onCancel={handleAddCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <div class="form-group">
                    <label for="name">Name: </label>
                    <input
                        type="name"
                        class="form-control"
                        placeholder="Enter name"
                        // value={name}
                        name="name"
                        // onChange={onchangeModelCurrentAction}
                    ></input>
                </div>
                <div class="form-group">
                    <label for="Title">Title: </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter title"
                        // value={title}
                        name="title"
                        onChange={onchangeModelCurrentAction}
                    ></input>
                </div>
            </Modal>

            {/* Table */}
            <div className="singers-utilities">
                <div className="btn-add-singers" onClick={showAddModal}>
                <div className="left">
                    <div className="percentage positive">
                        <AddCircleIcon />
                    </div>
                    <BookmarksIcon
                        className="icon"
                        style={{
                            color: 'green',
                            backgroundColor: 'rgba(0, 128, 0, 0.2)',
                        }}
                    />
                </div>
                <div className="right">
                    <span className="counter">New singer</span>
                </div>
                </div>
                <Search
                    allowClear
                    className="search"
                    placeholder="Input search text"
                    enterButton
                    // onSearch={searchClick}
                    // value={searchValue}
                    // onChange={searchChange}
                />
            </div>
            <div className="singers-table-container">
                <Table
                className="singers-table"
                scroll={{
                    x: 1200,
                }}
                columns={columns}
                dataSource={listSingersAll}
                />
            </div>
        </>




        // <div className="col-span-2  overflow-y-scroll">
        //     <table className="table-auto w-full">
        //         <thead className="text-white h-12">
        //             <tr>
        //                 <th className="w-[10%]">#</th>
        //                 <th className="w-[10%]">Image</th>
        //                 <th className="text-left">Singer</th>
        //                 <th className="w-[10%]">Age</th>
        //                 <th className="w-[10%]">
        //                     <i className="fa fa-download"></i>
        //                 </th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {listSingersAll.map((item, index) => (
        //                 <tr
        //                     key={index}
        //                     // className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === item.id && 'bg-slate-600 text-teal-400'}`}
        //                     // onClick={() => handlePlaySong(item.id)}
        //                 >
        //                     <td className="text-center">{index + 1}</td>
        //                     <td><Box style={{ backgroundImage: `url(${singers_img})` }} ></Box></td>
        //                     <td>{item.name}</td>
        //                     <td className="text-center">{item.age}</td>
        //                     <td class="actions-td" className="text-center">
        //                         <button type="button" class="btn btn-primary">
        //                             Show
        //                         </button>
        //                         <button type="button" class="btn btn-info">
        //                             Update
        //                         </button>
        //                         <button type="button" class="btn btn-danger">
        //                             Delete
        //                         </button>
        //                     </td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
    )
}

export default SingersManager;