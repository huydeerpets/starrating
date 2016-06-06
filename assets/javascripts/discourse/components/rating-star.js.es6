export default Ember.Component.extend({
  tagName: "input",
  disabled: Ember.computed.not('enabled'),
  attributeBindings: [ "value", "checked:checked", "disabled:disabled"],

  willInsertElement: function() {
   
	this.$('#jRate').jRate({
				rating:10,
				
				min:0,
				max:10,
				width: 23,
				height: 23,
				precision: 1,
				count: 10,
				minSelected:1,
				readOnly:true
				
			})
  },

  click: function() {
    this.set("rating", this.$().val());
  },

  checked: function() {
    return this.get("value") <= this.get("rating")
  }.property('rating'),
//topic-rating
});
