/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Checkbox, Grid, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/foundation-symbol';

const { Row, Col } = Grid;

@withRouter
class UserLogin extends Component {
  static displayName = 'UserLogin';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        username: '',
        password: '',
        checkbox: false,
      },
    };
  }

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log(values);
      Message.success('登录成功');
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div className="formContainer">
        <h4 className="formTitle">Login</h4>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div className="formItems">
            <Row className="formItem">
              <Col className="formItemCol">
                <IceIcon type="person" size="small" className="inputIcon" />
                <IceFormBinder name="username" required message="Please input your username!">
                  <Input className="next-input-single" size="large" maxLength={20} placeholder="Username" />
                </IceFormBinder>
              </Col>
              <Col>
                <IceFormError name="username" />
              </Col>
            </Row>

            <Row className="formItem">
              <Col className="formItemCol">
                <IceIcon type="lock" size="small" className="inputIcon" />
                <IceFormBinder name="password" required message="Please input your password!">
                  <Input className="next-input-single" size="large" htmlType="password" placeholder="Password" />
                </IceFormBinder>
              </Col>
              <Col>
                <IceFormError name="password" />
              </Col>
            </Row>

            <Row className="formItems formItemRemember">
              <Col>
                <IceFormBinder name="checkbox">
                  <Checkbox className="checkbox">Remember me</Checkbox>
                </IceFormBinder>
              </Col>
              <Col>
                <Link to="/user/forget-password" className="forget-password">Forget Password</Link>
              </Col>
            </Row>

            <Row className="formItem">
              <Button
                type="primary"
                onClick={this.handleSubmit}
                className="submitBtn"
              >
                Login
              </Button>
            </Row>

            {/* <Row className="tips">
              <Link to="/user/register" className="tips-text">
                立即注册
              </Link>
            </Row> */}
          </div>
        </IceFormBinderWrapper>
      </div>
    );
  }
}

export default UserLogin;
