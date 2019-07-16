<template>
  <div id="app">
    <Nav user="Rafael Agapito" />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <Card
            v-bind:id="base[radomic].id"
            v-bind:status="base[radomic].status"
            v-bind:datas="base[radomic].history[0].date"
            v-bind:nome="base[radomic].name"
            v-bind:origem="base[radomic].address.address"
            v-bind:nota="base[radomic].invoice"
            v-bind:motorista="base[radomic].driver.name"
          />
        </div>
      </div>
      <div class="row">
        <Map />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Card from "./components/Card.vue";
import Map from "./components/Map.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "app",
  data() {
    return {
      base: [
        {
          id: 36987,
          name: "Fernando Sartori",
          status: "Solicitação",
          driver: null,
          address: {
            address: "Av. dr. Gastao vidigal, 1132 - Vila Leopoldina",
            geolocation: {
              latitude: -23.528932,
              longitude: -46.739704
            }
          },
          invoice: "159482637",
          history: [
            {
              date: "2019-07-01 09:00",
              description: "Solicitação realizada"
            }
          ]
        },
        {
          id: 14789,
          name: "Marcelo Cerqueira",
          status: "Aguardando Coleta",
          driver: {
            name: "Caepe",
            geolocation: {
              latitude: -23.52325,
              longitude: -46.729823
            }
          },
          address: {
            address: "Av. Mofarrej, 348 - Vila Leopoldina",
            geolocation: {
              latitude: -23.526491,
              longitude: -46.739546
            }
          },
          invoice: "3261594875",
          history: [
            {
              date: "2019-06-28 09:00",
              description: "Solicitação realizada"
            },
            {
              date: "2019-06-29 09:00",
              description: "Pedido em separação"
            }
          ]
        },
        {
          id: 14563,
          name: "Rafael Rosseto",
          status: "Motorista em trânsito",
          driver: {
            name: "Pevua",
            geolocation: {
              latitude: -23.538411,
              longitude: -46.750649
            }
          },
          address: {
            address: "R. Aroaba, 439 - Vila Leopoldina",
            geolocation: {
              latitude: -23.535156,
              longitude: -46.732861
            }
          },
          invoice: "55426318547",
          history: [
            {
              date: "2019-06-29 06:00",
              description: "Solicitação realizada"
            },
            {
              date: "2019-06-29 09:00",
              description: "Pedido em separação"
            },
            {
              date: "2019-06-29 10:00",
              description: "Motorista a caminho"
            }
          ]
        },
        {
          id: 25896,
          name: "Wellington Martins",
          status: "Pedido coletado",
          driver: {
            name: "Gaeons",
            geolocation: {
              latitude: -23.524996,
              longitude: -46.715961
            }
          },
          address: {
            address: "Av. Imperatriz Leopoldina, 788 - Vila Leopoldina",
            geolocation: {
              latitude: -23.529257,
              longitude: -46.732704
            }
          },
          invoice: "886592315487",
          history: [
            {
              date: "2019-06-25 06:00",
              description: "Solicitação realizada"
            },
            {
              date: "2019-06-27 09:00",
              description: "Pedido em separação"
            },
            {
              date: "2019-06-27 10:00",
              description: "Motorista a caminho"
            },
            {
              date: "2019-06-27 15:30",
              description: "Pedido coletado"
            }
          ]
        }
      ],
      radomic: null
    };
  },
  methods: {
    busca() {
      this.radomic = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    }
  },
  created() {
    this.busca();
  },
  components: {
    Header,
    Nav,
    Map,
    Card
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 100px;
}
body {
  padding: 0px;
  margin: 0px;
}
</style>
