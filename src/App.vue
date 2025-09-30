

<template>

  <PowerPage />
  <PowerCountdownPage />
  <div class="app-container">
    <Header
    :headerImagePath="headerImage"
    headerBanner="Simple Vue JS Example"
    />


    <router-view></router-view>



    <Footer/>


  </div>


</template>



<script >


import Header from './components/Static/Header.vue';
import Footer from './components/Static/Footer.vue';
import PowerPage from './components/Modals/PowerPage.vue';
import PowerCountdownPage from './components/Modals/PowerCountdownPage.vue';



export default
{
    // inject:[],
    // props:
    // {
           //properties to child componenet
    // },
    // emits:  
    // [
           //Lets a child componenets send an event up to the parent
    // ],
    components:
    {
        Header,
        Footer,
        PowerPage, 
        PowerCountdownPage,
    },
    // provide()
    // {
            // This provides data or methods to child compoenents
            //In the child componenet you would inject what is being provided
    // },
    data()
    {
        return{
          headerImage: HeaderImage
        }
    },
    methods:
    {

    },
    computed:
    {
      //used for computed props, values that depend on other data
      // these are cahced and only re evaluated when dependencies change
      // good for getting or deriving data
    },
    watch:
    {
      //REACTS to changes in data or computed props
      // runs function whenever watched value changed
      // useful for side effects, apicalls, or respodning to changes OUTSIDE of the template I>E CONTROL SYSTEM
    },

  }




</script>



<style scoped>

.app-container 
{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
