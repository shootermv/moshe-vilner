'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
        console.log('you pressed "IN"')
      // return 'You liked this.';
    }

    return e(
      'i',
      { onClick: () => this.setState({ liked: true }), className:'fa fa-linkedin' },
      ''
    );
  }
}

const domContainer = document.querySelector('.social.list-inline li:nth-child(1) a');
ReactDOM.render(e(LikeButton), domContainer);