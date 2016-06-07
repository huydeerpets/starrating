export default Ember.Component.extend({
  tagName: "div",
  //disabled: Ember.computed.not('enabled'),
  //attributeBindings: [ "value", "checked:checked", "disabled:disabled"],

  willInsertElement: function() {
    //this.$().prop('type', 'radio')
	this.$().prop('id', 'jRate')
  },
	//didInsertElement: function() {
    //        this.$('#jRate').jRate()
    //},
	_initialize: function({
  Ember.run.scheduleOnce('afterRender', this, function() {
    this.$('#jRate').jRate()
  });
}).on('didInsertElement')
	
  //click: function() {
    //this.set("rating", this.$().val());
  //},

  //checked: function() {
  //  return this.get("value") <= this.get("rating")
  //}.property('rating'),
//topic-rating
});
