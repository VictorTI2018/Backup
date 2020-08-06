<template>
  <main class="main" :style="setTamanho">
    <div class="main__container">
      <strong class="main__container-title">Road Show Online</strong>
      <img
        class="logo"
        src="https://logodownload.org/wp-content/uploads/2019/11/bobs-logo-2.png"
      />
      <div class="container__subtext">
        <span class="main__container-text ">NITERÓI</span>
        <span class="main__container-subtext spacing"><strong >10 de agosto</strong></span>
      </div>
      <div class="count-down">
        <count-down date="2020-08-10 09:10:00" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "VMain",
  props: ["tamanho"],
  computed: {
    setTamanho() {
      return `height: ${this.tamanho}`;
    },
  },
};
</script>

<style scoped>
.main {
  padding-top: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  opacity: 1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../../assets/bg.jpg");
}
.main__container {
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.spacing {
  margin-top: 5px;
  margin-bottom: 8px;
}

.main__container-title {
  color: var(--white-color);
  font-size: 1.6rem;
}

.main__container-text {
  color: var(--white-color);
  font-size: 2.8rem;
}

.main__container-subtext {
  color: var(--white-color);
  font-size: 1.9rem;
}

.logo {
  width: 160px;
  height: 90px !important;
  margin-top: 15px;
  margin-bottom: 10px;
}

.container__subtext {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.count-down {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
