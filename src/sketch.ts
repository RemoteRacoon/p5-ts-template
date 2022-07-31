import p5 from 'p5'
import '../styles.css'

const {clientHeight, clientWidth} = document.body

const sketch = (p: p5) => {
  p.setup = () => {
    p.width = clientWidth;
    p.height = clientHeight;
    p.createCanvas(p.width, p.height);
    p.colorMode(p.HSB)
  }

  p.draw = () => {
    p.background(0, 0, 0);
    p.textSize(72);
    const hue = p.map(p.noise(0, 0, p.millis() * 0.0005), 0, 1, 0, 360);
    p.fill(hue, 100, 100);
    const welcomingTitle = 'Welcome to Processing app'
    p.textAlign(p.CENTER);
    p.text(welcomingTitle, p.width / 2 , p.height / 2)
  }
}

new p5(sketch)