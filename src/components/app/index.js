import './App.scss';
import ContentItem from '../ContentItem';
import ContentItemDetails from '../pages/ContentItemDetails';
import Header from '../Header';
import data from '../mocks/data';
import { Route, Switch } from 'react-router';
import { useState } from 'react';

function App() {
  const [selectedItem, addSelectedItem] = useState({});

  function selectItem(id) {
    const item = data.find((item) => item.id === id);

    console.log(item);
    addSelectedItem(item);
  }

  return (
    <div className="app">
      <Header/>
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
    </div>
  );
}

export default App;