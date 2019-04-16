import React, { Component } from 'react';
import Axios from 'axios';
import RenderBoards from '../../components/Board/RenderBoards';
import Container from '../../components/Style/Container';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      loading: false,
    };
  }

  handleLinkShow = (id) => {
    this.props.history.push(`/boards/${id}`);
  };

  handleLinkForm = () => {
    this.props.history.push('/boards/create');
  };

  _getBoards = async () => await Axios.get('/boards')
    .then(response => this.setState({
      boards: [...response.data.boards],
    }))
    .catch(error => console.log(error));

  componentDidMount() {
    this._getBoards();
  }

  render() {
    const { boards } = this.state;
    const { handleLinkForm, handleLinkShow } = this;
    return (
      <Container>
        <RenderBoards
          boards={boards}
          handleLinkForm={handleLinkForm}
          handleLinkShow={handleLinkShow}
        />
      </Container>
    );
  }
}
