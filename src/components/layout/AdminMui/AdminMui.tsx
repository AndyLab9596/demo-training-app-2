import React, { Fragment } from "react";
import {
  Header,
  Main,
  Sidebar,
  StyledLink,
  Title,
  Wrapper,
  WrapperSidebar,
} from "./AdminMui.style";
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { Route, Switch } from "react-router";

const AdminMui = () => {
  return (
    <Fragment>
      <Header>
        <AppBar position="static">
          <Toolbar>
            <Title>Management</Title>
            <Button
              color="secondary"
              // onClick={handleLogout}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Header>
      <Wrapper>
        <Sidebar>
          <WrapperSidebar>
            <List component="nav" aria-label="main mailbox folders">
              <StyledLink to="/admin/product">
                <ListItem button>
                  <ListItemIcon>
                    <EmojiPeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Product" />
                </ListItem>
              </StyledLink>
            </List>
          </WrapperSidebar>
        </Sidebar>
        <Main>
          <Switch>
            <Route path="/adminSaga/product"></Route>
          </Switch>
        </Main>
      </Wrapper>
    </Fragment>
  );
};

export default AdminMui;
