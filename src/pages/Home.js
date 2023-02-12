export default function Home(props) {
  const { auth } = props;
  return <div>welcome, {auth.firstName}</div>;
}
