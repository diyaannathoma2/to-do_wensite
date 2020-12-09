

$.getJSON("https://jsonplaceholder.typicode.com/todos",  
function (data) { 
    var student = ''; 
    var c = ''; 




//    
    
    // ITERATING THROUGH OBJECTS 
    $.each(data, function (key, value) { 
        
        //CONSTRUCTION OF ROWS HAVING 
        // DATA FROM JSON OBJECT 
        student += '<tr>'; 
        student += '<td>' +  
        value.userId + '</td>'; 
        
        student += '<td>' +  
        value.id + '</td>'; 
        
        student += '<td>' +  
        value.title + '</td>'; 
        if(value.completed==true)
        {
            student += "<td>  <input type ='checkbox' checked disabled/>  </td>";  
            // ={checkStat == 1 ? true : false}
        }
        else{
            student += "<td>  <input type ='checkbox' name='tech'  enabled/>  </td>";
        }
        // var c += $('.class').filter(':checked').length
        // if(c==5)
        // {
        //     alert("congrats!");
        // }
        
         
        
        student += '</tr>'; 
    }); 
  
    
    //INSERTING ROWS INTO TABLE 
    
    // $('#table').append(student);
    // $("input[name='tech']").change(function(){
    //     var max = 5;
    //     var cnt = $("input[name='tech']:checked").length;
    //     if(cnt>max){
    //         $(this).prop("checked", "");
    //         alert("congrats!!");
    //     }
    //     });


    $('#table').append(student);
    
   





    $("input[name=tech]").change(function(){
        var promise = new Promise(function(resolve,reject){
            if( $("input[name=tech]:checked").length == 5 ){
                resolve();
            }
            else{
                reject();
            }
        });
        promise
        .then(function(){
            $("input[name=tech]").attr('disabled', 'disabled');
            $("input[name=tech]:checked").removeAttr('disabled');
            alert("Congrats. 5 Tasks have been Successfully Completed");
        })
        .catch(function(){
            $("input[name=tech]").removeAttr('disabled');
        })
    })
   
    
}); 


