import React, { Component } from 'react';
import Axios from 'axios';
import Container from '../../components/Style/Container';
import RenderYoutube from '../../components/Youtube/RenderYoutube';

export default class YoutubeShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtube: [],
    };
  }

  handleDelete = async () => await Axios.delete(`${this.props.match.url}`)
    .catch(error => console.log(error))
    .then(this.props.history.replace('/youtubes'));

  handleEditLink = async () => await this.props.history.push(`${this.props.match.url}/edit`);

  _getOne = async () => {
    await Axios.get(`/youtubes/${this.props.match.params.id}`).then(response => this.setState({
      youtube: response.data.youtube,
    }));
  };

  componentDidMount() {
    this._getOne();
  }

  render() {
    console.log(this.props);
    const { youtube } = this.state;
    const { handleEditLink, handleDelete } = this;
    return (
      <Container>
        <RenderYoutube
          youtube={youtube}
          handleEditLink={handleEditLink}
          handleDelete={handleDelete}
        />
      </Container>
    );
  }
}
