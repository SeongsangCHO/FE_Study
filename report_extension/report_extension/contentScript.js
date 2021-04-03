const contentText = (date) => {
  return `
<pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-header cm-formatting-header-6 cm-header cm-header-6">###### </span><span class="cm-header cm-header-6">1. 학습 날짜</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-list cm-formatting-list-ul cm-variable-2">- </span><span class="cm-variable-2">
${date.year} - ${date.month} - ${date.date}(${date.day})
</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-hr">---</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-header cm-formatting-header-6 cm-header cm-header-6">###### </span><span class="cm-header cm-header-6">2. 학습시간</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-list cm-formatting-list-ul cm-variable-2">- </span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-hr">---</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-header cm-formatting-header-6 cm-header cm-header-6">###### </span><span class="cm-header cm-header-6">3. 학습 범위 및 주제</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-list cm-formatting-list-ul cm-variable-2">- </span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-hr">---</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-header cm-formatting-header-6 cm-header cm-header-6">###### </span><span class="cm-header cm-header-6">4. 동료 학습 방법 </span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-list cm-formatting-list-ul cm-variable-2">- </span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-hr">---</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-header cm-formatting-header-6 cm-header cm-header-6">###### </span><span class="cm-header cm-header-6">5. 학습 목표 </span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-list cm-formatting-list-ul cm-variable-2">- </span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-hr">---</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-header cm-formatting-header-6 cm-header cm-header-6">###### </span><span class="cm-header cm-header-6">6. 상세 학습 내용</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-list cm-formatting-list-ul cm-variable-2">- </span><span class="cm-variable-2">코드작성시간 :  시간</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-hr">---</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-header cm-formatting-header-6 cm-header cm-header-6">###### </span><span class="cm-header cm-header-6">7. 학습 내용에 대한 개인적인 총평</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-list cm-formatting-list-ul cm-variable-2">- </span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-header cm-formatting-header-6 cm-header cm-header-6">###### </span><span class="cm-header cm-header-6">8. 다음 학습 계획</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">&#8203;</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-formatting cm-formatting-list cm-formatting-list-ul cm-variable-2">- </span></span></pre></div>`;
};

const text = `###### 1. 학습 날짜

- 

---

###### 2. 학습시간

- 

---

###### 3. 학습 범위 및 주제

- 

---

###### 4. 동료 학습 방법 

- 

---

###### 5. 학습 목표 

- 

---

###### 6. 상세 학습 내용

- 코드작성시간 :  시간

---

###### 7. 학습 내용에 대한 개인적인 총평

- 

###### 8. 다음 학습 계획

- `;
class App {
  constructor() {
    this.init();
  }

  init() {
    this.days = ["일", "월", "화", "수", "목", "금", "토"];
    this.currentDate = this.getCurrentDate();
    //content box가 뒤늦게 완료. onLoad 이벤트 걸어봤으나 동작 X.
    setTimeout(() => this.fillForm(), 0);
  }

  fillForm() {
    this.$titleInput = document.querySelector("div.field > input");
    this.$content = document.querySelector("div.CodeMirror-code");
    // this.$textarea = document.querySelector("#edit_area");
    // this.$content.innerHTML = contentText(this.currDate);

    this.getCurrentDate();
    this.$titleInput.value = `${this.currDate.year}${this.currDate.month}${this.currDate.date} (${this.currDate.day})`;
  }

  getCurrentDate() {
    const dateObj = new Date();
    const utc = dateObj.getTime() + dateObj.getTimezoneOffset() * 60 * 1000;
    const KR_DIFF = 9 * 60 * 60 * 1000;

    this.KR_TIME = new Date(utc + KR_DIFF);
    this.currDate = {
      month:
        this.KR_TIME.getMonth() + 1 < 10
          ? "0" + (this.KR_TIME.getMonth() + 1).toString()
          : this.KR_TIME.getMonth() + 1,
      date:
        this.KR_TIME.getDate() < 10
          ? "0" + this.KR_TIME.getDate().toString()
          : this.KR_TIME.getDate(),
      year: this.KR_TIME.getFullYear(),
      day: this.days[this.KR_TIME.getDay()],
    };
  }
}

new App();
