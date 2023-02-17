import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHeads: true, total: 0, heads: 0, tails: 0}

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      //   const {isHeads, total, heads, tails} = this.state
      this.setState(prev => ({
        isHeads: true,
        total: prev.total + 1,
        heads: prev.heads + 1,
      }))
    } else {
      this.setState(prev => ({
        isHeads: false,
        total: prev.total + 1,
        tails: prev.tails + 1,
      }))
    }
  }

  render() {
    const {isHeads, total, heads, tails} = this.state
    const imageUrl = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="container">
        <div className="box">
          <h1>Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" />
          <br />
          <button type="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="results-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
