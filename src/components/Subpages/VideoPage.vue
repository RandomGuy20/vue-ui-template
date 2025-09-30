

<template>

    <div class="video-container">

    </div>

</template>




<script>



export default
{
    inject:[],
    props:
    {

    },
    emits:  
    [

    ],
    data()
    {
        return{

           
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

.video-container
{
    width: 95%;
    height: 70%;

    display: flex;
    align-items: center;
    justify-content: space-between;


}

@keyframes bubble-button
{
    0%
    {
        transform:scale(1);
    }
    50%
    {
        transform:scale(1.2);
    }
    100%
    {
        transform:scale(1)
    }
}





</style>