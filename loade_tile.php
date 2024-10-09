<?php
include ('db.php');

mysqli_query($conn, "SET NAMES utf8");
$sql = "SELECT * FROM `tile_xml_table` ";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $Result = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n
                    <rss xmlns:g=\"http://base.google.com/ns/1.0\" version=\"2.0\"> \n
                        <channel> \n";

    while($data = $result->fetch_assoc()) {
        $Result .= " <item>\n";
        foreach($data as $key => $value) {
            $Result .=  "  <$key>$value</$key>\n";
        }
        $Result .= " </item>\n";
    }
    $Result .= "</channel>\n</rss>\n";
    echo $Result;
} else {
    echo "0 results";
}

$conn->close();

?>