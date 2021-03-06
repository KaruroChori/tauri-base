import Test from "./Test.vue"

export default {
    title: "Test Component",
    component: Test
}

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => ({
  components: { Test },
  setup() {
    //๐ The args will now be passed down to the template
    return { args };
  },
  template: '<Test v-bind="args"/>',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* ๐ The args you need here will depend on your component */
};
