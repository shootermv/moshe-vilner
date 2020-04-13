'use strict';
// IN button
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

ReactDOM.render(<InButton/>, document.querySelector('.social.list-inline li:nth-child(1) a'));

// SKILLS

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      skills: [ 
      'HTML5',
      'CSS3',
      'SASS',
      'LESS',
      'Git',                    
      'AngularJS',
      'Angular',
      'Nodejs',
      'React',
      'Vue.js',
      'Redux',
      'English',
      'Hebrew', 
      'Russian' 
      ] 
    };
  }

  render() {
    return (     
      this.state.skills.map((skill, i) => (<span key={i} className='skill-tag'>{skill}</span>))         
    );
  }
}

ReactDOM.render(<Skills/>, document.querySelector('.misc-skills'));

// SKILLS