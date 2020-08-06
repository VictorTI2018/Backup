<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="agendar">
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          <vs-icon
            icon="home"
            size="40px"
            style="cursor: pointer;"
            @click="home"
          ></vs-icon>
        </vs-navbar-title>
      </div>
    </vs-navbar>
    <main class="main">
      <div class="main__container">
        <strong class="main__container-title spacing">Road Show Online</strong>
        <img class="logo" src="../assets/bobs.png" />
        <span class="main__container-text ">NITERÓI</span>
        <strong class="main__container-subtext">10 de agosto</strong>
      </div>
    </main>
    <section class="section">
      <div class="section__title">
        <p class="title">Agende agora sua reunião</p>
        <p class="subtext">Escolha horario para agendar abaixo</p>
      </div>
      <form class="agendar-form">
        <vs-row>
          <vs-col vs-w="1.5" vs-sm="3" vs-xs="9" class="input-group">
            <label class="label-select">10/08/2020</label>
            <vs-select class="selectExample" v-model="model.horario">
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in options"
              />
            </vs-select>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col vs-lg="3" vs-sm="6" vs-xs="12">
            <div class="input-group">
              <vs-input
                v-validate="'required'"
                placeholder="Nome"
                name="nome"
                v-model="model.nome"
              />
              <span class="text-danger text-sm" v-show="errors.has('nome')">{{
                errors.first("nome")
              }}</span>
            </div>
          </vs-col>
          <vs-col vs-lg="6" vs-sm="6" vs-xs="12">
            <div class="input-group">
              <vs-input
                v-validate="'required'"
                placeholder="Sobrenome"
                name="sobrenome"
                v-model="model.sobrenome"
              />
              <span
                class="text-danger text-sm"
                v-show="errors.has('sobrenome')"
                >{{ errors.first("sobrenome") }}</span
              >
            </div>
          </vs-col>
        </vs-row>

        <vs-row>
          <vs-col vs-lg="3" vs-sm="4" vs-xs="12" class="input-group">
            <vs-input
              v-validate="'required'"
              placeholder="Celular"
              name="celular"
              v-model="model.celular"
            />
            <span class="text-danger text-sm" v-show="errors.has('celular')">{{
              errors.first("celular")
            }}</span>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col vs-lg="3" vs-sm="4" vs-xs="12" class="input-group">
            <vs-input
              v-validate="'required|email'"
              placeholder="Email"
              name="email"
              v-model="model.email"
            />
            <span class="text-danger text-sm" v-show="errors.has('email')">{{
              errors.first("email")
            }}</span>
          </vs-col>
          <vs-col vs-lg="6" vs-sm="4" vs-xs="12" class="input-group">
            <vs-input
              v-validate="'required'"
              placeholder="Confirmar Email"
              name="confirmed_email"
              v-model="model.confirmed_email"
            />
            <span
              class="text-danger text-sm"
              v-show="errors.has('confirmed_email')"
              >{{ errors.first("confirmed_email") }}</span
            >
          </vs-col>
        </vs-row>
        <div class="input-group">
          <!-- Radio Capital -->
          <label class="label-radio">Tenho todo capital necessário</label>
          <ul class="radio-group">
            <li class="radio-group-li">
              <vs-radio
                color="var(--radio-color)"
                v-model="model.capital"
                :vs-value="true"
                >Sim</vs-radio
              >
            </li>
            <li>
              <vs-radio
                color="var(--radio-color)"
                v-model="model.capital"
                :vs-value="false"
                >Não</vs-radio
              >
            </li>
          </ul>
        </div>
        <!-- Fim Radio Capital -->
        <div class="input-group">
          <!-- Radio financiamento -->
          <label class="label-radio">Farei um financiamento</label>
          <ul class="radio-group">
            <li class="radio-group-li">
              <vs-radio
                color="var(--radio-color)"
                v-model="model.financiamento"
                :vs-value="true"
                >Sim</vs-radio
              >
            </li>
            <li>
              <vs-radio
                color="var(--radio-color)"
                v-model="model.financiamento"
                :vs-value="false"
                >Não</vs-radio
              >
            </li>
          </ul>
        </div>
        <!-- Fim Radio Financiamento -->
        <span class="input-group">
          <div class="slider_container">
            <slider-custom
              :values="sliderValoresInvestimosMinimo"
              v-model="model.valorInvestimentoMinimo"
            ></slider-custom>
          </div>
        </span>
        <div class="input-group">
          <!-- Radio negocio proprio -->
          <label class="label-radio">Já foi dono de um negócio próprio?</label>
          <ul class="radio-group">
            <li class="radio-group-li">
              <vs-radio
                color="var(--radio-color)"
                v-model="model.negocio_proprio"
                :vs-value="true"
                >Sim</vs-radio
              >
            </li>
            <li>
              <vs-radio
                color="var(--radio-color)"
                v-model="model.negocio_proprio"
                :vs-value="false"
                >Não</vs-radio
              >
            </li>
          </ul>
        </div>
        <!-- Fim Radio negocio proprio  -->
        <div class="input-group">
          <!-- Radio negocio proprio -->
          <label class="label-radio">Já foi dono de uma franquia?</label>
          <ul class="radio-group">
            <li class="radio-group-li">
              <vs-radio
                color="var(--radio-color)"
                v-model="model.dono_franquia"
                :vs-value="true"
                >Sim</vs-radio
              >
            </li>
            <li>
              <vs-radio
                color="var(--radio-color)"
                v-model="model.dono_franquia"
                :vs-value="false"
                >Não</vs-radio
              >
            </li>
          </ul>
        </div>
        <!-- Fim Radio negocio proprio  -->
        <ul class="radio-group">
          <li class="termos">
            <vs-checkbox v-model="model.termos" color="var(--radio-color)">
              Eu aceito os
            </vs-checkbox>
            <a
              class="termos-link"
              href="http://trisqi.com.br/politica-de-privacidade/"
              target="_blank"
              >termos e condições</a
            >
          </li>
        </ul>

        <vs-row class="container__button">
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <vs-button
              color="danger"
              type="filled"
              @click.prevent="handleSubmit"
              >Agendar</vs-button
            >
          </vs-col>
        </vs-row>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Agendar",
  data() {
    return {
      model: {
        nome: "",
        sobrenome: "",
        celular: "",
        email: "",
        confirmed_email: "",
        capital: false,
        negocioProprio: false,
        horario: "",
        financiamento: "",
        negocio_proprio: "",
        dono_franquia: "",
        termos: false,
        valorInvestimentoMinimo: ""
      },
      sliderValoresInvestimosMinimo: [
        {
          label: "R$ 0",
          value: "0"
        },
        {
          label: "R$ 25 mil",
          value: "1"
        }
      ],
      options: [
        { text: "08:00", value: "08:00" },
        { text: "09:00", value: "09:00" },
        { text: "10:00", value: "10:00" },
        { text: "11:00", value: "11:00" },
        { text: "12:00", value: "12:00" },
        { text: "13:00", value: "13:00" },
        { text: "14:00", value: "14:00" },
        { text: "15:00", value: "15:00" },
        { text: "16:00", value: "16:00" },
        { text: "17:00", value: "17:00" },
        { text: "18:00", value: "18:00" },
        { text: "19:00", value: "19:00" },
        { text: "20:00", value: "20:00" }
      ],
      selected: { id: 1, label: "Horario" },
      activeItem: 0
    };
  },
  methods: {
    home() {
      this.$router.back();
    },
    handleSubmit() {
      if (!this.model.termos) {
        this.$vs.notify({
          title: "ATENÇÃO",
          text: "Por favor aceito os termos e condições",
          color: "danger",
          time: 2500
        });
      } else {
        const model = Object.assign(this.model);
        console.log(model);
        this.$vs.notify({
          title: "Sucesso",
          text: "Agendado com sucesso",
          color: "success",
          time: 2500
        });
      }
    },
    removeHour(index) {
      console.log(index);
    }
  }
};
</script>

<style>
.agendar {
  height: 100vh;
}

.nabarx {
  height: 45px;
}
.main {
  height: 33%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  opacity: 1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/bg.jpg");
}
.main__container {
  margin-top: 20px;
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
  font-size: 1rem;
}

.main__container-text {
  color: var(--white-color);
  font-size: 2rem;
}

.main__container-subtext {
  color: var(--white-color);
  font-size: 1.4rem;
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--dark-color);
}

.subtext {
  font-size: 0.9rem;
  color: var(--dark-color);
}

.logo {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100px;
  height: 50px !important;
}

.section {
  position: relative;
  width: 100%;
  padding: 10px 45px;
  background-color: var(--main-color);
  height: auto;
}

.agendar-form {
  margin-top: 40px;
}

.label-select {
  color: var(--dark-color);
  font-weight: 500;
  margin: 2px 4px;
}

.label-radio {
  color: var(--dark-color);
  font-weight: 600;
  margin: 4px 0;
  font-size: 0.9rem;
}

.container__button {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}

.vs-inputx {
  background-color: var(--bg-color) !important;
  width: 150% !important;
}

.input-select {
  background-color: var(--bg-color) !important;
}

.input-group {
  margin-top: 5px;
  margin-bottom: 20px;
}

.radio-group {
  list-style: none;
  display: flex;
}

.radio-group-li {
  margin-left: 5px;
  margin-right: 15px;
}
.termos {
  display: flex;
}

.termos-link {
  color: #707070 !important;
  font-weight: bold;
  text-decoration-line: underline !important;
}

.slider_container {
  width: 30%;
}

@media (min-width: 168px) and (max-width: 779px) {
  .vs-inputx {
    width: 140% !important;
  }
  .slider_container {
    width: 100%;
  }

  .section__title {
    text-align: center;
  }
  .termos {
    display: inline;
  }
  .termos-link {
    font-size: 0.9rem;
  }
  .label-radio {
    font-size: 0.8rem;
  }
  .section {
    padding: 10px;
    width: 100%;
  }

  .radio-group {
    margin-top: 10px;
  }
  .title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--dark-color);
  }

  .subtext {
    font-size: 0.7rem;
    color: var(--dark-color);
  }
}
</style>
