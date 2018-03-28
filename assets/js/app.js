$( document ).ready(function() {
   
$("#lista").click(function() {
       $("#first").hide();
       $("#second").show();
});

//Programando boton guardar
$("#guardar").click(function() {
      
     //Ocultando la sección three
     $("#three").show();
     let newList = $("#nombre_lista").val();
     $("#nombre_lista").val("");
     let div_col = $(document.createElement('div'));
     let div_id = $(document.createElement('div'));
     let formulario = $(document.createElement('form'));
     let div_class = $(document.createElement('div'));
     let div_new = $(document.createElement('div'));
     let boton = $(document.createElement('button'));

    div_col.prop("id","three");
    div_col.addClass("col-lg-2");
    div_id.prop("id","new_section");
    div_class.addClass("form-group");
    div_new.prop("id","new_list");
     div_new.addClass("new_list");
    div_new.text(newList);
    boton.prop("id","guardar_new");
    boton.addClass("btn btn-secondary");
    boton.text("Añadir una Tarjeta");
    boton.prop("type","button");

        boton.click(function(){
        
            let formulario_2 = $(document.createElement('form'));
            let div_class_2 = $(document.createElement('div'));
            let div_id_2 = $(document.createElement('div'));
            let div_new_2 = $(document.createElement('div'));
            let area = $(document.createElement('textarea'));
            let boton_2 = $(document.createElement('button')); 

            div_class_2.addClass("form_group");
            div_id_2.prop("id","new_list");
            div_new_2.prop("id","new_tarjeta");
            div_new_2.addClass("new_tarjeta");
            area.addClass("form-control");
            area.prop("id","tarea");
            boton_2.prop("id","guardar_tarjeta");
            boton_2.addClass("btn btn-secondary");
            boton_2.text("Guardar");
            boton_2.prop("type","button");
           
            boton_2.click(function(){
              let parrafo = $(document.createElement('p'));
              //Asigno a parrafo.text lo que esta en area.text
              // Luego limpio area.text
              parrafo.html(area.val());
              area.val('');
              div_new_2.append(parrafo);
             });

            
            div_class_2.append(div_id_2);
            formulario_2.append(div_class_2);
            formulario_2.append(div_new_2);
            formulario_2.append(area);
            formulario_2.append(boton_2);
            div_class.append(formulario_2);
            boton.hide(); 
           
         });

        div_class.append(div_new);
        formulario.append(div_class);
        formulario.append(boton);
        div_id.append(formulario);
        div_col.append(div_id);

     $('#section_parent').before(div_col);


  });

});