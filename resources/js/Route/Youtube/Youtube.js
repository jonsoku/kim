import React, { Component } from 'react';
import Axios from 'axios';
import RenderYoutubes from '../../components/Youtube/RenderYoutubes';
import Container from '../../components/Style/Container';

export default class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubes: [],
    };
  }

  handleLink = (id) => {
    this.props.history.push(`${this.props.match.url}/${id}`);
  };

  _getAll = async () => await Axios.get('/youtubes').then(response => this.setState({
    youtubes: [...response.data.youtubes],
  }));

  componentDidMount() {
    this._getAll();
  }

  componentWillUnmount() {
    this._getAll();
  }

  render() {
    const { youtubes } = this.state;
    const { handleLink } = this;
    return (
      <Container>
        <RenderYoutubes youtubes={youtubes} handleLink={handleLink} />
      </Container>
    );
  }
}
