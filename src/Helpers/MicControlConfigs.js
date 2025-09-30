export const micControlConfigs = [
{  
   gauge: 
   {
        typeClass:"vertical-gauge",
        gaugeClass:"vertical-gauge-fill",
        value:100
    },
    baseButtonClass: "mic-btn",
    baseMuteButtonClass:   "mute-btn",
    buttons: 
    [
        { label: "Vol\nUp", value: 100, type:"up", state:false },
        { label: "Vol\nMute", value: 102, type:"mute", state:false   },
        { label: "Vol\nDn", value: 101, type:"down", state:false   }
    ],
    name:"mic1",
},
{  
   gauge: 
   {
        typeClass:"vertical-gauge",
        gaugeClass:"vertical-gauge-fill",
        value:105
    },
    baseButtonClass: "mic-btn",
     baseMuteButtonClass:   "mute-btn",
    buttons: 
    [
        { label: "Vol\nUp", value: 105, type:"up", state:false  },
        { label: "Vol\nMute", value: 107, type:"mute", state:false   },
        { label: "Vol\nDn", value: 106, type:"down", state:false   }

    ],
    name:"mic2",
    containerClass:"audio-controls-container"
},
{  
   gauge: 
   {
        typeClass:"vertical-gauge",
        gaugeClass:"vertical-gauge-fill",
        value:110
    },
    baseButtonClass: "mic-btn",
     baseMuteButtonClass:   "mute-btn",
    buttons: 
    [
        { label: "Vol\nUp", value: 110, type:"up", state:false  },
        { label: "Vol\nMute", value: 112, type:"mute", state:false   },
        { label: "Vol\nDn", value: 111, type:"down", state:false   }

    ],
    name:"mic3",
    containerClass:"audio-controls-container"
},
{  
   gauge: 
   {
        typeClass:"vertical-gauge",
        gaugeClass:"vertical-gauge-fill",
        value:115
    },
    baseButtonClass: "mic-btn",
     baseMuteButtonClass:   "mute-btn",
    buttons: 
    [
        { label: "Vol\nUp", value: 115, type:"up", state:false  },
        { label: "Vol\nMute", value: 117, type:"mute" , state:false  },
        { label: "Vol\nDn", value: 116, type:"down" , state:false  }

    ],
    name:"mic4",
    containerClass:"audio-controls-container"
},
{  
   gauge: 
   {
        typeClass:"vertical-gauge",
        gaugeClass:"vertical-gauge-fill",
        value:120
    },
    baseButtonClass: "mic-btn",
     baseMuteButtonClass:   "mute-btn",
    buttons: 
    [
        { label: "Vol\nUp", value: 120, type:"up", state:false  },
        { label: "Vol\nMute", value: 122, type:"mute" , state:false  },
        { label: "Vol\nDn", value: 121, type:"down", state:false   }

    ],
    name:"mic5",
    containerClass:"audio-controls-container"
}
];