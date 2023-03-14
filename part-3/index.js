const App = () => {
  return (
    <div>
      <Person
        age="17"
        name="Applesssssss"
        hobbies={["Running", "Hiking", "Skiing"]}
      />
      <Person
        age="19"
        name="Marissa"
        hobbies={["Gymnastics", "Bowling", "Archery"]}
      />
      <Person
        age="28"
        name="Clarence"
        hobbies={["Vaulting", "Thievery", "No good"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
