const Tweet = (props) => {
  return (
    <ul>
      <li>
        <b>Username: {props.user}</b>
      </li>
      <li>Name: {props.name}</li>
      <li>Date: {props.date}</li>
      <li>Message: {props.message}</li>
    </ul>
  );
};
