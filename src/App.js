import SearchBox from "./components/SearchBox";
import Container from "./styles";
import Avatar from "./components/Avatar";
import Cards from "./components/Cards";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

function App() {
  return (
    <>
      <Container>
        <SearchBox />
        <NotificationsActiveIcon />
        <Avatar />
      </Container>
      <Cards />
    </>
  );
}

export default App;
