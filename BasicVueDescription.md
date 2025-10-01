
# Basic Vue Description
* Vue is a progressive JavaScript framework used for building user interfaces. It is designed to be incrementally adoptable, meaning you can use it for small parts of your application or scale it up to a full-fledged single-page application (SPA).

## Vue Instance
A basic Vue instance is going to contain a <template> object, this is what the file returns as a DOM object.

You also need your <script></script> object to define all of your directing and advanced scaling.



## Vue Directives

  ## v-bind
  * Bind allows you to bind an HTML attribute to data in the Vue instance. This is to dynamically update the DOM based on reactive changes.  
  Example:
  * You can either use

    >    Example:
    >    ```
    >        <div v-bind:class="{'active': isActive}"></div>
    >    ```

  * there is also a shorthand

    >    Example:
    >    ```
    >        <div :class="{'active': isActive}"></div>
    >    ```

  ## v-if
  * Use this for conditional Rendering, combined with v-else-if and v-else to create a conditional block.

    >    Example:
    >    ```
    >        <div v-if="isActive">Active</div>
    >        <div v-else-if="isInactive">Inactive</div>
    >        <div v-else>Unknown</div>
    >    ```


## v-show
* This will hide an element based on the boolean state

    >    Example:
    >    ```
    >        <div v-show="isVisible">This is visible</div>
    >    ```


## v-for
* Use `v-for` to render a list of items by iterating over an array.

  Example:
  ```
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  ```

## v-on
* This is used for listening to Dom Events.

    >    Example:
    >    ```
    >         <button v-on:click="handleClick">Click Me</button>
    >    ```
    >    there is also a shorthand
    >    ```
    >         <button @click="handleClick">Click Me</button>
    >    ```


## Methods
* Methods in vue function like regular vanilla JS Methods. You call them based on a button press, Div press, or as a callback or any other event.


# Event Modifiers

## Keyboard Modifiers
* These are used to listen for specific keyboard events. You can use them to handle key presses.

    >    Example:
    >    ```
    >        <input v-on:input="LocalvarTogetdata"></input>
    >        <input v-on:keyup.enter="CallToLocalMethod"></input>
    >        <input v-on:keyup.s="Calling a method because S was pressed"></input>
    >    ```

## Mouse Modifiers
* These are used to listen for specific mouse events. You can use them to handle mouse clicks, double clicks, and other mouse interactions.

    >    Example:
    >    ```
    >        <button v-on:click="handleClick">Click Me</button>
    >        <button v-on:dblclick="handleDoubleClick">Double Click Me</button>
    >        <button v-on:contextmenu.prevent="handleRightClick">Right Click Me</button>
    >    ```


## Computed properties
* Computed properties are used to define properties that depend on other data. They are cached based on their dependencies and will only re-evaluate when their dependencies change.

   * Methods runs when called from HTML, but computed properties updates automatically when a dependency change.
   * Computed properties are used the same way we use data properties, but they are dynamic.

      >    Example:
      >    ```
      >        <input type="checkbox" v-model="chbxVal"> { isImportant }</input>
      >
      >        computed:
      >        {
      >            isImportant() 
      >            {
      >                if(this.chbxVal)
      >                {
      >                 return 'yes'
      >                }
      >                else 
      >                {
      >                 return 'no'
      >                } 
      >            }
      >        }
      >    ```

## Watchers
* Watchers are used to watch for changes in data properties and execute a function when the data changes. They are useful for performing asynchronous operations or side effects based on data changes.

    >    Example:
    >    ```
    >        <input type="range" v-model="rangeVal">
    >        <p>{{ rangeVal }}</p>
    >        </input>
    >
    >        <script>
    >         watch:
    >         {
    >             rangeVal(val)
    >             {
    >                 if( val>20 && val<60) 
    >                 {
    >                     if(val<40)
    >                     {
    >                         this.rangeVal = 20;
    >                     }
    >                     else 
    >                     {
    >                         this.rangeVal = 60;
    >                     }
    >                 }
    >             }
    >         } 
    >        </script>
    >    ```




# CSS Styling
* You can do Global CSS by adding style tage OR you can do scoped CSS by adding the tag scoped within the styles stag




# More Advanced things

## Components 
* These are your reuseable OOP items for dynamic coding.  Vue files are made of many components.

## Props
* This is how you pass data to a componenet. It is basically an initializer for a dynamic value. 

    > The below would be from APP. vue calling our foodItem component.  
    > ```
    >     <template>
    >       <h1>Food</h1>
    >       <food-item food-name="Apples"/>
    >       <food-item food-name="Pizza"/>
    >       <food-item food-name="Rice"/>
    >     </template>
    > ```
    >
    >
    > ```
    >     <template>
    >       <div>
    >         <h2>{{ foodName }}</h2>
    >       </div>
    >     </template>
    >
    >     <script>
    >       export default 
    >       {  
    >         props: 
    >         [
    >           'foodName'
    >         ]
    >       }
    >     </script>
    >
    > ```

As you can see, when you "instantiate" the object in the parent component you need to instantiate the variable, which is the taken as a 
property in the child component, and you use the prop as your dynamic varibale. 
you have to use kebab-case for the prop name in the parent component, but you can use camelCase in the child component.


## emit
* This is a built in vue method. 
* this is used to send data from a child component to a parent component. It is used to trigger an event in the parent component.

> **Child Class**
> ```
> <template>
>   <div>
>     <button @click="sendData">Send Data</button>
>   </div>
> </template>
>
> <script>
> export default 
> {
>   methods: 
>   {
>     sendData() 
>     {
>       this.$emit('data-sent', 'Hello from child!');
>     }
>   }
> }
> </script>
> ```
>
> **Parent Class**
> ```
> <child-item @data-sent="handleData"></child-item>
>
> methods: 
> {
>   handleData(data) 
>   {
>     console.log('Data received from child:', data);
>   }
> }
> ```

## Inject/Provide

### Provide
* This is used to provide data to child components without passing it through props. It is useful for sharing data across multiple levels of the component hierarchy.
    > Example:
    > ```
    > <script>
    > export default 
    > {
    > data() 
    > {
    >     return 
    >     {
    >         sharedData: 'This is shared data'
    >     };
    > },
    >   provide() 
    >   {
    >     return 
    >     {
    >       sharedData: this.sharedData
    >     };
    >   }
    > }
    > </script>
    > ```

### Inject
* This is used to inject data provided by an ancestor component. It allows child components to access data without passing it through props.
    > Example:
    > ```
    > <template>
    >   <div>
    >     <p>Injected Data: {{ sharedData }}</p>
    >   </div>
    >   </template>
    >
    > export default 
    > {
    >   inject: ['sharedData'], ------>>> This is INJECTINg the Provided sharedData from an ancestral component. 
    >   mounted() 
    >   {
    >     console.log('Injected data:', this.sharedData);
    >   }
    > }
    >
    > ```


## Slots
* These are a tool for more resuable component. Theyre another ay to pass content to a component, but allows the parent to override the child component. 

    > Example: this is the Container Component.
    > ```
    > <template>
    >     <div>
    >         <my-button>Click Me!</my-button>
    >     </div>
    > </template>
    >
    >
    > //Child Component
    > <template>
    >    <div>
    >      <slot></slot>
    >    </div>
    > </template>
    >
    > // This SLOT will be replaces by "my-button" inside of the slot. 
    >
    > ```

### Named Slots
* This is useful when you will have more than 1 slot inside a component

    > Example:
    > ```
    > // Child element - taking in 2 slots each with a different name
    > <template>
    >     <div>
    >         <slot name="header"></slot>
    >         <slot name="content"></slot>
    >     </div>
    > </template>
    >
    >
    > // Parent element -> Making two templates with two different names it is sending INTO the slots in the child element. 
    > <template>
    >   <div>
    >     <box-element>
    >       <template #header>
    >         This will be injected as the header slot.
    >       </template>
    >       <template #content>
    >         This will be the content of the element
    >       </template>
    >     </box-element>
    >   </div>
    > </template>
    > ```
