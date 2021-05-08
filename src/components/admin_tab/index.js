import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ProductDashboard from "../../components/product_dashboard";
import CategoryDashboard from "../../components/category_dashboard";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AdminTab() {
  const classes = useStyles();

  const allTabs = ["/admin/product", "/admin/category"];
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <div className="App">
          <Route
            path="/"
            render={({ location }) => (
              <>
                <Tabs value={location.pathname}>
                  <Tab
                    label="Product"
                    value="/admin/product"
                    component={Link}
                    to={allTabs[0]}
                  />
                  <Tab
                    label="Category"
                    value="/admin/category"
                    component={Link}
                    to={allTabs[1]}
                  />
                </Tabs>
                <Switch>
                  <Route
                    path={allTabs[0]}
                    render={() => <ProductDashboard />}
                  />
                  <Route
                    path={allTabs[1]}
                    render={() => <CategoryDashboard />}
                  />
                </Switch>
              </>
            )}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}
