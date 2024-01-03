
$(document).ready(function() {
    let currentVal = '';
    let result = 0;
  
    $('.number').click(function() {
      currentVal += $(this).text();
      $('#result').val(currentVal);
    });
  
    $('.operator').click(function() {
      if ($(this).text() !== '=') {
        currentVal += $(this).text();
        $('#result').val(currentVal);
      }
    });
  
    $('.calculate').click(function() {
      try {
        result = eval(currentVal);
        $('#result').val(result);
        currentVal = result.toString();
      } catch (e) {
        $('#result').val('Error');
        currentVal = '';
        result = 0;
      }
    });
  
    $('.clear').click(function() {
      currentVal = '';
      result = 0;
      $('#result').val('');
    });
    $('.remove').click(function() {
        currentVal= currentVal.slice(0, -1);
        $('#result').val(currentVal);
       
      });
  });
  