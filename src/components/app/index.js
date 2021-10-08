import './App.scss';

import { useState } from 'react';
import { Route, Switch } from 'react-router';

import ContentItem from '../ContentItem';
import ContentItemDetails from '../pages/ContentItemDetails';
import News from '../pages/News';
import Header from '../Header';
import PopUp from '../PopUp';
import Menu from '../Menu';
import NewsItem from '../pages/NewsItem';

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
                  <ContentItem data={vebinars} onClicked={(id) => {
                    selectItem(id, vebinars);
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
          <Route
            path="/news"
            render={({history}) => {
              return (
                <News 
                  data={news} onClicked={(id) => {
                    selectItem(id, news);
                    history.push(`/news/${id}`);
                    }}
                />
              )
            }}
            exact
          />
          <Route
            path="/news/:id"
            render={() => {
              return (
                <NewsItem
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