import React, { Component } from 'react';
import Axios from 'axios';
import RenderForm from '../../components/Board/RenderForm';
import Container from '../../components/Style/Container';

export default class BoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: {
        category: '',
        title: '',
        description: '',
      },
    };
  }

  handleHome = () => {
    this.props.history.push('/boards');
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post('/boards', {
      category: this.state.create.category,
      title: this.state.create.title,
      description: this.state.create.description,
    })
      .catch(error => console.log(error))
      .then(this.props.history.push('/boards'));
  };

  handleChange = (e) => {
    this.setState({
      create: {
        ...this.state.create,
        [e.target.name]: e.target.value,
      },
    });
  };

  _getBoard = async () => await Axios.get(`/boards/${this.props.match.params.id}`).then(response => this.setState({
    create: {
      ...this.state.create,
      category: response.data.board.category,
      title: response.data.board.title,
      description: response.data.board.description,
    },
  }));

  componentDidMount() {
    this._getBoard();
  }

  render() {
    const { create } = this.state;
    const { handleChange, handleSubmit, handleHome } = this;
    console.log(this.props.match.url);
    return (
      <Container>
        <RenderForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleHome={handleHome}
          create={create}
        />
      </Container>
    );
  }
}
