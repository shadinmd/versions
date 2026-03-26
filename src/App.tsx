const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "white",
        fontSize: "2rem",
      }}
    >
      Version: {__APP_VERSION__}
    </div>
  );
};

export default App;
