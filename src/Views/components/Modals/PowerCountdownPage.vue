

<template>

<div 
    :class="['powering-down-container', isVisible ? 'visible' : 'hidden']">

    <section class="power-countdown-container">
        <p class="power-countdown-text">
            System is powering down please wait <br></br>
            <span class="power-countdown-number">
                {{timeLeft}}
            </span>
        </p>
    </section>

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
            isVisible: false,
            timeLeft:0
           
        }
    },
    methods:
    {
        SetpageVisibility(value)
        {
            this.isVisible = value ;
        },
        SetPageTime(value)
        {
            this.timeLeft = value;
        }
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

.powering-down-container
{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;

    z-index: 9998;


}

</style>