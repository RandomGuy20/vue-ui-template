<template>
    <button 
    :class="['btn',buttonMode]"
    :name="name"
    :value="buttonValue"       

    @touchstart="HandleBaseButtonPress"
    @touchend="HandleBaseButtonRelease"
    @mousedown="HandleBaseButtonPress"
    @mouseup="HandleBaseButtonRelease"
    @click="HandleBaseButtonClick"
    >
        <slot></slot>
    </button>
</template>



<script>
    export default
    {
        props:
        {
            buttonMode:
            {
                type:String,
                required: true,
            },
            name:
            {
                type: String,
                default: ""
            },
            buttonValue:
            {
                type: [String, Number],
                default: ""
            },
            pressMode:
            {
                type: String,
                default: "click"
            }

        },
        methods:
        {
            HandleBaseButtonPress()
            {
                if(this.pressMode !== "click")
                {
                    this.$emit('Press', true, this.buttonValue);
                    return;
                }
            },
            HandleBaseButtonRelease()
            {
                if(this.pressMode !== "click")
                {
                    this.$emit('Release', false, this.buttonValue);
                    return;
                }

            },
            HandleBaseButtonClick()
            {
                if(this.pressMode === "click")
                {
                    this.$emit('clicker', true, this.buttonValue);
                    setTimeout(() => 
                    {
                        this.$emit('clicker', false, this.buttonValue);
                    }, 50);
                }

            }
        },
    }
</script>


<style scoped lang="scss">

@use "../../../SCSS/mainStyles.scss" as *;

.inactive-button
{
    background-color:$primary-background-color ;
}

.inactive-button:hover
{
    cursor: pointer;
}

.active-button
{
    background-color:$active-button-color;
    color: $glowing-text;
}

.active-button:hover
{
    cursor: pointer;
}

</style>