<template>
  <div class>
    <div class="row">
      <div class="col-md-12">
        <h1>Status da Entrega</h1>
      </div>
    </div>
    <div class="row status-card">
      <div class="col-md-4">
        <b>Número do pedido:</b>
        <h2>{{ id }}</h2>
      </div>
      <div class="col-md-4">
        <b>Status:</b>
        <h2 class="status">{{ status }}</h2>
      </div>
      <div class="col-md-4">
        <b>Data da Coleta:</b>
        <p>{{ datas }}</p>
      </div>
      <div class="col-md-4">
        <b>De:</b>
        <p>{{ nome }}</p>
        <p>{{ origem }}</p>
      </div>
      <div class="col-md-4">
        <b>Nota Fiscal:</b>
        <p>{{ nota }}</p>
      </div>
      <div class="col-md-4">
        <b>Motorista:</b>
        <p>{{ motorista }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: Number,
    status: String,
    datas: String,
    desc: String,
    origem: String,
    nota: String,
    motorista: String,
    nome: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status-card {

  background-color: whitesmoke;
  padding: 50px 0px 20px 0px;
  border-radius: 10px 
}
.status-card b {
  color: gray
}
.status-card .status{
  color: #0fbaff;
  font-weight: bold
}
.status-card .col-md-4{
  margin-bottom: 30px
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
