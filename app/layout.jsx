const Layout = ({ children }) => {
  return (
    <html>
      <body>
      <header>
        <h1>My Todo App</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 My Todo App</p>
      </footer>
    </body>
    </html>
  );
};

export default Layout;
