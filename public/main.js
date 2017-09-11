$(document).ready(function(){

	// FRONT END JS/JQUERY
	var totalCost=0
	var totalWeight=0
	var duffleCost=50
	var suitcaseCost=100
	var backpackCost = 100
	var spareCost = 100
	var duffleWeight = 20
	var suitcaseWeight = 50
	var backpackWeight = 40
	var spareWeight = 50

	//ADD dufflebag
	$("#add-duffle").click(function(){
		totalCost = totalCost + duffleCost
		console.log('total cost', totalCost);
		totalWeight = totalWeight + duffleWeight
		console.log('total weight', totalWeight);
		checkCargo()
		$("#total-cost").html(`$${totalCost}`)
		$("#total-weight").html(`${totalWeight} lbs`)
	})
	$("#remove-duffle").click (function(){
		totalCost = totalCost - duffleCost
		console.log('total cost', totalCost);
		totalWeight = totalWeight - duffleWeight
		console.log('total weight', totalWeight);
		$("#total-cost").html(`$${totalCost}`)
		$("#total-weight").html(`${totalWeight} lbs`)

	})
	//ADD/DELETE Suitcase
	$("#add-suitcase").click(function(){
		totalCost = totalCost + suitcaseCost
		console.log('total cost', totalCost);
		totalWeight = totalWeight + suitcaseWeight
		console.log('total weight', totalWeight);
		checkCargo()
		$("#total-cost").html(`$${totalCost}`)
		$("#total-weight").html(`${totalWeight} lbs`)
	})
	$("#remove-suitcase").click (function(){
		totalCost = totalCost - suitcaseCost
		console.log('total cost', totalCost);
		totalWeight = totalWeight - suitcaseWeight
		console.log('total weight', totalWeight);
		$("#total-cost").html(`$${totalCost}`)
		$("#total-weight").html(`${totalWeight} lbs`)
	})
	//ADD/DELETE BACKPACK
	$("#add-backpack").click(function(){
		totalCost = totalCost + backpackCost
		console.log('total cost', totalCost);
		totalWeight = totalWeight + backpackWeight
		console.log('total weight', totalWeight);
		checkCargo()
		$("#total-cost").html(`$${totalCost}`)
		$("#total-weight").html(`${totalWeight} lbs`)
	})
	$("#remove-backpack").click (function(){
		totalCost = totalCost - backpackCost
		console.log('total cost', totalCost);
		totalWeight = totalWeight - backpackWeight
		console.log('total weight', totalWeight);
		$("#total-cost").html(`$${totalCost}`)
		$("#total-weight").html(`${totalWeight} lbs`)
	})
	//ADD/DELETE Spare Tire
	$("#add-spareTire").click(function(){
		totalCost = totalCost + spareCost
		console.log('total cost', totalCost);
		totalWeight = totalWeight + spareWeight
		console.log('total weight', totalWeight);
		checkCargo()
		$("#total-cost").html(`$${totalCost}`)
		$("#total-weight").html(`${totalWeight} lbs`)
	})
	$("#remove-spareTire").click (function(){
		totalCost = totalCost - spareCost
		console.log('total cost', totalCost);
		totalWeight = totalWeight - spareWeight
		console.log('total weight', totalWeight);
		$("#total-cost").html(`$${totalCost}`)
		$("#total-weight").html(`${totalWeight} lbs`)
	})






	var checkCargo = function (){
		if (totalCost<=0 && totalWeight<=0) {
			$("#validate-button").addClass( "btn-danger");
			$("#validate-button").removeClass("btn-success");
		}
		else if (totalCost>201 || totalWeight >201) {
			$("#cargo-status").html (`Your cargo exceeds $200 or 200lbs. Remove some cargo.`)
			$("#validate-button").addClass( "btn-danger");
			$("#validate-button").removeClass("btn-success");
		}
		else if (totalCost>0 && totalCost<=200 && totalWeight >0 && totalWeight<=200) {
			$("#cargo-status").html (`Your cargo is within the limits.`)
			$("#validate-button").addClass( "btn-danger");
			$("#validate-button").removeClass("btn-success");
		}
	}

	//Validate the cargo button
	$("#validate-button").click (function(event){
		event.preventDefault();
		$.post('/validate-cargo',
			{
				cost: totalCost,
				weight: totalWeight,
			},
			function(data) {
				$('#validator-status').html(data.message);
				console.log(data);	
			}
		);
	});





//end of document.ready
})