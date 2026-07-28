

<template>

    <footer>


        <div class="audio-slider">
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width: 50%;"></div>
            </div>
            <span class="vol-gauge-text">50%</span>
        </div>


        <div class="nav-buttons">



        </div>

         <div class="audio-controls">

            <div class="audio-buttons">

            </div>

        </div>

        <div class="power-buttons">
            <base-button buttonMode="inactive-button" buttonValue="INSERTAVLUE"  name="Power" 
            >
                Power
            </base-button>
        </div>

    </footer>
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
           time:"",
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

        //Nav Buttons
        // window.CrComLib.subscribeState('n', '10', (value) =>
        // {
        //     //Need to set this up to send and recveive from the control system
        //     if(value == 1)
        //         this.$router.push('/audio-page');
        //     else if(value == 2)
        //         this.$router.push('/video-page');
        //     else if(value == 3)
        //         this.$router.push('/widget-page');
        //     else if(value == 4)
        //         this.$router.push('/scrolling-page');

        //     this.SetFooterFeedback(value) ;
        // });

        //#region Audio Values





     }


}

</script>



<style scoped lang="scss">

@use "../../SCSS/mainStyles.scss" as *;

footer
{
    position:relative;
    width: 100%;
    height: 15%;
    
    display: grid;

    .nav-buttons
    {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        button
        {
            margin-left: 10px;
        }
    }


    .power-buttons
    {

        grid-row-start: 2;
        grid-column-start: 3;

        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        button
        {
            margin-right: 10px;
        }
    }
}



</style>