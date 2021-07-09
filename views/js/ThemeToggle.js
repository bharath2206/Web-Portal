'use strict';

const e = React.createElement;


class ThemeToggle extends React.Component {
  constructor(props) {
    super(props);
    if(localStorage.getItem('theme')==='null'){
      console.log(1);
      this.state = {theme: 'light'};
    }
    else{
      this.state = {theme: localStorage.getItem('theme')};
      if(this.state.theme=='light'){
        localStorage.setItem('theme', 'light');
        var root = document.querySelector(':root');
        root.style.setProperty('--background', '#fff');
        root.style.setProperty('--background1', '#efefef');
        root.style.setProperty('--text-b', '#666666');
        root.style.setProperty('--foreground', '#000');
        root.style.setProperty('--foreground1', '#101010');
      }
      else {
        localStorage.setItem('theme', 'dark');
        var root = document.querySelector(':root');
        root.style.setProperty('--background', '#000');
        root.style.setProperty('--background1', '#101010');
        root.style.setProperty('--text-b', '#efefef');
        root.style.setProperty('--foreground', '#fff');
        root.style.setProperty('--foreground1', '#efefef');
      }
    }
  }

  toggle() {
    var root = document.querySelector(':root');
    if(this.state.theme=='light'){
      this.setState({ theme: 'dark' });
      localStorage.setItem('theme', 'dark');
      root.style.setProperty('--background', '#000');
      root.style.setProperty('--background1', '#101010');
      root.style.setProperty('--text-b', '#efefef');
      root.style.setProperty('--foreground', '#fff');
      root.style.setProperty('--foreground1', '#efefef');
      return this.state.theme;
    }
    else{
      this.setState({ theme: 'light' });
      localStorage.setItem('theme', 'light');
      root.style.setProperty('--background', '#fff');
      root.style.setProperty('--background1', '#efefef');
      root.style.setProperty('--text-b', '#666666');
      root.style.setProperty('--foreground', '#000');
      root.style.setProperty('--foreground1', '#101010');
      return this.state.theme;
    }
  }

  render() {
    if (this.state.theme=='light') {
      
      return e(
        'button',
        { onClick: () =>  {this.toggle()}}, 'Dark');
    }

    return e(
      'button',
      { onClick: () => {this.toggle()}}, 'Light');
  }
}


const domContainer = document.querySelector('#root');
ReactDOM.render(e(ThemeToggle), domContainer);