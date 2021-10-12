// import logo from './logo.svg';
// import './App.css';

import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

//components
import StoryList from "./components/StoryList";
import Routes from "./components/Routes";
import Ghost from "./components/Ghost";

//Apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div id="main">
      <header className="main-header">Scary Sentences API</header>
      <Routes/>
      <StoryList/>
      <Ghost/>
    </div>
    </ApolloProvider>
  );
}

export default App;
