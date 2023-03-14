const App = () => {
  return (
    <div>
      <Tweet
        user="Dmcco"
        name="David McConkey"
        date="2023-03-14"
        message="Yessirrr"
      />
      <Tweet
        user="Apples"
        name="Jane Fonda"
        date="2023-03-14"
        message="I just love apples"
      />
      <Tweet
        user="ItsReba"
        name="Reba McEntire"
        date="2023-03-14"
        message="UwU"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
