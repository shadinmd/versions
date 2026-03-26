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
      <p>Version: {__APP_VERSION__}</p>
      <p>feat 1</p>
      <p>feat 2</p>
      <p>feat 3</p>
			<p>feat 4</p>
    </div>
  );
};

export default App;
