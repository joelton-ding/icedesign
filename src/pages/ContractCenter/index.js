import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import ContainerTitle from '../../components/ContainerTitle';
// import ContractTable from '../../components/ContractTable';
// import SearchHistory from './components/SearchHistory';
import styles from './index.module.scss'

const { Row, Col } = Grid;

export default class ContractCenter extends Component {
  static displayName = 'ContractCenter';

  static propTypes = {};

  static defaultProps = {};

  state = {
    searchQueryHistory: null,
  }

  render() {
    return (
      <Row gutter={20} wrap>
        <Col l="24">
          <IceContainer style={{ padding: '0' }}>
            <ContainerTitle title="Manage News" />
            <div style={{ padding: '20px' }}>
              {/* <ContractTable searchQueryHistory={this.state.searchQueryHistory} /> */}
              <h1><a href="/add-news">Add New</a></h1>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <TableColumn /> */}
                </tbody>
              </table>
            </div>
          </IceContainer>
        </Col>
        {/* <Col l="6">
          <SearchHistory onSearchHistory={(searchQuery) => {
            this.setState({
              searchQueryHistory: searchQuery,
            });
          }}
          />
        </Col> */}
      </Row>
    );
  }
}
