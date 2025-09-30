

<template>

    <div class="audio-container">

      
    </div>

</template>



<script>


export default
{
    components:
    {

    },
    inject:
    [
        // Inject any global dependencies if needed
        //examples are 
    ],
    props:
    {
        // Properties to be passed in from parent component if needed
    },
    emits:  
    [
        //This is what this sends
    ],
    data()
    {
        return{
           AudioObjects:[],
           micControlComponentFeedback:{}
        }
    },
    methods:
    {

    },
    computed:
    {
        
    },
    watch:
    {
        
    },
    mounted()
    {
    }


}

</script>


<style scoped lang="scss">

@use "../../SCSS/mainStyles.scss" as *;

.audio-container
{
    width: 80%;
    height: 80%;
}

</style>

