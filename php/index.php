<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Запись информации в базу данных</title>
</head>
<body>
    <form action="" method="get">
        <label>Введите свое имя</label><br>
        <input type="text" name="name"><br>
        <label for="">Введите свой возраст</label><br>
        <input type="text" name="age"><br>
        <br>
        <input type="submit" name="formSubmit" value="Отправить">
    </form>
    <?php 
        if(isset($_GET['formSubmit'])){
            $nameForm=$_GET['name'];
            $ageForm=$_GET['age'];
            $mysqli=new mysqli("localhost", "root", "", "bd");
            if($mysqli->connect_errno){
                echo "Извините, возникла проблема на сайте";
                exit;
            }
            $name='"' .mysqli->cubrid_real_escape_string($nameform).'"';
            $age='"' .mysqli->cubrid_real_escape_string($ageform).'"';
            $query="INSERT INTO users (name,age) VALUES ($name,$age)";
            $result=$mysqli->query($query);
            if($result){
                print("Успешно!". '<br>');
            }
            $mysqli->close();
            $name='"' .mysqli->cubrid_real_escape_string($nameform).'"';
        }
    ?>
    <form action=""></form>
</body>
</html>