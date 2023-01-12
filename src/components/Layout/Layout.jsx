import classes from "./Layout.module.scss";

const Layout = ({children}) => {
  return (
    <>
      <div>Toolbar, sideDrawer, Backdrop</div>
      <main className={classes.Content}>
        { children }
      </main>
    </>
  );
};

export default Layout;
