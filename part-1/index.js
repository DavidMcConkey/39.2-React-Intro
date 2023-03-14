const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Apples" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
