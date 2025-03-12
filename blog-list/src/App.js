import {Route, Switch} from 'react-router-dom'

import Header from './Components/Header'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
