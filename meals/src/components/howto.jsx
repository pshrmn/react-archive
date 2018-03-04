import React from 'react';

class HowTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };

    this.toggleVisible = this.toggleVisible.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.visible !== this.state.visible;
  }

  toggleVisible(event) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    });
  }

  render() {
    let buttonText = this.state.visible ? 'Hide Help' : 'Show Help';
    let visibleClass = this.state.visible ? '' : 'hidden';
    return (
      <div className='help'>
        <h3>
          How to: 
        </h3>
        <button onClick={this.toggleVisible}>{buttonText}</button>
        <ol className={visibleClass}>
          <li>
            Go to the YouTube page for the recipe you would like to make and copy the url from the address bar.
          </li>
          <li>
            Paste the url into the "YouTube URL..." box below, then click "Add Recipe"
          </li>
          <li>
            An embedded copy of the video will appear in the page.
          </li>
          <li>
            Type in the name of the recipe.
          </li>
          <li>
            Press play on the video and write down the ingredients and instructions while you watch the video, pausing to catch up whenever the chef is moving faster than you can type.
          </li>
          <li>
            When you've written everything down, click the "Save" button.
          </li>
          <li>
            If you would like a paper copy, print the recipe. Only your input will be printed, everything else will be hidden.
          </li>
        </ol>
      </div>
    );
  }
}

export default HowTo;
