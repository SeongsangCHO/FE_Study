class HistorySearch {
  constructor({ $target }) {
    this.$historyWrapper = document.createElement('div');
    this.$historyWrapper.className = "history-wrapper";
    $target.appendChild(this.$historyWrapper);
    this.render();
  }

  render();
}
