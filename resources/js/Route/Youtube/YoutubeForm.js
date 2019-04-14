import React, { Component } from 'react';
import Axios from 'axios';
import Container from '../../components/Style/Container';
import RenderForm from '../../components/Youtube/RenderForm';

export default class YoutubeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        category: '',
        title: '',
        description: '',
        url: '',
      },
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post('/youtubes', {
      category: this.state.form.category,
      title: this.state.form.title,
      description: this.state.form.description,
      url: this.state.form.url,
    })
      .catch(error => console.log(error))
      .then(this.props.history.goBack)
      .then(console.log('create submit complete'));
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  _getEdit = async () => await Axios.get(`/youtubes/${this.props.match.params.id}`).then(response => this.setState({
    form: {
      ...this.state.form,
      category: response.data.youtube.category,
      title: response.data.youtube.title,
      description: response.data.youtube.description,
      url: response.data.youtube.url,
    },
  }));

  componentDidMount() {
    {
      this.props.match.url === 'youtube/create' ? null : this._getEdit();
    }
  }

  render() {
    console.log(this.props);
    const { handleChange, handleSubmit } = this;
    const { form } = this.state;
    return (
      <Container>
        <RenderForm handleChange={handleChange} handleSubmit={handleSubmit} form={form} />
      </Container>
    );
  }
}
