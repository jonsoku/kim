import React, { Component } from 'react';
import Axios from 'axios';
import RenderBoard from '../../components/Board/RenderBoard';
import Container from '../../components/Style/Container';

export default class BoardShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      loading: false,
    };
  }

  handleEdit = (id) => {
    this.props.history.push(`/boards/${id}/edit`);
  };

  handleBack = () => {
    this.props.history.push('/boards');
  };

  _getBoard = async () => await Axios.get(`/boards/${this.props.match.params.id}`).then(response => this.setState({
    board: response.data.board,
  }));

  componentDidMount() {
    this._getBoard();
  }

  render() {
    const { board } = this.state;
    const { handleBack, handleEdit } = this;
    return (
      <Container>
        <RenderBoard board={board} handleBack={handleBack} handleEdit={handleEdit} />
      </Container>
    );
  }
}
