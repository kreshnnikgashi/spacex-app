import { Container } from '@mui/system';
import './App.css';
import Header from './components/Header/Header';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQL error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://api.spacex.land/graphql/' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<Details />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
