<?php
session_start();
if((!isset($_SESSION['email_usuario']) == true ) and (!isset($_SESSION['senha_usuario']) == true )){

    unset($_SESSION['email_usuario']);
    unset($_SESSION['senha_usuario']);
    header('Location : login.html');

}

    $logado = $_SESSION['nome_usuario'] ;
    $email = $_SESSION['email_usuario'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../page/style.css">
    <title>CineTec</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <style>
        .navbar {
            background-color: Black;
        }
    </style>
</head>
<body>


    <section>
        <header>
            
            <nav class="navbar fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">CineTec</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Usuário: <?= $logado?></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Email: <?= $email?></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                            </a>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
        <div class="content">
            <div class="text">
                <h2> <br><span>CINETEC</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem eaque voluptas accusamus, illum, quisquam distinctio adipisci iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae architecto eligendi repellendus delectus?</p>
                <a href="#">FILMES EM DESTAQUE</a>
            </div>
        </div>
      
    </section>



    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
</body>
</html>


