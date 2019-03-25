import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { Layout, Menu, Icon } from "antd";
import { Grid, Row, Col } from "react-flexbox-grid";
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import "./App.css";
const { Header, Sider, Content, Footer } = Layout;

const cities = [
  "Buenos Aires, ar",
  "Santiago, cl",
  "Bogotá, col",
  "Washington DC., us",
  "Ciudad de México, mx",
  "Madrid, es"
];

class App extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout id="layout-side">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Perfil</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="cloud" />
              <span>Clima</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout id="layout-body">
          <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content>
            <Grid>
              <Row>
                <Col xs={12} md={6}>
                  <LocationListContainer cities={cities} />
                </Col>
                <Col xs={12} md={6}>
                  <Paper>
                    <div className="detail">
                      <ForecastExtendedContainer />
                    </div>
                  </Paper>
                </Col>
              </Row>
            </Grid>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;
