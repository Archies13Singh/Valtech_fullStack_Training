<template>
  <div>
    <h1 v-text = "title"></h1>
    <div v-html = "messageTag"></div>
    <hr>
    <h1>{{title.toUpperCase()}}</h1>
    <h2>{{title.toUpperCase().length}}</h2>
    <h2>{{age*20}}</h2>
    <div v-bind:class="dynamicClass">
      <h1>Box1</h1>
    </div>
    <div v-bind:id="dynamicId">
      <h1>Box2</h1>
    </div>

    <hr>

    <input type="checkbox" name="" id="">
    <label for="">Check in to see the data</label>

    <div v-bind:class = "['box1','brdr']">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tenetur repudiandae facere dolorem. Quam quibusdam non minus pariatur esse quis, at illo recusandae?
    </div>
    <div v-bind:class = "{'pinkbox': gender === 'female'}">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati tenetur repudiandae facere dolorem. Quam quibusdam non minus pariatur esse quis, at illo recusandae?
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      title : "Welcome to Valtech_",
      age : 20,
      messageTag : `<span>Hello <u>Chicksss</u> Are you OK ?</span>`,
      dynamicClass : 'box',
      dynamicId : "player",
      gender : "female"
    }
  }
}
</script>

<style>
  .box{
    width : 300px;
    height : 300px;
    border: 30px solid rgb(23, 7, 82);
    text-align : center;
    line-height : 250px;
    background: rgb(153, 206, 250);
  }
  #player{
    width : 300px;
    height : 300px;
    border: 30px solid rgb(4, 44, 16);
    text-align : center;
    line-height : 250px;
    background-color: rgb(100, 231, 128);
  }

  .box1{

  }
</style>
