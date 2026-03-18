const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "grey",
        fontSize: "2rem",
      }}
    >
      Version: {__APP_VERSION__}
    </div>
  );
};

export default App;
