<template>
  <div class="countdown">
    <div class="block">
      <span class="digit">{{ days | two_digits }}</span>
      <span class="text">Dias</span>
    </div>
    <div class="block">
      <span class="digit">{{ hours | two_digits }}</span>
      <span class="text">Horas</span>
    </div>
    <div class="block">
      <span class="digit">{{ minutes | two_digits }}</span>
      <span class="text">Minutos</span>
    </div>
    <div class="block">
      <span class="digit">{{ seconds | two_digits }}</span>
      <p class="text">Secundos</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountDown",
  props: {
    date: {
      type: String,
    },
  },
  filters: {
    two_digits(value) {
      if (value < 0) {
        return "00";
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value;
    },
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  props: {
    date: {
      type: String,
    },
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
    };
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    },
  },
};
</script>

<style>
.countdown {
  display: flex;
}

.block {
  margin: 10px;
  background: var(--dark-color);
  height: 50px;
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}

.text {
  color: #ecf0f1;
  font-size: 0.8rem;
  font-weight: bold;

}

.digit {
  color: #ecf0f1;
  font-size: 1.4rem;
  font-weight: bold;
}
</style>
