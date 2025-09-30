
<template>

    <div
    :class="['power-container', isVisible ? 'visible' : 'hidden']"    
    >

    <section class="power-controls-container">

        <base-button
        :buttonMode="['cancel-btn', 'power-page-btn']"
        :buttonValue="INSERTAVLUE"
        @clicker="PowerButtonClicked"
        >
        Cancel
        </base-button>


        <base-button
        :buttonMode="['power-btn', 'power-page-btn']"
        :buttonValue="INSERTAVLUE"
        @clicker="PowerButtonClicked"
        >
        Power Down
        </base-button>

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
           
        }
    },
    methods:
    {
        SetpageVisibility(value)
        {
            this.isVisible = value === 1 ? true : false;
        },
        PowerButtonClicked(state,value)
        {
            // /?Send to control system
        },

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
@use "sass:color";
.power-container
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
    opacity: 0.9;

    z-index: 9998;

    .power-controls-container
    {
        height: 40%;
        width: 50%;
        background-color: $static-object-background;
        display: flex;
        align-items: center;
        justify-content: space-around ;
        border-radius: 50px;
        opacity: 5;
        z-index: 9999;


        .power-page-btn
        {
            width:200px;
            height: 100px;

        }



        .cancel-btn
        {
            font-size: 18px;

            &:active
            {
                color:gray
            }

            &:hover
            {
                cursor: pointer;
            }
        }

        .power-btn
        {
            font-size: 18px;

            &:active
            {
                color: red;;
            }

            &:hover
            {
                cursor: pointer;
                
            }
        }





    }

}

</style>