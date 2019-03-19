function functions(app) {

    
    //Guardar un registro
    app.operations = function(tipo){
        var url = "localhost/api/OperationsController/operations" +tipo;
        var dataSend = $("#form"+tipo).serialize(); // captura los campos
        alert(datosEnviar);
        $.ajax({
            url: url,
            method: 'POST',
            dataType: 'json',
            data: {
                "fieldOne":1,
                "fieldTwo":2
            }
        });
    };
    
    
    //oyentes
    app.listeners = function(tipo){
        $("#clear").on('click',function (event){
            ("#fieldOne").value("");
        });
                
        
        $("#calculate"+tipo).on('click', function(event){
            app.operations(tipo);
        });
        
        //validaciones de boostrap para forms
        $("#form"+tipo).bootstrapValidator({
            excluded:[]
        });
    };
    
};