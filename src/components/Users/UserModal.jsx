import React, { PropTypes } from 'react';
import { Form, Input, Modal } from 'antd';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const UserModal = ({
  visible,
  item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    },
  }) => {
  function handleOk() {
    validateFields((errors) => {
      if (errors) {
        return;
      }
      const data = { ...getFieldsValue(), key: item.key };
      onOk(data);
    });
  }

  function checkNumber(rule, value, callback) {
    if (!value) {
      callback(new Error('Age must be provided.'));
    }
    if (!/^[\d]{1,2}$/.test(value)) {
      callback(new Error('Age must be a number.'));
    } else {
      callback();
    }
  }

  const modalOpts = {
    title: 'User Edit',
    visible,
    onOk: handleOk,
    onCancel,
  };

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem
          label="Name："
          hasFeedback
          {...formItemLayout}
        >
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              { required: true, message: 'Name must be provided.' },
            ],
          })(
            <Input type="text" />
          )}
        </FormItem>
        <FormItem
          label="Age："
          hasFeedback
          {...formItemLayout}
        >
          {getFieldDecorator('age', {
            initialValue: item.age,
            rules: [
              { validator: checkNumber },
            ],
          })(
            <Input type="text" />
          )}
        </FormItem>
        <FormItem
          label="Address："
          hasFeedback
          {...formItemLayout}
        >
          {getFieldDecorator('address', {
            initialValue: item.address,
            rules: [
              { required: true, message: 'Address must be provided.' },
            ],
          })(
            <Input type="address" />
          )}
        </FormItem>
      </Form>
    </Modal>
  );
};

UserModal.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
};

export default Form.create()(UserModal);
