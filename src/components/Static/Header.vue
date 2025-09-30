<template>
    <header>
        <img :src="headerImagePath" alt=""> 

        <p class="banner">
            {{ headerBanner }}
        </p>

        <p class="date-time">
            {{ time }}
        </p>
    </header>
</template>



<script>


export default
{
    inject:[],
    props:
    {
        headerImagePath:
        {
            type: String,
            default: ""
        },
        headerBanner:
        {
            type: String,
            default: "Header Banner"
        }
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
        UpdateTime()
        {
            const date = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-US', options);

            let hours = date.getHours(); 
            const minutes = date.getMinutes().toString().padStart(2, '0'); 

            const amPm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12; 

            this.time = `${hours}:${minutes} ${amPm}`;

            return this.time;
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
        this.UpdateTime();
        setInterval(() => 
        {
            this.UpdateTime();
        }, 100); 
    }


}

</script>



<style scoped lang="scss">

@use "../../SCSS/mainStyles.scss" as *;

header
{
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &::before
    {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: $static-object-background;
        opacity: .3;
        z-index: -1;
    }




    img
    {
        height: 80%;
        width: 150px;
        border-radius: 50%;
    }

    img:hover
    {
        
    }

    .banner
    {
        font-size: $font-large-size;
        color: $primary-font-color;
    }

    .banner:hover
    {
        color: $secondary-font-color;
    }

    .date-time
    {
        font-size: $font-small-size;
        color: $primary-font-color;
    }

    .date-time:hover
    {
        color: $secondary-font-color;
    }
}

</style>