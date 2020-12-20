
//Global variables
var expanded = false;
var logged = 0;

//Global Arrays for Account management
var usr = new Array();
var pwd = new Array();
var email = new Array();

// The below three functions are required for the marketplace dropdown checkboxes to work.

//Body Type
function showBodyboxes() {
  var checkboxes = document.getElementById("body");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

//Clothing Type
function showOutfitboxes() {
  var checkboxes = document.getElementById("clothing");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

//Clothing Size Box
function showVendboxes() {
  var checkboxes = document.getElementById("vend");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}


//The below script is to provide the filtering functionality for the market filters.
//Rent/Buy filters
$(document).ready(function(){
	$('input[name=radio]').change(function(){
		if($('input[name=radio]:checked').val() == 'both'){
			$('.both').show();
			$('.rent').hide();
			$('.buy').hide();
		}
		else if($('input[name=radio]:checked').val() == 'rent'){
			$('.both').hide();
			$('.rent').show();
			$('.buy').hide();
		}
		else if($('input[name=radio]:checked').val() == 'buy'){
			$('.both').hide();
			$('.rent').hide();
			$('.buy').show();
		}
		else{
			$('.both').show();
			$('.rent').hide();
			$('.buy').hide();
		}
	});
});

//Body Filters

//MALE
$(document).ready(function(){
	$('#male').click(function(){
		if($(this).is(":checked")){
			$('.L2').show();
			$('.L5').show();
			$('.L7').show();
			$('.L8').show();
		}
		else{
			$('.L2').hide();
			$('.L5').hide();
			$('.L7').hide();
			$('.L8').hide();
		}
	});
});

//FEMALE
$(document).ready(function(){
	$('#female').click(function(){
		if($(this).is(":checked")){
			$('.L1').show();
			$('.L2').show();
			$('.L3').show();
			$('.L4').show();
			$('.L9').show();
			
		}
		else{
			$('.L1').hide();
			$('.L2').hide();
			$('.L3').hide();
			$('.L4').hide();
			$('.L9').hide();
		}
	});
});

//CHILD
$(document).ready(function(){
	$('#child').click(function(){
		if($(this).is(":checked")){
			$('.L6').show();
			$('.L10').show();
		}
		else{
			$('.L6').hide();
			$('.L10').hide();
		}
	});
});

//Clothing Type Filters
//Costumes
$(document).ready(function(){
	$('#costumes').click(function(){
		if($(this).is(':checked') && $('#male').is(':checked')){
			$('.L5').show();
		}
		else{
			$('.L5').hide();
		}
	});
	$('#costumes').click(function(){
		if($(this).is(':checked') && $('#female').is(':checked')){
			$('.L1').show();
		}
		else{
			$('.L1').hide();
		}
	});
	$('#costumes').click(function(){
		if($(this).is(':checked') && $('#child').is(':checked')){
			
		}
		else{
			
		}
	});
});

//Uniform
$(document).ready(function(){
	$('#uniform').click(function(){
		if($(this).is(':checked') && $('#male').is(':checked')){
			$('.L2').show();
		}
		else{
			$('.L2').hide();
		}
	});
	$('#uniform').click(function(){
		if($(this).is(':checked') && $('#female').is(':checked')){
			$('.L2').show();
		}
		else{
			$('.L2').hide();
		}
	});
	$('#uniform').click(function(){
		if($(this).is(':checked') && $('#child').is(':checked')){
			$('.L6').show();
		}
		else{
			$('.L6').hide();
		}
	});
});

//Formal  
$(document).ready(function(){
	$('#formal').click(function(){
		if($(this).is(':checked') && $('#male').is(':checked')){
			$('.L8').show();
		}
		else{
			$('.L8').hide();
		}
	});
	$('#formal').click(function(){
		if($(this).is(':checked') && $('#female').is(':checked')){
			$('.L9').show();
		}
		else{
			$('.L9').hide();
		}
	});
	$('#formal').click(function(){
		if($(this).is(':checked') && $('#child').is(':checked')){
			
		}
		else{
			
		}
	});
});

//Sports 
$(document).ready(function(){
	$('#sports').click(function(){
		if($(this).is(':checked') && $('#male').is(':checked')){
			$('.L7').show();
		}
		else{
			$('.L7').hide();
		}
	});
	$('#sports').click(function(){
		if($(this).is(':checked') && $('#female').is(':checked')){
			
		}
		else{
			
		}
	});
	$('#sports').click(function(){
		if($(this).is(':checked') && $('#child').is(':checked')){
			$('.L10').show();
		}
		else{
			$('.L10').hide();
		}
	});
});

//Accessories  
$(document).ready(function(){
	$('#accessories').click(function(){
		if($(this).is(':checked') && $('#male').is(':checked')){
			
		}
		else{
			
		}
	});
	$('#accessories').click(function(){
		if($(this).is(':checked') && $('#female').is(':checked')){
			$('.L3').show();
			$('.L4').show();
		}
		else{
			$('.L3').hide();
			$('.L4').show();
		}
	});
	$('#accessories').click(function(){
		if($(this).is(':checked') && $('#child').is(':checked')){
			
		}
		else{
			
		}
	});
});

// Javascript to submit sell/lease listings for review.
//Submit Listing
$(document).ready(function(){
	var itemName = 0;
	var email = 0;
	var itemDesc1 = 0;
	var itemDesc2 = 0;
	var filename = 0;
	var vend = 0;
	
	$('#sell_sub').click(function(){
		if($('#itemName').val() == ''){
			alert("You have not entered an item name. Please provide an item name.")
			return;}
		else{
			itemName = 1;
		}
	});
	$('#sell_sub').click(function(){
		if($('#itemDesc').val() == ''){
			alert("Please enter an item description including pricing.")
			return;}
		else{
				itemDesc2 = 1;
			}
	});
	$('#sell_sub').click(function(){
		if($('#itemDesc').val() == 'Please describe the item you want to list, including prices.'){
			alert("Please enter an item description including pricing.")
			return;}
		else{
				itemDesc1 = 1;
			}
	});
	$('input[name="filename"]').change(function () {
        var val = $(this).val().toLowerCase(),
            regex = new RegExp("(.*?)\.(jpg|png|jpeg)$");

        if (!(regex.test(val))) {
            $(this).val('');
            alert('Please select correct file format')
			return;
        }
		else{
				filename = 1;
			}
    });
	$('#sell_sub').click(function(){
		if (document.querySelectorAll('input[name="vend"]:checked').length === 0){
			alert("Please select a selling type")
			return;}
		else{
				vend = 1;
			}
	});
	$('#sell_sub').click(function(){
		if (itemName == 1 && itemDesc1 == 1 && itemDesc2 == 1 && filename == 1 && vend == 1){
			alert("We will get back to you as soon as we can with feedback on your submission. Fell free to submit more items.")
			$('#itemName').val('');
			$('#email').val('');
			$('#itemDesc').val('');
			$('#myFile').val('');
			$('#sellrent').prop('checked', false);
			$('#sell').prop('checked', false);
			$('#rent').prop('checked', false);
		}
	});
});

// Order an item
$(document).ready(function(){
	$('.submitOrder').click(function(){
		if(logged == 1){
			$('.filters').hide();
			$('.confirm').show();
			$('.conf_email').hide();
		}
		else{
			$('.filters').hide();
			$('.confirm').show();
			$('.conf_email').show();
		}
	});
});

//Confirm Order and Open filters again
$(document).ready(function(){
	$('#final_conf').click(function(){
		$('.filters').show();
		$('.confirm').hide();
		$('.conf_email').hide();
	});
});

// Below is required for the flickity carousel to function.
// external js: flickity.pkgd.js
















