import './App.scss';

import { useState } from 'react';
import { Route, Switch } from 'react-router';

import ContentItem from '../ContentItem';
import ContentItemDetails from '../pages/ContentItemDetails';
import Header from '../Header';

import data from '../mocks/data';
import PopUp from '../PopUp';
import Menu from '../Menu';

const App = () => {

  const [selectedItem, addSelectedItem] = useState({});
  const [notif, addNotif] = useState(false);
  const [menu, addMenu] = useState(false);

  const selectItem = (id) => {
    const item = data.find((item) => item.id === id);

    console.log(item);
    addSelectedItem(item);
  }

  return (
    <main className="app">
      <Header 
        onNotif={() => addNotif(true)} 
        onMenu={() => addMenu(true)}
      />
      {notif && <PopUp onClosed={() => addNotif(false)}/>}
      {menu && <Menu onClosed={() => addMenu(false)}/>}
      
      <article className="container">
        <Switch>
          <Route
            path="/"
            render={({history}) => {
                return (
                  <ContentItem data={data} onClicked={(id) => {
                    selectItem(id);
                    history.push(`/vebinars/${id}`);
                  }}/>
                )
            }}
            exact
          />
          <Route
            path="/vebinars/:id"
            render={() => {
                return (
                    <ContentItemDetails 
                        selectedItem={selectedItem}
                    />
                )
            }} 
          />
        </Switch>
      </article>  
    </main>
  );
}

export default App;