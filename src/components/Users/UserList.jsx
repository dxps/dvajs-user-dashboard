import React, { PropTypes } from 'react';
import { Table, Popconfirm, Pagination } from 'antd';

function UserList({
  total, current, loading, dataSource,
  onPageChange,
  onDeleteItem,
  onEditItem,
  }) {
  const columns = [{
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{text}</a>,
  }, {
    title: 'age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'operation',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={() => onEditItem(record)}>edit</a>
        &nbsp;
        <Popconfirm title="Are you sure you want to delete？" onConfirm={() => onDeleteItem(record.id)}>
          <a>delete</a>
        </Popconfirm>
      </p>
    ),
  }];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={false}
      />
      <Pagination
        className="ant-table-pagination"
        total={total}
        current={current}
        pageSize={10}
        onChange={onPageChange}
      />
    </div>
  );
}

UserList.propTypes = {
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  dataSource: PropTypes.array,
  loading: PropTypes.any,
  total: PropTypes.any,
  current: PropTypes.any,
};

export default UserList;
