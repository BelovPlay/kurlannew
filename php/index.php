<?php 
// Данные с инпутов
$id=$_POST['Id'];
$name=$_POST['Name'];
$mail=$_POST['Email'];
$phone=$_POST['Phone'];
$numticket=$_POST['NumTicket'];
// Данные для БД
$servername="localhost";
$username="root";
$password="";
$dbname='clients';
$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect__error){
    echo 'Подключение не удалось';
    die('Connection Failed:'.$conn->connect__error);
}
$sql="INSERT INTO users (Name,Email,Phone,NumTicket)
VALUES ('$name','$mail','$phone','$numticket')"
if($conn->query($sql)===TRUE){
    echo "Данные отправлены";
}else{
    echo "Error: " . $sql . '<br>' . $conn->$error;
    echo 'Данные не отправлены';
}
$conn->close();
?>