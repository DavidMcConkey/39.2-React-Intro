const Person = (props) => {
  let res;
  let name;
  if (props.age > 18) {
    res = <h3> please go vote!</h3>;
  } else {
    res = <h3> you must be 18 to vote!</h3>;
  }
  if (props.name.length > 8) {
    name = props.name.slice(0, 6);
  } else {
    name = props.name;
  }
  return (
    <div>
      <p>Learn some information about this person..</p>
      <p>
        Hey there {name},{res}
      </p>
      <p>{name}(s) hobbies:</p>
      <ul>
        {props.hobbies.map((t) => (
          <li>
            <b>{t}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
