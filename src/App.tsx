const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "white",
        fontSize: "2rem",
      }}
    >
      {__APP_VERSION__}
    </div>
  );
};

export default App;
