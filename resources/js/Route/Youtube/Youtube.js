import React, { Component } from 'react';
import Axios from 'axios';
import Container from '../../components/Style/Container';
import RenderYoutubes from '../../components/Youtube/RenderYoutubes';

export default class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubes: [],
    };
  }

  _getYoutube() {
    Axios.get('/youtubes')
      .then(response => this.setState({
        youtubes: [...response.data.youtubes],
      }))
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this._getYoutube();
  }

  render() {
    const { youtubes } = this.state;
    return (
      <Container>
        <RenderYoutubes youtubes={youtubes} />
      </Container>
    );
  }
}
