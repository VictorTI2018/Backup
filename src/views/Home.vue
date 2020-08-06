<template>
  <div class="home">
    <v-main tamanho="80%"/>
    <footer class="footer">
      <div class="footer__container-text">
        <span>Agende agora sua reunião, vagas limitadas!</span>
      </div>
      <vs-button color="danger" @click="agendar">GARANTIR A MINHA REUNIÃO</vs-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    agendar() {
      this.$router.push("/agendar")
    }
  }
};
</script>

<style lang="scss">
.home {
  height: 100vh;
}


.footer {
  height: 20%;
  width: 100%;
  background-color: var(--dark-color);
  z-index: 1;
  display: block;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.footer__container-text {
  margin-top: 20px;
  color: var(--white-color);
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.vs-button {
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  padding: 10px;
  border: 0;
  border-radius: 0 !important;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: transparent;
}
.vs-button-danger.vs-button-filled:hover {
  box-shadow: 0 !important;
}



@media (min-width: 168px) and (max-width: 779px) {
  .footer__container-text{
    font-size: 1rem;
  }
}
</style>
