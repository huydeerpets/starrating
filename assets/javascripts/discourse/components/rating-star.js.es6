export default Ember.Component.extend({
  tagName: "div",
  //disabled: Ember.computed.not('enabled'),
  //attributeBindings: [ "value", "checked:checked", "disabled:disabled"],

  //willInsertElement: function() {
    //this.$().prop('type', 'radio')
	//this.$().prop('id', 'jRate')
  //},
	didInsertElement: function() {
            Ember.$('#jRate').jRate(
			
				//onChange: function(rating){
				//	$('#jRate'+topic.id).text(rating);
				//}, 
				min:0,
				max:10,
				width: 23,
				height: 23,
				precision: 1,
				count: 10,
				minSelected:1,
				readOnly:true
				
			); // will work
    },
	
	
  //click: function() {
    //this.set("rating", this.$().val());
  //},

  //checked: function() {
  //  return this.get("value") <= this.get("rating")
  //}.property('rating'),
//topic-rating
});
