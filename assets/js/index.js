'use strict';

const e = React.createElement;

class InButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
        console.log('you pressed "IN"');
    }

    return (
      <i onClick={() => this.setState({ liked: true })} className='fa fa-linkedin'/>      
    );
  }
}

const domContainer = document.querySelector('.social.list-inline li:nth-child(1) a');


ReactDOM.render(<InButton/>, domContainer);