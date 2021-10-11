import './App.scss';

import { useState } from 'react';
import { Route, Switch } from 'react-router';

import ContentItem from '../ContentItem';
import ContentItemDetails from '../pages/ContentItemDetails';
import NewsItem from '../pages/NewsItem';
import Header from '../Header';
import PopUp from '../PopUp';
import Menu from '../Menu';
import NewsItemDetails from '../pages/NewsItemDetails';

import news from '../mocks/news';
import vebinars from '../mocks/vebinars';


const App = () => {

  const [selectedItem, addSelectedItem] = useState({});
  const [notif, addNotif] = useState(false);
  const [menu, addMenu] = useState(false);

  const selectItem = (id, data) => {
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
      <Menu menu={menu} onClosed={() => addMenu(false)}/>
      
      <section className="container">
        <Switch>
          <Route
            path="/"
            render={({history}) => {
                return (
                  <div className="desktop-items">
                  <ContentItem data={vebinars} onClicked={(id) => {
                    selectItem(id, vebinars);
                    history.push(`/vebinars/${id}`);
                  }}/>
                  </div>
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
          <Route
            path="/news"
            render={({history}) => {
              return (
                <div className="desktop-items">
                <NewsItem 
                  data={news} onClicked={(id) => {
                    selectItem(id, news);
                    history.push(`/news/${id}`);
                    }}
                />
                </div>
              )
            }}
            exact
          />
          <Route
            path="/news/:id"
            render={() => {
              return (
                <NewsItemDetails
                  selectedItem={selectedItem}
                />
              )
            }}
          />
        </Switch>
      </section>  
    </main>
  );
}

export default App;