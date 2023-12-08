<template>
	<div class="tab-content">
    <div class="tab-1">
      <AirConditioning />
      <OthersComponentExterior/>
      <ExtrasComponent/>
    </div>
  </div>
 
  
</template>
<script>
import http from "../../../axios.config";
import TrailerCoupling from "./TrailerCouplingComponentExterior.vue";
import ParkingResorComponentExterior from "./ParkingResorComponentExterior.vue";
import CruiseControlComponentExterior from "./CruiseControlComponentExterior.vue";
import AirConditioning from  "./AirConditioningComponent.vue"
import OthersComponentExterior from "./OthersComponentExterior.vue";
import ExtrasComponent from "./ExtrasComponent.vue";

export default {
  data() {
    return {
      isCheckedBeige: false,
      isCheckedBrown: false,
      isCheckedGold: false,
      isCheckedGreen: false,
      isCheckedRed: false,
      isCheckedSilver: false,
      isCheckedWhite: false,
      isCheckedBlue: false,
      isCheckedYellow: false,
      isCheckedGrey: false,
      isCheckedOrange: false,
      isCheckedBlack: false,
      isCheckedPurple: false,
      isCheckedMetallic: false,
			selectedColors: [],
    };
  },
	methods:{
		toggleShowCheckbox(index, colorName) {
      const isChecked = !this.selectedColors.includes(colorName);
      if (isChecked) {
        this.selectedColors.push(colorName);
      } else {
        const colorIndex = this.selectedColors.indexOf(colorName);
        if (colorIndex !== -1) {
          this.selectedColors.splice(colorIndex, 1);
        }
      }
      console.log("selectedCars изменен:", this.selectedColors)
			this.fetchData()
    },
		fetchData() {
      http
        .get("/cars/count", {
          exterior_colour: this.selectedColors,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
        })
        .catch((error) => {
          console.error("Ошибка при выполнении запроса:", error);
        });
    },
	},
  components: {
    TrailerCoupling,
    ParkingResorComponentExterior,
    CruiseControlComponentExterior,
    OthersComponentExterior,
    ExtrasComponent,
    AirConditioning
},
};
</script>
<style scoped>
select {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.custom-checkbox input[type="checkbox"] {
  display: none;
}

.custom-checkbox {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.custom-checkbox .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
}

.custom-checkbox input[type="checkbox"]:checked + .icon {
  fill: #000;
}
.custom-beige .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: rgb(210, 210, 183);
}
.custom-beige input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: rgb(210, 210, 183);
}

.custom-brown input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: #804030;
}

.custom-brown .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: #804030;
}
.custom-gold input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: gold;
}

.custom-gold .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: gold;
}
.custom-green input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: green;
}

.custom-green .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: green;
}
.custom-red input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: red;
}

.custom-red .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: red;
}
.custom-silver input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: silver;
}

.custom-silver .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: silver;
}
.custom-white input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: white;
}

.custom-white .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: white;
}
.custom-blue input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: blue;
}

.custom-blue .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: blue;
}
.custom-yellow input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: yellow;
}

.custom-yellow .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: yellow;
}
.custom-grey input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: grey;
}

.custom-grey .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: grey;
}
.custom-orange input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: orange;
}

.custom-orange .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: orange;
}
.custom-black input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: rgb(37, 37, 37);
}

.custom-black .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: rgb(37, 37, 37);
}
.custom-purple input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: purple;
}

.custom-purple .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: purple;
}
.custom-purple input[type="checkbox"]:checked + .icon {
  fill: #000;
  background: brown;
}

.custom-purple .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #000;
  border: 1px solid #000;
  border-radius: 4px;
  background: brown;
}
</style>
