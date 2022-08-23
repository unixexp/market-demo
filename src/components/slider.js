import './slider.scss';

export default function Slider() {
    this.counter = 0;
    this.inc = () => {
        this.counter++;
    }
    this.result = () => console.log(this.counter);
}