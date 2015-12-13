$(document).ready(function(){
	var row, col;
	var i,j;
	$('.submit-button').on('click', function(){

		row = $('#row-text').val();
		col = $('#col-text').val();
		
			if(row < 0 || col < 0 || row=="" || col==""){
				alert("Please fill both row and column number above 0");
			}
			else{
				$('.table-head').append("<tr class='table-header-row'></tr>");
				for(i=0; i<=row; i++){
					$('.table-body').append("<tr class='table-row'></tr>");

				}
				for(j=0; j<col; j++){
					$('.table-row').append("<td class='table-column' contenteditable='true'></td>");
					$('.table-header-row').append("<th class='table-header-column'><div class='th-div' contenteditable='true'>Header Text"+ j+"</div></th>");
				}
				$('#row-text, #col-text, .submit-button').attr('disabled', true);
			
				// $('th > div').on('click', function(){
				// 	$(this).hide();
				// 	$(this).parent().append("<input type='text' style='position:absolute'>")
				// 	event.stopPropagation();
				// })


			
			}
			$('.th-div').innerWidth($('.th-div').parents('th').width());

			$('.sorting-btn, input').on('click', function(){
	    		table();
	    		$hdrTxt.val('');
			 });

				function table(){
					$('table').DataTable( {
						destroy:true,
		    			fixedHeader:true,
		    			searching:true,
		    			// scrollY:true,
		    			responsive:true,
		    			// scrollCollapse:true,
		    			// paging:false
					} );
				}
				table();
			 $hdrTxt = $('.hdr-text-class');
			
			 $('.sorting-btn, .second-row, .table-hdr').removeClass('disp-none');
			 
			 $('th').on('click', function(){
			 	$val = $(this);
			 	$hdrTxt.val($(this).text());
			 	 $hdrTxt.on('keyup', function(){
			 	 	$val.find('div').text($(this).val());
			 	 	$val.find('div').attr('title', $(this).val())
			 	 });

			 });

	});


	
});