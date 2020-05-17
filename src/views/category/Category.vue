<template>
  <div>
    分类
    <div>11111111111</div>
    <div>222</div>
    <div class="wrapper" ref="aaaa">
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Nobis ipsa accusantium qui! Temporibus.</li>
        <li>Aut in autem similique aliquid!</li>
        <li>Provident cumque totam asperiores molestias?</li>
        <li>Fugiat deleniti quod maxime cum.</li>
        <li>Vitae animi natus illum pariatur?</li>
        <li>Est quisquam sed in voluptate!</li>
        <li>Ducimus quam id aperiam expedita!</li>
        <li>Consequatur quaerat voluptatibus unde iusto?</li>
        <li>Suscipit optio alias nisi iste.</li>
        <li>Deserunt nemo adipisci illum recusandae.</li>
        <li>Sed praesentium sunt incidunt excepturi.</li>
        <li>Quasi voluptatem voluptatum ad ab.</li>
        <li>Aliquam fuga delectus nesciunt autem.</li>
        <li>Iusto eveniet omnis consequuntur aut.</li>
        <li>Dolorum earum similique nostrum voluptatum!</li>
        <li>Quam necessitatibus doloremque inventore quasi.</li>
        <li>Obcaecati accusamus inventore molestiae mollitia?</li>
        <li>Non qui voluptates facere dolorem.</li>
        <li>Ipsum sed accusantium dolor maxime.</li>
        <li>Quos pariatur totam nisi vero.</li>
        <li>Nesciunt earum odio ipsum animi.</li>
        <li>Iure voluptates odio fugit consectetur?</li>
        <li>Pariatur nemo odit praesentium alias.</li>
        <li>Vero similique inventore nulla esse.</li>
        <li>Harum repellendus at magnam libero?</li>
        <li>Quia voluptatem aperiam provident deleniti?</li>
        <li>Ab itaque voluptatem nisi ex!</li>
        <li>Quasi doloribus saepe a quas?</li>
        <li>Impedit provident ratione alias eveniet?</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "Category",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    console.log(this.$refs.aaaa);
    this.scroll = new Bscroll(this.$refs.aaaa, {});
    console.log(this.scroll);
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  /* overflow: scroll; */
}
</style>