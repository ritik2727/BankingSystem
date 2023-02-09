import { ThemeProvider } from '@material-ui/styles';
import React , {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateUser from './CreateUser';
import History from './History';
import Footer from './ui/Footer';
import Header from './ui/Header';
import theme from "./ui/Theme";
import Users from './Users';
import Welcome from './Welcome';
import OpenBrokerAccount from './OpenBrokerAccount';
import UploadDocumnets from './UploadDocuments';
// import './ui/App.css'
import './ui/History.css'
import LandingPage from './LandingPage';

function App() {
  const [value,setValue] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value}
          setValue={setValue}x
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          />
          <Switch>
          <Route exact path='/'  
          render={(props)=>(
                <LandingPage
                  {...props} 
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )} 
            />
          <Route exact path='/users'  
              render={(props)=>(
                <Users
                  {...props} 
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
          />
          <Route exact path='/history' component={History} />
          <Route exact path='/create' component={CreateUser} />
          <Route exact path='/open' component={OpenBrokerAccount} />
          <Route exact path='/upload' component={UploadDocumnets} />
          <Route exact path='/welcome' component={Welcome} />

          </Switch>

      <Footer value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex} 
      />
    </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
