export default Ember.Component.extend({
  tagName: "div",
  //disabled: Ember.computed.not('enabled'),
  //attributeBindings: [ "value", "checked:checked", "disabled:disabled"],

  willInsertElement: function() {
    //this.$().prop('type', 'radio')
	this.$().prop('class', rating)
  },
	didInsertElement: function() {
            Ember.$('#jRate').jRate(rating:10); // will work
    },
	
	
  //click: function() {
    //this.set("rating", this.$().val());
  //},

  //checked: function() {
  //  return this.get("value") <= this.get("rating")
  //}.property('rating'),
//topic-rating
});
