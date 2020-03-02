<script type="text/javascript">
        $(function(){
            $("#txtBusca").keyup(function(){
                var texto = $(this).val();
                 
                $("#lista_de_ramais li").css("display", "block");
                $("#lista_de_ramais li").each(function(){
                    if($(this).text().indexOf(texto) < 0);
                       $(this).css("display", "none");
                       if($(this).text().toUpperCase().indexOf(texto.toUpperCase()) < 0);
                    $(this).css("display", "none");
                });
            });
        });
</script>
         <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.9.3/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.9.3/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script> 