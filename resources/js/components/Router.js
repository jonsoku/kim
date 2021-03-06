import React from 'react';
import {
  HashRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import Home from '../Route/Home/Home';
import Header from './Header';
import Post from '../Route/Post/Post';
import PostShow from '../Route/Post/PostShow';
import PostEdit from '../Route/Post/PostEdit';
import PostCreate from '../Route/Post/PostCreate';
import Introduce from '../Route/Introduce';
import Board from '../Route/Board';
import BoardForm from '../Route/Board/BoardForm';
import Youtube from '../Route/Youtube';
import YoutubeShow from '../Route/Youtube/YoutubeShow';
import YoutubeForm from '../Route/Youtube/YoutubeForm';
import Review from '../Route/Review';
import Call from '../Route/Call';
import Price from '../Route/Price';
import BoardShow from '../Route/Board/BoardShow';

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" exact component={Post} />
      <Route path="/posts/create" exact component={PostCreate} />
      <Route path="/posts/:id" exact component={PostShow} />
      <Route path="/posts/:id/edit" exact component={PostEdit} />
      <Route path="/introduces" exact component={Introduce} />
      <Route path="/prices" exact component={Price} />
      <Route path="/boards" exact component={Board} />
      <Route path="/boards/create" exact component={BoardForm} />
      <Route path="/boards/:id" exact component={BoardShow} />
      <Route path="/boards/:id/edit" exact component={BoardForm} />
      <Route path="/youtubes" exact component={Youtube} />
      <Route path="/youtubes/create" exact component={YoutubeForm} />
      <Route path="/youtubes/:id" exact component={YoutubeShow} />
      <Route path="/youtubes/:id/edit" exact component={YoutubeForm} />
      <Route path="/reviews" exact component={Review} />
      <Route path="/calls" exact component={Call} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
