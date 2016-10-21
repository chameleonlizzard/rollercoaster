<?php

require 'vendor/autoload.php';

$app = new \Slim\App;

$app->get('/rollercoasters', 'getRollercoasters');

$app->run();

function getRollercoasters()
{
    $sql = 'SELECT park.parkName, rollercoaster.rollercoasterName, material.materialName, type.typeName, manufacturer.manufacturerName, rollercoaster.rollercoasterYear, rollercoaster.rollercoasterTopSpeed, rollercoaster.rollercoasterLength, rollercoaster.rollercoasterHeight, rollercoaster.rollercoasterGForce, rollercoaster.rollercoasterInversions, rollercoaster.rollercoasterCapacity, rollercoaster.rollercoasterRides, rollercoaster.rollercoasterRideCapacity, rollercoaster.rollercoasterRideSeatsPerRow, safety.safetyType, rollercoaster.rollercoasterRiderMinHeight,  rollercoaster.rollercoasterRiderSoloMinHeight, rollercoaster.rollercoasterRiderMaxHeight
FROM rollercoaster
INNER JOIN `park`
ON rollercoaster.rollercoasterPark=park.parkId
INNER JOIN `material`
ON rollercoaster.rollercoasterMaterial=material.materialId
INNER JOIN `type`
ON rollercoaster.rollercoasterType=type.typeId
INNER JOIN `manufacturer`
ON rollercoaster.rollercoasterManufacturer=manufacturer.manufacturerId
INNER JOIN `safety`
ON rollercoaster.rollercoasterRideSafety=safety.safetyId
';
    include_once 'lib/mysql.php';

    try {
        $db             = connect_db();
        $stmt           = $db->query($sql);
        $rollercoasters = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db             = null;

        echo json_encode($rollercoasters);
    } catch (PDOException $e) {
        echo '{"error":{"text":' . $e->getMessage() . '}}';
    }

}