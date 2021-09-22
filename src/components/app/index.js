import './App.scss';

import { useState } from 'react';
import { Route, Switch } from 'react-router';

import ContentItem from '../ContentItem';
import ContentItemDetails from '../pages/ContentItemDetails';
import Header from '../Header';

import data from '../mocks/data';
import PopUp from '../PopUp';

function App() {
  const [selectedItem, addSelectedItem] = useState({});
  const [notif, addNotif] = useState(false);

  function selectItem(id) {
    const item = data.find((item) => item.id === id);

    console.log(item);
    addSelectedItem(item);
  }

  let popUp;

  if (notif) {
    popUp = <PopUp onClosed={() => addNotif(false)}/>
  } 

  return (
    <article className="app">
      <Header onNotif={() => addNotif(true)}/>
      {popUp}
      <div className="container">
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
      </div>  
    </article>
  );
}

export default App;