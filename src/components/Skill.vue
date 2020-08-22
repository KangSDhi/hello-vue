<template>
  <div class="hello">
    <div class="holder">
       <!-- {{ name }}

      {{ btnState ? 'The Button Is Disable' : 'The Button Is Enable' }}

      <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button> -->

      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(addSkill)">
          <ValidationProvider name="Skill" rules="min:5" v-slot="{ errors }">
            <input type="text" placeholder="Input New Skills" v-model="skill">
            <transition name="alert-in" enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX">
              <p class="alert" v-if="errors[0]">{{ errors[0] }}</p>
            </transition>
          </ValidationProvider>
          <!-- <input type="checkbox" id="checkbox" v-model="checked"> -->
        </form>
      </ValidationObserver>
      
      
      <ul>
        <transition-group name="list" enter-active-class="animate__animated animate__bounceInUp" leave-active-class="animate__animated animate__bounceOutDown">
          <li v-for="(data, index) in skills" :key="index">
            {{ data.skill }}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>

      <!-- <p v-if="skills.length >= 1">You have more than 1 skills</p>
      <p v-else>You have less than or to 1 skill</p> -->

      <!-- <div v-bind:class="{ alert:showAlert, 'another-class': showClass }"></div> -->

      <!-- <div v-bind:class="alertObject"></div> -->

      <!-- <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div> -->
      
      <p>There are the skills that you possess.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data(){
    return{
      // name: "Sigit",
      // btnState: true
      // checked: false,
      skill: '',
      skills: [
        {skill: "PHP"},
        {skill: "JS"},
        {skill: "ASP.NET"}
      ],
      // showAlert: true,
      // showClass: true
      // alertObject: {
      //   alert: true
      // }
      // bgColor: 'yellow',
      // bgWidth: '100%',
      // bgHeight: '30px'
    }
  },
  methods: {
    addSkill(){
      this.skills.push({skill: this.skill})
      this.skill = '';
      // console.log('This checkbox value is: '+this.checked);
    },
    remove(id){
      this.skills.splice(id,1);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css");
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
/* .alert{
  background-color: yellowgreen;
  width: 100%;
  height: 30px;
}

.another-class{
  border: 5px solid black;
} */

.holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .alert{
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }

  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  i {
    float:right;
  }
</style>
