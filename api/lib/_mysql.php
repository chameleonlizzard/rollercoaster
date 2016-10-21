<?php

function connect_db()
{
    $server = 'localhost';
    $user = 'user';
    $pass = '*****';
    $database = 'database_name';

    $connection = new PDO("mysql:host=$server;dbname=$database", $user, $pass);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $connection;
}