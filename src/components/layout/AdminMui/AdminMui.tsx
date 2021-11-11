import {
  AppBar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import ProductFeature from "../../../features/product";
import {
  Header,
  Main,
  Sidebar,
  StyledLink,
  Title,
  Wrapper,
  WrapperSidebar,
} from "./AdminMui.style";

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
              <StyledLink to="/adminSaga/product">
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
            <Route path="/adminSaga/product">
              <ProductFeature />
            </Route>
          </Switch>
        </Main>
      </Wrapper>
    </Fragment>
  );
};

export default AdminMui;
