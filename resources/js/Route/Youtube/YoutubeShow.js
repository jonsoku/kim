import React, { Component } from 'react';
import Axios from 'axios';
import Container from '../../components/Style/Container';
import RenderYoutube from '../../components/Youtube/RenderYoutube';

export default class YoutubeShow extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      youtube: [],
    };
  }

  _getOne = async () => {
    await Axios.get(`/youtubes/${this.props.match.params.id}`).then(response => this.setState({
      youtube: response.data.youtube,
    }));
  };

  componentDidMount() {
    this._isMounted = true;
    this._getOne();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { youtube } = this.state;
    return (
      <Container>
        <RenderYoutube youtube={youtube} />
      </Container>
    );
  }
}
