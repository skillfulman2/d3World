import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Purpose</h1>
            <p>
                Trying to do some routing in vanilla javascript and familialrizing myself with d3
            </p>
            <p>
                <a href="/D3" data-link>Go to first d3 example</a>.
            </p>
        `;
    }
}