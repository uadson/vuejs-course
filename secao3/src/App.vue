<template>
  <div>
    <template v-if="this.question">
      <h1 v-html="this.question"></h1>

      <template v-for="(answer, index) in this.answers" v-bind:key="index">
        <input type="radio" name="options" :value="answer" v-model="this.chosen_answer">
        <label v-html="answer"></label><br>
      </template>

      <button @click="this.submitAnswer()" class="send" type="button">Send</button>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data() {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      chosen_answer: undefined,
    }
  },

  computed: {
    answers() {
      let answers = [...this.incorrectAnswers]
      // splice(add_element, delete_element, element)
      answers.splice(Math.round(Math.random() * answers.length), 0, this.correctAnswer)
      return answers
    }
  },

  methods: {
    submitAnswer() {
      if (!this.chosen_answer) {
        alert("Pick one of the options")
      } else {
        if (this.chosen_answer == this.correctAnswer) {
          alert("You got it right!")
        } else {
          alert("You got it wrong!")
        }
      }
    }
  },

  created() {
    axios
      .get('https://opentdb.com/api.php?amount=1&difficulty=easy')
      .then((response) => {
        this.question = response.data.results[0].question
        this.incorrectAnswers = response.data.results[0].incorrect_answers
        this.correctAnswer = response.data.results[0].correct_answer
      })
  }
}

</script>