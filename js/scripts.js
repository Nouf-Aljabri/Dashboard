    
 $(document).ready(function() {
        $('#example').DataTable( {
            "ajax": "../json/data.json",
            "columns": [
                { "data": "name" },
                { "data": "address" },
                { "data": "city" },
                { "data": "age" },
                { "data": "last visit" },
                { "data": "orders" }
            ]
        } );
    } );