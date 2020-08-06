import Vue from "vue";

import CountDown from "../components/CountDown/CountDown";
import VMain from "../components/Layout/VMain";
import FeatherIcon from "../components/FeatherIcon";
import SliderCustom from "../components/SliderCustom";

import vSelect from "vue-select";

Vue.component("count-down", CountDown);
Vue.component("v-main", VMain);
Vue.component(FeatherIcon.name, FeatherIcon);
Vue.component("slider-custom", SliderCustom);

vSelect.props.components.default = () => ({
  Deselect: {
    render: (createElement) =>
      createElement("feather-icon", {
        props: {
          icon: "XIcon",
          svgClasses: "w-4 h-4 mt-1",
        },
      }),
  },
  OpenIndicator: {
    render: (createElement) =>
      createElement("feather-icon", {
        props: {
          icon: "ChevronDownIcon",
          svgClasses: "w-5 h-5",
        },
      }),
  },
});

Vue.component("v-select", vSelect);
