import "./assets/styles/HankenGroteskFont.css";
import "./App.css";
import IconReaction from "./assets/images/icon-reaction.svg";
import IconMemory from "./assets/images/icon-memory.svg";
import IconVerbal from "./assets/images/icon-verbal.svg";
import IconVisual from "./assets/images/icon-visual.svg";

function App() {
  return (
    <>
      <header className="App-header">
        <h3 className="header-title">Your Result</h3>
        <div className="score-wrapper">
          <h1 className="score">76</h1>
          <p className="score-total">of 100</p>
        </div>
        <h2 className="score-level">Great</h2>
        <p className="score-info">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </header>
      <main role="main" className="App">
        <h3>Summary</h3>
        <section about="score for each category">
          <div className="score-category-wrapper" id="category-reaction">
            <figure className="category-detail">
              <img
                src={IconReaction}
                className="category-icon"
                alt="reaction-category-icon"
              />
              <figcaption className="category-name">Reaction</figcaption>
            </figure>
            <div className="category-score">
              <span>80</span>
              <span>/</span>
              <span>100</span>
            </div>
          </div>

          <div className="score-category-wrapper" id="category-memory">
            <figure className="category-detail">
              <img
                src={IconMemory}
                className="category-icon"
                alt="memory-category-icon"
              />
              <figcaption className="category-name">Memory</figcaption>
            </figure>
            <div className="category-score">
              <span>92</span>
              <span>/</span>
              <span>100</span>
            </div>
          </div>

          <div className="score-category-wrapper" id="category-verbal">
            <figure className="category-detail">
              <img
                src={IconVerbal}
                className="category-icon"
                alt="verbal-category-icon"
              />
              <figcaption className="category-name">Verbal</figcaption>
            </figure>
            <div className="category-score">
              <span>61</span>
              <span>/</span>
              <span>100</span>
            </div>
          </div>

          <div className="score-category-wrapper" id="category-visual">
            <figure className="category-detail">
              <img
                src={IconVisual}
                className="category-icon"
                alt="visual-category-icon"
              />
              <figcaption className="category-name">Visual</figcaption>
            </figure>
            <div className="category-score">
              <span>73</span>
              <span>/</span>
              <span>100</span>
            </div>
          </div>
        </section>
        <button className="continue-btn">Continue</button>
      </main>
    </>
  );
}

export default App;
