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
      'slim.js',
      'English',
      'Russian' 
      ] 
    };
  }

  render() {
    return (
      <div> 
      {this.state.skills.map((skill) => (<span key={skill} className='skill-tag'>{skill}</span>))}
      </div>     
    );
  }
}

ReactDOM.render(<Skills/>, document.querySelector('.misc-skills'));

// SKILLS