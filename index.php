
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <title>r1cardo.com</title>
            <link href="designCover.css" rel="stylesheet" type="text/css"/>
        <meta name="google-site-verification" content="jhZt46bimRxxyXWFGCMm_sG0BALdQF8v_0hjRDK0Bz4" />        
        </head>

        <body>
            <header>
                <img src="img/cover.png" alt="r1cardo.com logo" id="imageCover"/>
                <div id="menu">
                    
                    <input class="buttonMenu" type="button" value="Acerca de mi" id="btnAbout">
                    <form   action="projects/projects.html">
                        <input class="buttonMenu" type="submit" value="Portfolio" />
                    </form>
                    <input class="buttonMenu" type="button" value="Blogs" id="btnBlogs">
                    <input class="buttonMenu" type="button" value="Juega rubik!!!!" id="btnRubik">
                    <input class="buttonMenu" type="button" value="Contacto" id="btnContact">
                    <!-- Contador de visitas -->
                    <center><a href="https://websmultimedia.com/contador-de-visitas-gratis" title="Visitas">
                    <img style="border: 0px solid; display: inline;" alt="Visitas a r1cardo.com" src="https://websmultimedia.com/contador-de-visitas.php?id=7900">
                    </a><br><a>Visitas a r1cardo.com</a><br></a></center>
                    <!-- Fin Contador de visitas -->

                </div>
                
        

                 <br> <a>  <?php echo($ip = $_SERVER [ 'REMOTE_ADDR' ])?></a> <br> ?>

                
                    
                
            </header>
            
            <article>
                <iframe src="blogs/listBlogs.html" id="article">  </iframe>
            </article>

            <footer>
                <img src="img/beatles.jpg" alt="imagen beatles caminando" id="imageFooter"/>
                <hr/> 
                <p id="textFinal"> Web created by Ricardo Coronado  2019</p>
                
            </footer>
            <script src="molde.js"></script>
        </body>
    </html>
?>
