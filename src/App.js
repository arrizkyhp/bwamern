import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from "pages/LandingPage"
import DetailPage from "pages/DetailPage"
import Checkout from "pages/Checkout"


import Example from 'pages/Example';
import ExampleDate from 'pages/ExampleDate';
import ExampleBreadcrumb from 'pages/ExampleBreadcrumb';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailPage} />
        <Route exact path="/checkout" component={Checkout} />


        <Route exact path="/example" component={Example} />
        <Route exact path="/example-date" component={ExampleDate} />
        <Route exact path="/example-bc" component={ExampleBreadcrumb} />
      </Router>
    </div>
  );
}

export default App;
