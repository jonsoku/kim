import React, { Component } from 'react';
import MainSlide from '../../components/Home/MainSlide';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      images: [
        {
          id: 0,
          image:
            'https://images.unsplash.com/photo-1553531580-a0868f1263f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
        },
        {
          id: 1,
          image:
            'https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
        },
        {
          id: 2,
          image:
            'https://images.unsplash.com/photo-1504151932400-72d4384f04b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
        },
        {
          id: 3,
          image:
            'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        },
      ],
    };
  }

  handleLeftArrow = () => {
    const { page, images } = this.state;
    this.setState({
      page: page - 1,
    });
    if (page === 0) {
      this.setState({
        page: images.length - 1,
      });
    }
  };

  handleRightArrow = () => {
    const { page, images } = this.state;
    this.setState({
      page: page + 1,
    });
    if (page > images.length - 2) {
      this.setState({
        page: 0,
      });
    }
  };

  moveTo = (page) => {
    console.log(`${page}page로 이동되었습니다.`, 'moveTo');
    page = page || 0;
    page %= this.state.images.length;
    this.setState({
      page,
    });
  };

  render() {
    const { handleLeftArrow, handleRightArrow, moveTo } = this;
    const { page, images } = this.state;
    return (
      <div>
        <MainSlide
          handleLeftArrow={handleLeftArrow}
          handleRightArrow={handleRightArrow}
          page={page}
          images={images}
          length={images.length}
          moveTo={moveTo}
        />
      </div>
    );
  }
}
