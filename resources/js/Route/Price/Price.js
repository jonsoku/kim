import React, { Component } from 'react';
import Axios from 'axios';
import Container from '../../components/Style/Container';
import Layer from '../../components/Price/Layer';
import Form from '../../components/Price/Form';

export default class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
      form: {
        category: '',
        title: '',
        description: '',
        portfolio: '',
        level: '',
        price: '',
        times: '',
      },
    };
  }

  // eslint-disable-next-line react/sort-comp
  handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-return-await
    return await Axios.post('/prices', {
      category: this.state.form.category,
      title: this.state.form.title,
      description: this.state.form.description,
      portfolio: this.state.form.portfolio,
      level: this.state.form.level,
      price: this.state.form.price,
      times: this.state.form.times,
    })
      .then(
        this.setState({
          form: {
            ...this.state.form,
            category: '',
            title: '',
            description: '',
            portfolio: '',
            level: '',
            price: '',
            times: '',
          },
        }),
      )
      .then(this._getAll());
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  _getAll = async () => await Axios.get('/prices').then(response => this.setState({
    prices: [...response.data.prices],
  }));

  componentDidMount() {
    this._getAll();
  }

  render() {
    const { prices, form, checkbox } = this.state;
    const { handleChange, handleSubmit, toggleCheckbox } = this;
    return (
      <Container>
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          toggleCheckbox={toggleCheckbox}
          form={form}
        />
        <Layer prices={prices} />
      </Container>
    );
  }
}
